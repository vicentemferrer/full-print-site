import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const id = import.meta.env.PLACE_ID;
  const apiURL = import.meta.env.PLACES_API_URL;
  const apiKey = import.meta.env.MAPS_API_KEY;

  try {
    const photosURL = `${apiURL}/places/${id}?fields=photos&key=${apiKey}`;

    const response = await fetch(photosURL);

    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

    const data = await response.json();
    const contentType =
      response.headers.get("content-type") || "application/json";

    return new Response(JSON.stringify(data.photos), {
      status: 200,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch place images" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
