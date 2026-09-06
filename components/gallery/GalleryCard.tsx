"use client";

import React from "react";
import { motion } from "framer-motion";
import { GalleryItem } from "@/data/gallery";
import MaskFace from "./MaskFace";
import PhotoFace from "./PhotoFace";

interface GalleryCardProps {
  item: GalleryItem;
  position: "far-left" | "left" | "center" | "right" | "far-right";
  isCenter: boolean;
  onClick: () => void;
  onOpenPhotoModal: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  item,
  position,
  isCenter,
  onClick,
  onOpenPhotoModal,
}) => {
  // Respect prefers-reduced-motion
  const isReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Responsive scale & position offsets based on carousel slot
  const getSlotStyles = () => {
    switch (position) {
      case "far-left":
        return {
          x: "-180%",
          scale: 0.65,
          opacity: 0.35,
          zIndex: 5,
          rotateY: 0,
        };
      case "left":
        return {
          x: "-95%",
          scale: 0.82,
          opacity: 0.7,
          zIndex: 15,
          rotateY: 0,
        };
      case "center":
        return {
          x: "0%",
          scale: 1.08,
          opacity: 1.0,
          zIndex: 30,
          rotateY: isReducedMotion ? 0 : 180,
        };
      case "right":
        return {
          x: "95%",
          scale: 0.82,
          opacity: 0.7,
          zIndex: 15,
          rotateY: 0,
        };
      case "far-right":
        return {
          x: "180%",
          scale: 0.65,
          opacity: 0.35,
          zIndex: 5,
          rotateY: 0,
        };
    }
  };

  const slotStyle = getSlotStyles();

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[210px] h-[300px] xs:w-[240px] xs:h-[340px] sm:w-[280px] sm:h-[390px] md:w-[320px] md:h-[440px] cursor-pointer pointer-events-auto"
      animate={{
        x: slotStyle.x,
        scale: slotStyle.scale,
        opacity: slotStyle.opacity,
        zIndex: slotStyle.zIndex,
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => {
        if (!isCenter) {
          onClick();
        }
      }}
      style={{ perspective: 1200 }}
    >
      {/* 3D Flip Container */}
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isCenter ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT FACE: ORIGINAL SPIDER MASK (For non-center cards) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <MaskFace category={item.category} />
        </div>

        {/* BACK FACE: REAL REVEALED GALLERY PHOTO (For center card) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <PhotoFace
            item={item}
            onClick={() => {
              if (isCenter) {
                onOpenPhotoModal(item);
              }
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryCard;
