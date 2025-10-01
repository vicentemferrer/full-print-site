export async function convertToJSON(res: Response) {
  try {
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(`Bad Response: ${err.message}`);
  }
}

export function qs(selector: string, parent = document) {
  return parent.querySelector(selector) as HTMLElement;
}

export function numberFormat(
  input: number,
  language = "es-CL",
  settings: Intl.NumberFormatOptions = { currency: "CLP", style: "currency" },
) {
  return new Intl.NumberFormat(language, settings).format(input);
}

export function loadImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => reject(false);
    img.src = url;
  });
}
