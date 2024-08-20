function initializeAILeet() {
  console.log("AILeet script is running");

  let hintCount = 0;
  let previousHints = [];  // Array to store previous hints

  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.id = 'aileet-modal-container';
  modalContainer.style.position = 'fixed';
  modalContainer.style.top = '0';
  modalContainer.style.left = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modalContainer.style.display = 'none';
  modalContainer.style.justifyContent = 'center';
  modalContainer.style.alignItems = 'center';
  modalContainer.style.zIndex = '1001';

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = 'white';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '10px';
  modalContent.style.maxWidth = '500px';
  modalContent.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

  // Add title to modal with bold styling
  const modalTitle = document.createElement('h2');
  modalTitle.innerHTML = '<strong>AILeet says:</strong>';  // Making the title bold
  modalTitle.style.marginTop = '0';
  modalContent.appendChild(modalTitle);

  // Add hint text to modal
  const modalHint = document.createElement('p');
  modalHint.id = 'aileet-hint-text';
  modalContent.appendChild(modalHint);

  // Add a close button to the modal
  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.marginTop = '20px';
  closeButton.style.padding = '10px 15px';
  closeButton.style.backgroundColor = '#4CAF50';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '5px';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });
  modalContent.appendChild(closeButton);

  // Append modal content to container
  modalContainer.appendChild(modalContent);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);

  const hintButton = document.createElement('button');
  hintButton.innerText = 'Get AI Hint';
  hintButton.style.position = 'fixed';
  hintButton.style.bottom = '20px';
  hintButton.style.right = '20px';
  hintButton.style.zIndex = '1000';
  hintButton.style.padding = '10px 15px';
  hintButton.style.backgroundColor = '#4CAF50';
  hintButton.style.color = 'white';
  hintButton.style.border = 'none';
  hintButton.style.cursor = 'pointer';

  document.body.appendChild(hintButton);

  hintButton.addEventListener('click', async () => {
    hintCount += 1;

    const problemLinkElement = document.querySelector('a.no-underline.hover\\:text-blue-s');
    if (!problemLinkElement) {
      alert('Problem name not found. Please check the selector in content.js.');
      return;
    }
    const problemName = problemLinkElement.innerText.trim();

    // Use the updated selector for the problem statement
    const problemStatementElement = document.querySelector('.elfjS[data-track-load="description_content"]');
    if (!problemStatementElement) {
      alert('Problem statement not found. Please check the selector in content.js.');
      return;
    }
    const problemStatement = problemStatementElement.innerText.trim();

    const editorElement = document.querySelector('.monaco-editor');
    if (!editorElement) {
      alert('Code editor not found or not ready. Please try again.');
      return;
    }

    // Get all lines of code
    const codeLines = editorElement.querySelectorAll('.view-line');
    let userCode = '';
    codeLines.forEach(line => {
      userCode += line.innerText + '\n';
    });

    // Prepare the prompt with instructions for a concise hint
    let prompt = `The user is working on the problem "${problemName}". The problem statement is as follows:\n\n${problemStatement}\n\n`;

    if (previousHints.length > 0) {
      prompt += `Previous hints given to the user:\n`;
      previousHints.forEach((hint, index) => {
        prompt += `Hint ${index + 1}: ${hint}\n`;
      });
    }

    if (!userCode) {
      prompt += `The user has not started coding yet. Provide a concise, 2-3 sentence hint on how to start approaching the problem. Please avoid giving away the full solution.`;
    } else {
      prompt += `The current code is:\n\n${userCode}\n\nProvide a concise, 2-3 sentence hint on how to proceed or improve the approach. Please avoid giving away the full solution.`;
    }

    // Log the data being sent to the server
    console.log('Sending prompt to server:', prompt);
    console.log('Hint count:', hintCount);

    try {
      const hint = await getAIHint(prompt, hintCount);
      previousHints.push(hint);  // Store the new hint
      displayHint(hint);
    } catch (error) {
      console.error('Error getting AI hint:', error);
      alert('An error occurred while fetching the hint.');
    }
  });

  // Function to display the hint in the custom modal
  function displayHint(hint) {
    const hintTextElement = document.getElementById('aileet-hint-text');
    hintTextElement.innerText = hint;
    modalContainer.style.display = 'flex';
  }

  // Function to call the Node.js backend for AI hints
  async function getAIHint(prompt, hintCount) {
    const response = await fetch('http://localhost:3000/get-hint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        hintCount,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.hint;
  }
}

// Ensure the function runs after the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAILeet);
} else {
  initializeAILeet();
}
