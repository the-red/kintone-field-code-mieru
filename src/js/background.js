import '../img/icon-128.png'
import '../img/icon-32.png'

let hidden = true

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, hidden);
  hidden = !hidden
});