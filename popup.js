document.getElementById('hint-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          alert('Here is your hint: Use a binary search.');
        },
      });
    });
  });
  