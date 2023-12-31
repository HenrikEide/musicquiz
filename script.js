const quiz = document.getElementById("quiz");

const kategorier = [
  "Disney",
  "Barn igjen",
  "Nostalgi",
  "Bygda",
  "RT TB",
  "Söta Bror",
  "MGPjr",
  "Norsk på norsk",
];
const colors = {
  pink: ["yellow", "rgb(255, 252, 158)"],
  yellow: ["red", "rgb(255, 156, 156)"],
  red: ["blue", "rgb(184, 246, 255)"],
  blue: ["green", "rgb(158, 244, 152)"],
  green: ["pink", "rgb(255, 179, 255)"],
};
let songs = [];
for (let i = 1; i <= 8; i++) {
  temp = [];
  for (let j = 1; j <= 6; j++) {
    let songlink = `songs/kat${i}q${j * 100}.mp3`;
    temp.push(songlink);
  }
  songs.push(temp);
}

for (let i = 0; i < 8; i++) {
  let div = document.createElement("div");
  div.className = "category";
  div.style.left = i * 190;
  div.innerHTML = `<h3>${kategorier[i]}</h3>`;
  div.setAttribute("farge", "blue");

  quiz.appendChild(div);
}

for (let i = 0; i < 8; i++) {
  for (let j = 1; j < 6; j++) {
    let div = document.createElement("div");
    div.className = "question";
    div.style.left = i * 190;
    div.style.top = j * 95;
    div.setAttribute("farge", "pink");
    div.onclick = Trykk;

    let audio = document.createElement("audio");
    audio.id = "audio-player";
    audio.controls = "controls";
    audio.src = songs[i][j - 1];
    audio.type = "audio/mpeg";
    div.appendChild(audio);

    let poeng = document.createElement("div");
    poeng.innerHTML = `<h2>${j * 100}</h2>`;
    poeng.className = "points";
    div.appendChild(poeng);

    quiz.appendChild(div);
  }
}

function Trykk(evt) {
  let boks = evt.currentTarget;
  let farge = boks.getAttribute("farge");
  const [colorName, color] = colors[farge];
  boks.setAttribute("farge", colorName);
  boks.style.backgroundColor = color;
}
