export const Zodiac = (zodiac) => {
  
  const { id, name, mascot, dates, element, wvAnimal } = zodiac;

  return `
    <div id="zodiac-${id}" class="zodiac">
      <h3 zodiac__headline>${name}</h3>
      <p class="zodiac__desc">
        ${name}, also known as the ${mascot.toLowerCase()} is the sign of those born
        between ${dates}. Their element is ${element.toLowerCase()} and West Virginia
        animal is ${wvAnimal.toLowerCase()}.
      </p>
    </div>
  `;
}
