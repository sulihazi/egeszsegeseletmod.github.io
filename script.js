function myFunction() {
    const kepek = ["./kepek/hatter.jpeg","./kepek/hatter2.jpg","./kepek/hatter3.jpg","./kepek/hatter4.png","./kepek/hatter5.jpg",
    "./kepek/hatter6.jpg","./kepek/hatter8.png","./kepek/hatter9.jpg","./kepek/hatter10.webp","./kepek/hatter7.jpg",];
  

  const kepIndex = Math.floor(Math.random() * kepek.length);
  const kep = kepek[kepIndex];
  

  const header = document.querySelector("header");
  header.style.backgroundImage = `url(${kep})`;
}


const randomTexts = [
  { text: 'BMI Kalkulátor', link: 'bmikalkulator.html' },
  { text: 'Vízfogyasztás', link: 'vizfogyasztas.html' },
  { text: 'Kalóriaszámító', link: 'kaloriaszamito.html' },
  { text: 'Testmozgás', link: '#' },
  { text: 'Mentális Egészség', link: '#' },
  { text: 'Életmódtippek', link: '#' },
];


function changeButton() {

  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const randomButtonText = randomTexts[randomIndex].text;
  const randomButtonLink = randomTexts[randomIndex].link;


  const button = document.getElementById('randomGomb');
  button.textContent = randomButtonText;
  button.href = randomButtonLink;
}


window.addEventListener('load', changeButton);