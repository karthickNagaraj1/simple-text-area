const textArea = document.getElementById('messageBox');
const charCounter = document.getElementById('charCounter');
const warningMessage = document.getElementById('warningMessage');

const maxChars = 200;

textArea.addEventListener('input', () => {
  const currentLength = textArea.value.length;

  if (currentLength > maxChars) {
    textArea.value = textArea.value.slice(0, maxChars); // Truncate extra input
    warningMessage.textContent = "Character limit reached!";
  } else {
    warningMessage.textContent = ""; // Clear warning
  }

  charCounter.textContent = `${textArea.value.length}/${maxChars} characters`;
});
