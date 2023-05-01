export function createMessageBox(titleText: string, linkUrl: string, detailsText: string) {
    // Create a div element to hold the message box
    const messageBox = document.createElement('div');
    messageBox.style.width = '300px'; // Set the width of the message box
    messageBox.style.height = '200px'; // Set the height of the message box
    messageBox.style.background = '#fff'; // Set the background color of the message box
    messageBox.style.border = '1px solid #000'; // Add a border around the message box
    messageBox.style.position = 'absolute'; // Set the position of the message box to absolute
    messageBox.style.top = '50%'; // Set the top position of the message box to 50%
    messageBox.style.left = '50%'; // Set the left position of the message box to 50%
    messageBox.style.transform = 'translate(-50%, -50%)'; // Center the message box horizontally and vertically
  
    // Create a title element for the message box
    const title = document.createElement('h3');
    title.textContent = titleText;
    title.style.margin = '10px'; // Add some margin around the title
  
    // Create a link element for the message box
    const link = document.createElement('a');
    link.href = linkUrl; // Set the link URL
    link.textContent = 'Link to Project'; // Set the link text
    link.style.display = 'block'; // Set the link display to block
    link.style.margin = '10px'; // Add some margin around the link
  
    // Create a details element for the message box
    const details = document.createElement('p');
    details.textContent = detailsText;
    details.style.margin = '10px'; // Add some margin around the details
  
    // Create a close button for the message box
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute'; // Set the position of the close button to absolute
    closeButton.style.top = '5px'; // Set the top position of the close button to 5px
    closeButton.style.right = '5px'; // Set the right position of the close button to 5px
    closeButton.addEventListener('click', () => {
      // Remove the message box from the document when the close button is clicked
      document.body.removeChild(messageBox);
    });
  
    // Add the title, link, details, and close button to the message box
    messageBox.appendChild(title);
   // messageBox.appendChild(link);
   // messageBox.appendChild(details);
    messageBox.appendChild(closeButton);
  
    // Add the message box to the document
    document.body.appendChild(messageBox);
  }
  