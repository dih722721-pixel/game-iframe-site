const fullscreenBtn = document.getElementById('fullscreenBtn')
const iframe = document.getElementById('game-iframe')
const refreshBtn = document.getElementById('refreshBtn')
const cloakBtn = document.getElementById('cloakBtn')

fullscreenBtn.addEventListener('click', () => {
    iframe.requestFullscreen()
    refreshIframe()

})
refreshBtn.addEventListener('click', () => {
    refreshIframe()
})

cloakBtn.addEventListener('click', () => {
    aboutBlankCloak('https://www.edurocks.org/filestorage/gd/slope/index.html')
})

function refreshIframe(){
    iframe.src = iframe.src
}

function aboutBlankCloak(file) {
  let newWindow = window.open();
  if (!newWindow) return alert("Popup blocked. Please disable popups.");
  
  newWindow.document.write(`<!DOCTYPE html>
  <html>
    <head>
      <title>Google</title>
      <style>
        body, html {
          margin:0;padding:0;height:100%;overflow:hidden
        }
      </style>
    </head>
    <body>
      <iframe src="${file}" style="width:100%;height:100%;border:none;"></iframe>
    </body>
  </html>`);
  w.document.close();
}