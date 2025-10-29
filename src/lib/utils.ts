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

export function getParams(param: string) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param);
}

export function extractPhotoUUID(photoName: string): string {
  if (!photoName || typeof photoName !== "string") {
    throw new Error("Invalid photo name: must be a non-empty string");
  }

  const parts = photoName.split("/");

  if (parts.length !== 4 || parts[0] !== "places" || parts[2] !== "photos") {
    throw new Error(
      `Invalid photo name format: expected "places/{place_id}/photos/{photo_id}", got "${photoName}"`,
    );
  }

  const uuid = parts[3];

  if (!uuid) {
    throw new Error("Photo UUID not found in name");
  }

  return uuid;
}
