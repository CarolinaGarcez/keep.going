// Pega o botão de iniciar 
const btn = document.getElementById("startBtn");

// Elementos
const phrase = document.getElementById("phrase");
const img = document.getElementById("motivationImg");
const result = document.getElementById("result");

// Evento 
btn.addEventListener("click", () => {

  // Escolhe uma frase aleatória da lista
  // gera um número aleatório e usa ele pra buscar algo dentro da lista
  const randomPhrase = frases[Math.floor(Math.random() * frases.length)];

  // Escolhe uma imagem aleatória da lista
  const randomImg = imagens[Math.floor(Math.random() * imagens.length)];

  // Insere a frase 
  phrase.textContent = randomPhrase;

  // Troca a imagem 
  img.src = randomImg;

  // Mostra o container de resultado 
  result.classList.add("show");

});