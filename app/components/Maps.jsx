"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import Image from "next/image";

let scriptLoaded = false;

export default function YMap({ center }) {
  const point =
    center === 1
      ? [54.979097, 73.374248]
      : [54.994946, 73.365584];

  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (scriptLoaded) {
      setReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=536168cc-8dbb-4923-a06f-9a6bd5a9cf15&lang=ru_RU";

    script.onload = () => {
      scriptLoaded = true;
      setReady(true);
    };

    script.onerror = () => console.error("Yandex Maps failed to load");

    document.body.appendChild(script);
  }, [mounted]);

  if (!mounted) return null;

  if (!ready) {
    return center === 1 ? (
      <Image src="/zags.jpeg" height={250} width={400} alt="ЗАГС" />
    ) : (
      <Image src="/malibu.jpeg" height={250} width={400} alt="Малибу" />
    );
  }

  return (
    <YMaps>
      <Map defaultState={{ center: point, zoom: 17 }} width="100%" height="250px">
        <Placemark geometry={point} />
      </Map>
    </YMaps>
  );
}
