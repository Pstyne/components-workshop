// Data imports
import { poisonData } from "../data/PoisonData.js";
import { zodiacData } from "../data/ZodiacData.js";

// Component imports
import { Poison } from "../component/Poison.js";
import { Zodiac } from "../component/Zodiac.js";

export const BuildList = () => {
  const el = document.querySelector('.content');

  const poisons = poisonData();
  const zodiacSigns = zodiacData();

  el.innerHTML += "<div class='poisons'>";
  el.innerHTML += "<h1>Poisons</h1>";
  poisons.forEach( poison => el.innerHTML += Poison(poison));
  el.innerHTML += "</div>";

  el.innerHTML += "<div class='zodiacs'>";
  el.innerHTML += "<h1>Zodiac Signs</h1>";
  zodiacSigns.forEach( zodiac => el.innerHTML += Zodiac(zodiac));
  el.innerHTML += "</div>";
}