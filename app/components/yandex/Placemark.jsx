"use client";
import React, { useEffect } from "react";
import { useYMaps } from "./YMapProvider";

export default function Placemark({ mapRefGetter, geometry, properties = {}, options = {} }) {
  const ymaps = useYMaps();

  useEffect(() => {
    if (!ymaps) return;
    ymaps.ready(() => {
      const map = (ymaps.Map && Object.values(ymaps.Map._instances || {}))[0] || null; // fallback, not guaranteed
      if (!map) return;
      const placemark = new ymaps.Placemark(geometry, properties, options);
      map.geoObjects.add(placemark);
      return () => map.geoObjects.remove(placemark);
    });
  }, [ymaps, JSON.stringify(geometry)]);
  return null;
}
