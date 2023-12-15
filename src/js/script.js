import '../css/style.css'

const script = document.createElement('script')
script.src = chrome.extension.getURL('index.bundle.js')
document.body.appendChild(script)

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  const elements = document.getElementsByClassName('mieru')
  Array.from(elements).forEach((element) => {
    element.style.display = request ? 'block' : 'none'
  })
})
