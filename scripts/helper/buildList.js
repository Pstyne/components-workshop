// Data imports
import { poisonData } from "../data/PoisonData.js";
import { zodiacData } from "../data/ZodiacData.js";

// Component imports
import { Poison } from "../component/Poison.js";
import { Zodiac } from "../component/Zodiac.js";

export const BuildList = () => {

  let html = '';

  const el = document.querySelector('.content');

  const poisons = poisonData();
  const zodiacSigns = zodiacData();

  html += "<h1>Poisons</h1>";
  html += "<div class='poisons'>";
  poisons.forEach( poison => html += `${Poison(poison)}`);
  html += "</div>";

  html += "<h1>Zodiac Signs</h1>";
  html += "<div class='zodiacs'>";
  zodiacSigns.forEach( zodiac => html += Zodiac(zodiac));
  html += "</div>";

  el.innerHTML = html;
}