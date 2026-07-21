import { NextResponse } from "next/server";

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || "bhaskarsai";

const LEETCODE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: LEETCODE_QUERY,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("LeetCode API error");

    const json = await res.json();
    const user = json?.data?.matchedUser;

    if (!user) throw new Error("User not found");

    const submissions = user.submitStats.acSubmissionNum;
    const getCount = (difficulty: string) =>
      submissions.find((s: { difficulty: string; count: number }) => s.difficulty === difficulty)?.count || 0;

    return NextResponse.json({
      totalSolved: getCount("All"),
      easySolved: getCount("Easy"),
      mediumSolved: getCount("Medium"),
      hardSolved: getCount("Hard"),
      ranking: user.profile?.ranking || 0,
    });
  } catch {
    return NextResponse.json({
      totalSolved: 200,
      easySolved: 80,
      mediumSolved: 100,
      hardSolved: 20,
      ranking: 0,
    });
  }
}
