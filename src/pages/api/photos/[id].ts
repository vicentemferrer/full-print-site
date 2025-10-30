import type { APIRoute } from "astro";

import { ALLOWED_REFERERS } from "@lib/APISets";

export const GET: APIRoute = async ({ params, request }) => {
  const referer = request.headers.get("referer");

  if (
    !referer ||
    !ALLOWED_REFERERS.some((allowed) => referer.startsWith(allowed))
  ) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { id: photoID } = params;
  const url = new URL(request.url);
  const maxWidth = url.searchParams.get("maxWidth") || "400";

  const id = import.meta.env.PLACE_ID;
  const apiURL = import.meta.env.PLACES_API_URL;
  const apiKey = import.meta.env.MAPS_API_KEY;

  try {
    const imageUrl = `${apiURL}/places/${id}/photos/${photoID}/media?max_width_px=${maxWidth}&key=${apiKey}`;

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/jpeg";

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
