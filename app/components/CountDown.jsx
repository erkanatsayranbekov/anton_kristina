"use client";

import { useEffect, useState } from "react";
import { alethianext, hello_january } from "../ui/fonts";

function CountDown() {
  function plural(num, one, few, many) {
    const n = Math.abs(num) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return many;
    if (n1 > 1 && n1 < 5) return few;
    if (n1 === 1) return one;
    return many;
  }

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  const weddingDate = new Date("2026-08-26T15:00:00");

  const calculateTime = () => {
    const now = new Date();
    const diff = +weddingDate - +now;
    const past = diff < 0;
    const difference = Math.abs(diff);

    const time = {
      weeks: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24 * 7))),
      days: formatNumber(Math.floor((difference / (1000 * 60 * 60 * 24)) % 7)),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      past,
    };

    return time;
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { weeks, days, hours, minutes, seconds, past } = time;

  return (
    <div
        className="grid grid-cols-5 gap-x-4 p-3 rounded-lg bottom-40 text-black w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center place-items-center"
        data-aos="fade-up"
        data-aos-once="true"
        >
      <h1
        className={`${hello_january.className} col-span-5 text-5xl w-full text-white text-center mb-6`}
      >
        {past ? "Мы женаты уже" : "До свадьбы"}
      </h1>

      {[weeks, days, hours, minutes, seconds].map((val, i) => (
        <div
          key={i}
          className={`${alethianext.className} col-span-1 flex justify-center items-center text-center text-[18px] bg-[#ffffff8f] rounded-full h-[50px] w-[50px]`}
        >
          <span>{val}</span>
        </div>
      ))}

      <div
        className={`${alethianext.className} text-[12px] text-white col-span-1 text-center`}
      >
        {plural(weeks, "неделя", "недели", "недель")}
      </div>
      <div
        className={`${alethianext.className} text-[12px] text-white col-span-1 text-center`}
      >
        {plural(days, "день", "дня", "дней")}
      </div>
      <div
        className={`${alethianext.className} text-[12px] text-white col-span-1 text-center`}
      >
        {plural(hours, "час", "часа", "часов")}
      </div>
      <div
        className={`${alethianext.className} text-[12px] text-white col-span-1 text-center`}
      >
        {plural(minutes, "минута", "минуты", "минут")}
      </div>
      <div
        className={`${alethianext.className} text-[12px] text-white col-span-1 text-center`}
      >
        {plural(seconds, "секунда", "секунды", "секунд")}
      </div>
    </div>
  );
}

export default CountDown;
