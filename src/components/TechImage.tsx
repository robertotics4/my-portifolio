import Image, { ImageProps } from 'next/image'

export function TechImage({ alt, className, ...props }: ImageProps) {
  return <Image className={`h-20 w-20 ${className}`} alt={alt} {...props} />
}
