// Initials for the avatar fallback when a team member has no photo,
// e.g. "Ms. Mehjoora" → "MM", "Aadil Mir" → "AM".
export function memberInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w.replace(/[^A-Za-z]/g, "")[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
