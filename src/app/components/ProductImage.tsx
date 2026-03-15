import { useState } from "react";

const FALLBACK_IMAGES = [
  "/images/products/indoor-led.jpg",
  "/images/products/outdoor-dip.jpg",
  "/images/products/hd-led.jpg",
];

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProductImage({ src, alt, className }: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const handleError = () => {
    if (fallbackIndex < FALLBACK_IMAGES.length) {
      const nextFallback = FALLBACK_IMAGES[fallbackIndex];
      if (nextFallback !== currentSrc) {
        setCurrentSrc(nextFallback);
        setFallbackIndex((index) => index + 1);
      }
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
}
