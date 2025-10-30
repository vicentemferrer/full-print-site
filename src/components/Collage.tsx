import { extractPhotoUUID } from "@lib/utils";

import { useCollage } from "@hooks/useCollage";

import "./Collage.css";

export default function Collage() {
  const { images } = useCollage();

  return (
    <article className="collage">
      {images.map((image) => {
        const photoID = extractPhotoUUID(image.name);

        return (
          <div key={photoID} className="collage-item">
            <img
              src={`/api/photos/${photoID}?maxWidth=800`}
              alt={image.authorAttributions[0]?.displayName || "Place photo"}
              loading="lazy"
            />
          </div>
        );
      })}
    </article>
  );
}
