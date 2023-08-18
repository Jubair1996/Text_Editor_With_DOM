document.getElementById("text-bold").addEventListener("click", function () {
  const textArea = textStyleButton("text-area");
  textArea.classList.toggle("font-bold");
});
document.getElementById("text-italic").addEventListener("click", function () {
  const textArea = textStyleButton("text-area");
  textArea.classList.toggle("italic");
});
document
  .getElementById("text-underline")
  .addEventListener("click", function () {
    const textArea = textStyleButton("text-area");
    textArea.classList.toggle("underline");
  });
document.getElementById("text-left").addEventListener("click", function () {
  const textArea = textStyleButton("text-area");
  textArea.classList.toggle("text-left");
});
document.getElementById("text-center").addEventListener("click", function () {
  const textArea = textStyleButton("text-area");
  textArea.classList.toggle("text-center");
});
document.getElementById("text-right").addEventListener("click", function () {
  const textArea = textStyleButton("text-area");
  textArea.classList.toggle("text-right");
});
document.getElementById("text-justify").addEventListener("click", function () {
  const textArea = textStyleButton("text-area");
  textArea.classList.toggle("text-justify");
});

document.getElementById("color").addEventListener("input", function () {
  const textArea = textStyleButton("text-area");
  const selectedColor = this.value;
  textArea.style.color = selectedColor;
});

const fontSizeInput = document.getElementById("size");
const editor = document.getElementById("text-area");

fontSizeInput.addEventListener("input", function () {
  const fontSize = fontSizeInput.value + "px";
  editor.style.fontSize = fontSize;
});
