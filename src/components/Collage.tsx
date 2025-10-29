import { useCollage } from "@hooks/useCollage";
import { extractPhotoUUID } from "@lib/utils";

export default function Collage() {
  const { images } = useCollage();

  return (
    <section>
      {images.map((image) => {
        const photoID = extractPhotoUUID(image.name);

        return (
          <img
            key={photoID}
            src={`/api/photos/${photoID}?maxWidth=100`}
            alt={image.authorAttributions[0]?.displayName || "Place photo"}
            loading="lazy"
          />
        );
      })}
    </section>
  );
}
