import { useEffect, useState } from "react";
import { HoroscopeCardData } from "../model/horoscopeModel";
import { HoroscopeCard } from "../components/HoroscopeCard";

export function Horoscope() {
  const [horoscopes, setHoroscopes] = useState<HoroscopeCardData[]>([]);

  useEffect(() => {
    fetch("/src/data/horoscopes.json")
      .then((res) => res.json())
      .then((res) => {
        setHoroscopes(res);
      });
  }, []);

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      {horoscopes.map((horoscope, index) => {
        return (
          <HoroscopeCard
            key={index}
            img={horoscope.img}
            title={horoscope.title}
            description={horoscope.description}
          />
        );
      })}
    </div>
  );
}
