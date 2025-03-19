import Image from "next/image";

interface OverlayImageProps {
  src: string;
  alt: string;
  text?: string;
}

const OverlayImage: React.FC<OverlayImageProps> = ({ src, alt, text }) => {
  return (
    <div className="relative group">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <p className="absolute bottom-0 text-white font-medium text-bodyxl px-3 pt-3 pb-4 overlay-gradient">
        {text}
      </p>
    </div>
  );
};

export default OverlayImage;
