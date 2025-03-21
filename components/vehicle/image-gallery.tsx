"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/9] bg-white rounded-sm overflow-hidden group">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt="Vehicle"
          fill
          className="object-cover"
          priority
        />

        {/* Navigation Arrows */}
        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-grey-900/50 hover:bg-grey-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-grey-900/50 hover:bg-grey-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 text-sm text-white bg-grey-900/70 rounded-full">
          {currentImage + 1} / {images.length}
        </div>

        {/* View All Photos Button */}
        <button
          onClick={() => setShowFullGallery(true)}
          className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 hover:bg-white text-black text-sm font-medium rounded-full transition-colors"
        >
          View all photos
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={cn(
              "relative aspect-video rounded-sm overflow-hidden",
              "border-2 transition-colors",
              currentImage === index
                ? "border-[#8B45F7]"
                : "border-transparent hover:border-gray-200"
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
