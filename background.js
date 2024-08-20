// background.js

// This event listener triggers when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log('AILeet Extension Installed');
  });
  
  // This could be used for communicating with content scripts or managing storage
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getHint') {
      // Example of how you might handle a message from the content script
      console.log('Background received a request for a hint');
      // Do something like fetch data from storage or manage a different API call
      sendResponse({ status: 'received' });
    }
  });
  