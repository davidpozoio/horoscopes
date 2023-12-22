import { HoroscopeCardData } from "../model/horoscopeModel";
import "./horoscopeCard.styles.css";

export function HoroscopeCard({ title, img, description }: HoroscopeCardData) {
  return (
    <div className="card">
      <img className="image" src={img} alt={title} />
      <p className="description">{description}</p>
    </div>
  );
}
