export function createMessageBox1(titleText) {
  const messageBox = document.createElement('div');
  messageBox.style.width = '300px';
  messageBox.style.height = '200px';
  messageBox.style.background = 'linear-gradient(to right, #E684AE, #79CBCA)';
  messageBox.style.border = '1px solid #000';
  messageBox.style.position = 'absolute';
  messageBox.style.top = '50%';
  messageBox.style.left = '50%';
  messageBox.style.transform = 'translate(-50%, -50%)';
  messageBox.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)';
  messageBox.style.fontFamily = 'Arial, sans-serif';

  const title = document.createElement('h3');
  title.textContent = titleText;
  title.style.margin = 'auto';
  title.style.textAlign = 'center';
  title.style.position = 'absolute';
  title.style.top = '50%';
  title.style.left = '50%';
  title.style.transform = 'translate(-50%, -50%)';
  title.style.fontWeight = 'bold';
  messageBox.appendChild(title);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.border = 'none';
  closeButton.style.background = 'red';
  closeButton.style.color = '#fff';
  closeButton.style.fontSize = '20px';
  closeButton.style.width = '30px';
  closeButton.style.height = '30px';
  closeButton.style.borderRadius = '50%';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(messageBox);
    window.location.reload();
  });
  messageBox.appendChild(closeButton);

  document.body.appendChild(messageBox);

  return messageBox;
}
