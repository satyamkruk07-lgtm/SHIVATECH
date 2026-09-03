"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { eventsData } from "@/data/events";
import EventHUD from "./EventHUD";
import WebShooter from "./WebShooter";
import EventBuilding from "./EventBuilding";
import Atmosphere, { AtmosphereOverlay } from "./Atmosphere";
import EventDetailsPanel from "./EventDetailsPanel";
import { useReducedMotion } from "framer-motion";

export default function EventCityScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShooting, setIsShooting] = useState(false);
  const [shootTarget, setShootTarget] = useState({ x: 0, y: 0 });
  const [instructionVisible, setInstructionVisible] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);
  
  const prefersReducedMotion = useReducedMotion();
  const currentEvent = eventsData[currentIndex];

  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      
      // Aim / Parallax response
      if (!isShooting && sceneRef.current && !prefersReducedMotion) {
        gsap.to(sceneRef.current, {
          rotationY: mousePos.current.x * 6,
          rotationX: mousePos.current.y * -4,
          x: mousePos.current.x * -20,
          y: mousePos.current.y * -20,
          duration: 1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isShooting, prefersReducedMotion]);

  // Travel to specific event
  const travelToEvent = (index: number, immediate = false) => {
    if (!cameraRef.current) return;
    
    const targetEvent = eventsData[index];
    
    // We want the building to be at z = -500 relative to camera
    // So camera needs to move to Math.abs(targetEvent.position.z) - 500
    const targetZ = Math.abs(targetEvent.position.z) - 800; // keep some distance
    
    // To center the building horizontally, we move the camera by the opposite of the building's X
    // The building's X is in vw. GSAP xPercent on a w-full container moves it in vw equivalent.
    const targetXPercent = -targetEvent.position.x;

    gsap.to(cameraRef.current, {
      z: targetZ,
      xPercent: targetXPercent,
      duration: immediate || prefersReducedMotion ? 0 : 1.5,
      ease: "power3.inOut",
      onComplete: () => {
        setCurrentIndex(index);
        setIsShooting(false);
      }
    });

    if (!immediate && !prefersReducedMotion && sceneRef.current) {
      // Cinematic camera recoil/push
      gsap.to(sceneRef.current, {
        scale: 1.05,
        duration: 0.7,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  // Initial positioning
  useEffect(() => {
    travelToEvent(0, true);
  }, []);

  const handleShoot = (e: React.MouseEvent | React.TouchEvent, targetIndex: number) => {
    if (isShooting || targetIndex === currentIndex) return;
    
    if (instructionVisible) setInstructionVisible(false);
    setDetailsOpen(false);

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    setShootTarget({ x: clientX, y: clientY });
    setIsShooting(true);

    // Wait for web to visually attach before moving camera
    setTimeout(() => {
      travelToEvent(targetIndex);
    }, 400);
  };

  const handleHUDNavigate = (index: number) => {
    if (isShooting || index === currentIndex) return;
    setInstructionVisible(false);
    setIsShooting(true);
    // Fake a center shoot target if navigated via HUD
    setShootTarget({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    
    setTimeout(() => {
      travelToEvent(index);
    }, 400);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#02040a] cursor-crosshair">
      
      {/* 3D Scene Container */}
      <div 
        ref={sceneRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ perspective: '2000px' }}
      >
        <div 
          ref={cameraRef}
          className="absolute inset-0 w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Atmosphere />

          {/* Render all buildings in 3D space */}
          {eventsData.map((ev, i) => (
            <EventBuilding
              key={ev.id}
              ev={ev}
              isActive={i === currentIndex}
              isPassed={i < currentIndex}
              onClick={(e) => handleShoot(e, i)}
            />
          ))}
          
        </div>
        <AtmosphereOverlay />
      </div>

      {/* HUD & Overlays */}
      <EventHUD 
        currentEvent={currentEvent}
        totalEvents={eventsData.length}
        currentIndex={currentIndex}
        onNavigate={handleHUDNavigate}
        onViewEvent={() => setDetailsOpen(true)}
        instructionVisible={instructionVisible}
      />

      <WebShooter 
        isShooting={isShooting} 
        target={shootTarget} 
        onComplete={() => {}} 
      />

      <EventDetailsPanel 
        event={currentEvent}
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />

    </div>
  );
}
