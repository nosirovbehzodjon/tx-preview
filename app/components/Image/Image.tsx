import styles from "@/app/components/Image/Image.module.scss";
import cn from "classnames";
import Image, { ImageProps } from "next/image";

interface IImageProps extends ImageProps {
  wrapperClassName: string;
  aspectRatio: number;
  src: string;
  alt: string;
}
export const CustomImage = (props: IImageProps) => {
  const {
    src,
    alt,
    className,
    wrapperClassName,
    aspectRatio,
    children,
    ...rest
  } = props;

  return (
    <div
      style={{ paddingBottom: `${100 / aspectRatio}%` }}
      className={cn(styles.imageWrapper, wrapperClassName)}
    >
      <Image
        {...rest}
        src={src}
        alt={alt}
        className={cn(styles.image, className)}
      />
      {children && <div className={styles.cardSlot}>{children}</div>}
    </div>
  );
};
