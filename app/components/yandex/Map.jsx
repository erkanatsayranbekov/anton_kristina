"use client";
import React, { useEffect, useRef } from "react";
import { useYMaps } from "./YMapProvider";

export default function Map({ center = [0,0], zoom = 17, className, style, children }) {
  const ymaps = useYMaps();
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!ymaps) return;
    let map;
    ymaps.ready(() => {
      if (!containerRef.current) return;
      map = new ymaps.Map(containerRef.current, { center, zoom }, { suppressMapOpenBlock: true });
      mapRef.current = map;
    });
    return () => {
      if (mapRef.current) {
        try { mapRef.current.destroy(); } catch(e) {}
        mapRef.current = null;
      }
    };
  }, [ymaps, JSON.stringify(center), zoom]);

  return <div ref={containerRef} className={className} style={{ width: "100%", height: "250px", ...(style||{}) }} />;
}
