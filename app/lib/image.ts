import type { ImageLoaderProps } from "next/image";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const toBase64 = (value: string) => {
  if (typeof window === "undefined") {
    return Buffer.from(value).toString("base64");
  }

  return window.btoa(value);
};

const shimmer = (width: number, height: number) => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f5f5f5" offset="20%" />
      <stop stop-color="#ebebeb" offset="50%" />
      <stop stop-color="#f5f5f5" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#f5f5f5" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
</svg>`;

export const getShimmerDataURL = (width = 800, height = 600) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;

export const cloudinaryImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  if (!cloudName || src.startsWith("/") || src.startsWith("data:")) {
    return src;
  }

  const optimizedQuality = quality || 75;
  const transformations = `f_auto,q_${optimizedQuality},w_${width},c_fill`;

  return `https://res.cloudinary.com/${cloudName}/image/fetch/${transformations}/${encodeURIComponent(src)}`;
};