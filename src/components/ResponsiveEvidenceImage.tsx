import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

interface ResponsiveEvidenceImageProps extends ComponentPropsWithoutRef<"img"> {
  alt: string;
  deferUntilNear?: boolean;
  sizes?: string;
  webpSrcSet?: string;
}

const transparentLoadingPixel = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

export function ResponsiveEvidenceImage({
  alt,
  deferUntilNear = false,
  sizes,
  webpSrcSet,
  ...imageProps
}: ResponsiveEvidenceImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!deferUntilNear);

  useEffect(() => {
    if (!deferUntilNear || shouldLoad) return;
    const image = imageRef.current;
    if (!image) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      setShouldLoad(true);
    }, { rootMargin: "800px 0px" });
    observer.observe(image);
    return () => observer.disconnect();
  }, [deferUntilNear, shouldLoad]);

  return (
    <picture>
      {shouldLoad && webpSrcSet && (
        <source
          type="image/webp"
          srcSet={webpSrcSet}
          sizes={sizes}
        />
      )}
      <img
        {...imageProps}
        alt={alt}
        ref={imageRef}
        src={shouldLoad ? imageProps.src : transparentLoadingPixel}
      />
    </picture>
  );
}
