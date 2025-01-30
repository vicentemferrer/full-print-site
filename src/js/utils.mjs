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

export function numberFormat(
  input,
  language = "es-CL",
  settings = { currency: "CLP", style: "currency" },
) {
  return new Intl.NumberFormat(language, settings).format(input);
}

export function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => reject(false);
    img.src = url;
  });
}
