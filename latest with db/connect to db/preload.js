
const template = require("./models/template");
const {contextBridge} = require("electron")
const getNames = () =>{
 return template.getNames();
}


contextBridge.exposeInIsolatedWorld("api",{
 getNames: getNames
})

//  window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }
  
//     for (const type of ['chrome', 'node', 'electron']) {
//       replaceText(`${type}-version`, process.versions[type])
//     }
//   })
  