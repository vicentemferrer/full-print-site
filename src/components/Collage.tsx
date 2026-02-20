// import { extractPhotoUUID } from "@lib/utils";

// import { useCollage } from "@hooks/useCollage";

import "./Collage.css";

type Props = {
  images: string[];
};

export default function Collage({ images }: Props) {
  // const { images } = useCollage();

  return (
    <article className="collage">
      {images.map((image, i) => {
        // const photoID = extractPhotoUUID(image.name);

        return (
          <div key={i} className="collage-item">
            <img
              src={`/images/collage/${image}.webp`}
              alt="FULL PRINT"
              loading="lazy"
            />
          </div>
        );
      })}
    </article>
  );
}
