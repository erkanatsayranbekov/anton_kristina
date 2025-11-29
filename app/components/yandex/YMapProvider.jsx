"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { loadYandexApi } from "./api";

const YMapContext = createContext(null);

export function useYMaps() {
  return useContext(YMapContext);
}

export function YMapProvider({ children, apikey, lang }) {
  const [ymaps, setYmaps] = useState(null);
  useEffect(() => {
    let mounted = true;
    loadYandexApi({ apikey, lang })
      .then((ym) => {
        if (mounted) setYmaps(window.ymaps || ym);
      })
      .catch((e) => {
        console.error("Yandex API load failed", e);
      });
    return () => (mounted = false);
  }, [apikey, lang]);

  return <YMapContext.Provider value={ymaps}>{children}</YMapContext.Provider>;
}
