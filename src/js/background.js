let hidden = true

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, hidden);
  hidden = !hidden
});