const { app, BrowserWindow } = require('electron')
const path = require('path')

const { Menu } = require('electron')
const { dialog } = require('electron')
// Define the template for the app menu
const template = [
    {
        label: 'New Template',
        accelerator: 'CmdOrCtrl+T', // Shortcut key
        click: async () => {
            // Code to create and show the dialog with input fields
            const { response, checkboxChecked } = await dialog.showMessageBox({
              type: 'question',
              title: 'New Template',
              message: 'Enter template details:',
              checkboxLabel: 'Save as default template',
              buttons: ['OK', 'Cancel'],
              defaultId: 0,
              cancelId: 1,
              inputFields: [
                {
                  label: 'Template Name:',
                  value: '',
                  type: 'text'
                },
                {
                  label: 'Template Type:',
                  value: 'Default',
                  type: 'select',
                  options: ['Default', 'Custom']
                }
              ]
            })
            
            // Handle the user's response here
            if (response === 0) {
              const [nameField, typeField] = checkboxChecked ? inputFields.slice(0, 2) : inputFields
              const templateName = nameField.value
              const templateType = typeField.value
              console.log(`Template Name: ${templateName}, Template Type: ${templateType}`)
            }
          }
        
      },{
        label: 'New Form',
        accelerator: 'CmdOrCtrl+F', // Shortcut key
        click: () => {
            dialog.showMessageBoxSync({
                type: 'info',
                title: 'Create New Form',
                message: 'Hi',
                buttons: ['OK']
              })
        }
      },
//   {
//     label: 'New Template',

//   }
]

// Set the menu template
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)





function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index2.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


