function myFunction() {
    const kepek = ["./kepek/hatter.jpeg","./kepek/hatter2.jpg","./kepek/hatter3.jpg","./kepek/hatter4.png","./kepek/hatter5.jpg",
    "./kepek/hatter6.jpg","./kepek/hatter8.png","./kepek/hatter9.jpg","./kepek/hatter10.webp","./kepek/hatter7.jpg",];
  
  // Véletlenszerűen válasszuk ki egy képet
  const kepIndex = Math.floor(Math.random() * kepek.length);
  const kep = kepek[kepIndex];
  
  // Állítsuk be a header háttereként a kiválasztott képet
  const header = document.querySelector("header");
  header.style.backgroundImage = `url(${kep})`;
}

// Véletlenszerű szövegek és linkek
const randomTexts = [
  { text: 'BMI Kalkulátor', link: 'bmikalkulator.html' },
  { text: 'Vízfogyasztás', link: 'vizfogyasztas.html' },
  { text: 'Diéták', link: '#' },
  { text: 'Testmozgás', link: '#' },
  { text: 'Mentális Egészség', link: '#' },
  { text: 'Életmódtippek', link: '#' },
];

// Függvény a gomb módosítására
function changeButton() {
  // Véletlenszerű szöveg és link kiválasztása
  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const randomButtonText = randomTexts[randomIndex].text;
  const randomButtonLink = randomTexts[randomIndex].link;

  // Gomb elem kiválasztása és módosítása
  const button = document.getElementById('randomGomb');
  button.textContent = randomButtonText;
  button.href = randomButtonLink;
}

// Oldal betöltésekor hívjuk meg a függvényt
window.addEventListener('load', changeButton);