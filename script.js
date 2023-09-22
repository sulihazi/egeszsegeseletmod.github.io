function myFunction() {
    const kepek = ["./kepek/hatter.jpeg","./kepek/hatter2.jpeg","./kepek/hatter3.jpg","./kepek/hatter4.jpg","./kepek/hatter5.jpg",
    "./kepek/hatter6.jpeg","./kepek/hatter8.png",];
  
  // Véletlenszerűen válasszuk ki egy képet
  const kepIndex = Math.floor(Math.random() * kepek.length);
  const kep = kepek[kepIndex];
  
  // Állítsuk be a header háttereként a kiválasztott képet
  const header = document.querySelector("header");
  header.style.backgroundImage = `url(${kep})`;
}
