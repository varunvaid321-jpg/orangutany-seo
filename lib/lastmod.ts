// Build-time git-derived last-modified dates for sitemap accuracy.
// Runs once during `next build` (sitemap.ts is force-static). One git call
// walks history newest-first; the first time a file appears is its true
// last-modified date. Falls back to the repo's latest commit date so the
// build never breaks (e.g. shallow clone without history).
import { execSync } from "child_process";

let fileDates: Map<string, Date> | null = null;
let fallbackDate = new Date("2026-03-22T00:00:00Z"); // last known full deploy

function loadGitDates(): Map<string, Date> {
  const map = new Map<string, Date>();
  try {
    const out = execSync('git log --format="C|%cI" --name-only -- data app lib', {
      cwd: process.cwd(),
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    let current: Date | null = null;
    for (const line of out.split("\n")) {
      if (line.startsWith("C|")) {
        current = new Date(line.slice(2));
        if (map.size === 0) fallbackDate = current; // newest commit overall
      } else if (line.trim() && current && !map.has(line.trim())) {
        map.set(line.trim(), current);
      }
    }
  } catch {
    // No git available — every page falls back to fallbackDate below.
  }
  return map;
}

/** Last git-commit date for a repo-relative path, or the repo's newest commit date. */
export function lastModFor(repoPath: string): Date {
  if (!fileDates) fileDates = loadGitDates();
  return fileDates.get(repoPath) ?? fallbackDate;
}
