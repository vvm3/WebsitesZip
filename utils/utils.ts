export function formatKey(key: string): string {
  // Insert space before capital letters, trim, and capitalize first letter
  const result = key
    // Add space before capital letters (except first)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    // Add space if multiple capitals in a row (e.g., "HTMLContent" → "HTML Content")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");

  // Capitalize first letter
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getTableFromFields(fields: Record<string, unknown>): string {
  const htmlParts: string[] = [];
  for (const [k, v] of Object.entries(fields)) {
    htmlParts.push(k.toLocaleLowerCase() == 'hp' ? "" : `
      <tr>
        <td style="font-weight: bold; width: 150px; color: #555; padding: 8px 0;">${escapeHtml(formatKey(k))}:</td>
        <td style="padding: 8px 0;">${escapeHtml(v)}</td>
      </tr>`);
  }
  return htmlParts.join("");
}