import './img/icon-128.png';
import './img/icon-32.png';

let hidden = true;
console.log('load background');
chrome.action.onClicked.addListener(function (tab) {
  console.log('clicked', tab);
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, hidden);
    hidden = !hidden;
  }
});
