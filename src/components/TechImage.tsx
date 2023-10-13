import Image, { ImageProps } from 'next/image'

export function TechImage({ alt, ...props }: ImageProps) {
  return <Image className="h-20 w-20" alt={alt} {...props} />
}
