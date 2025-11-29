"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

let scriptLoaded = false;

export default function YMap({ center }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
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
  }, []);

  if (!ready) return <div style={{ height: 250 }} />;

  return (
    <YMaps>
      <Map defaultState={{ center, zoom: 17 }} width="100%" height="250px">
        <Placemark geometry={center} />
      </Map>
    </YMaps>
  );
}
