export async function convertToJSON(res) {
  try {
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(`Bad Response: ${err.message}`);
  }
}

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
