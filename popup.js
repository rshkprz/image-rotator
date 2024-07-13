document.getElementById('rotate-left').addEventListener('click', () => {
    sendMessageToContentScript('rotate-left');
  });
  
  document.getElementById('rotate-right').addEventListener('click', () => {
    sendMessageToContentScript('rotate-right');
  });
  
  function sendMessageToContentScript(action) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (action) => {
          document.dispatchEvent(new CustomEvent('rotate-image', { detail: action }));
        },
        args: [action]
      });
    });
  }
  