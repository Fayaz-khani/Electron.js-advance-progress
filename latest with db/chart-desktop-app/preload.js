// preload.js
const testmanager = require("./modules/testmanager");
const {contextBridge} = require("electron");


const getNames =()=>{
    return testmanager.getNames();
};

contextBridge.exposeInMainWorld("api",{
    getNames : getNames
});
// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })