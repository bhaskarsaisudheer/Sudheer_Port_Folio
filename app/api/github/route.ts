import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "bhaskarsai";

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) throw new Error("GitHub API error");

    const user = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`,
      { headers, next: { revalidate: 3600 } }
    );

    const repos = reposRes.ok ? await reposRes.json() : [];

    const totalStars = repos.reduce(
      (sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count,
      0
    );

    return NextResponse.json({
      username: user.login,
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      pinnedRepos: repos.slice(0, 4).map(
        (repo: {
          name: string;
          description: string;
          html_url: string;
          language: string;
          stargazers_count: number;
        }) => ({
          name: repo.name,
          description: repo.description || "No description",
          url: repo.html_url,
          language: repo.language || "",
          stars: repo.stargazers_count,
        })
      ),
    });
  } catch {
    return NextResponse.json({
      username: GITHUB_USERNAME,
      publicRepos: 0,
      followers: 0,
      totalStars: 0,
      pinnedRepos: [],
    });
  }
}
