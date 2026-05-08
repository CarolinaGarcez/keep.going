export function createButton(selector) {
  const button = document.querySelector(selector);

  button.addEventListener("click", () => {
    console.log("botão clicado 💫");
  });

  return button;
}