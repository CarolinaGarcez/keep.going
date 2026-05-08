const statusList = [
  "online • respirando • tentando",
  "caos detectado • seguimos",
  "carregando esperança...",
  "sobrevivendo em modo café",
  "sistema emocional estável"
];

let index = 0;

const statusText = document.querySelector(".status-text");

function changeStatus() {
  // efeito de fade suave antes de trocar
  statusText.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % statusList.length;
    statusText.textContent = statusList[index];

    statusText.style.opacity = 1;
  }, 400);
}

// troca a cada 3 segundos
setInterval(changeStatus, 3000);