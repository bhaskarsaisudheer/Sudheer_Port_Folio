const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectRoot = path.join(__dirname, "..");
const templatePath = path.join(projectRoot, "scripts", "resume_template.html");
const outputPdfPath = path.join(projectRoot, "public", "resume.pdf");

const chromePaths = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "google-chrome",
  "chromium",
];

let chromeExecutable = null;
for (const p of chromePaths) {
  try {
    if (p.startsWith("/")) {
      if (fs.existsSync(p)) {
        chromeExecutable = p;
        break;
      }
    } else {
      execSync(`which ${p}`, { stdio: "ignore" });
      chromeExecutable = p;
      break;
    }
  } catch (e) {
    // move to next
  }
}

if (!chromeExecutable) {
  console.log("Chrome executable not found. Skipping PDF regeneration.");
  process.exit(0);
}

try {
  console.log(`Generating resume PDF from ${templatePath}...`);
  execSync(
    `"${chromeExecutable}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfPath}" "file://${templatePath}"`,
    { stdio: "inherit" }
  );
  console.log(`Successfully generated ${outputPdfPath}`);
} catch (error) {
  console.error("Error generating resume PDF:", error.message);
}
