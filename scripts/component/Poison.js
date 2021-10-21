export const Poison = (poison) => {
  
  const { id, species, commonName, fatal, antidote } = poison;
  
  const fatalText = fatal ? 'is fatal' : 'is not fatal';
  const antidoteText = antidote === 'none' ? 
    `There is no known antidote for ${commonName}` :
    `The antidote for ${commonName} is ${antidote}`;

  return `
    <div id="poison-${id}" class="poison">
      <h3 class="poison__headline">${species}</h3>
      <p class="poison__desc">
        <b>${species}</b>, also known as <i>${commonName}</i> ${fatalText}. ${antidoteText}.
      </p>
    </div>`;
}