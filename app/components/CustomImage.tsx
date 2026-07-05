import NextImage, { ImageProps } from 'next/image';

export default function CustomImage({ src, ...props }: ImageProps) {
  // srcが文字列の場合のみパス調整を行う
  const patchedSrc = typeof src === 'string' && src.startsWith('/') && !src.startsWith('/f/')
    ? `/f${src}`
    : src;

  return <NextImage src={patchedSrc} {...props} />;
}