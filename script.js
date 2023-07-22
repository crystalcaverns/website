console.log('working')

function copyServerAdress() {
  const ipButton = document.querySelector('.ip-adress')
  const copyText = document.getElementById('js-copy')
  console.log(copyText.value)
  copyText.select()

  navigator.clipboard.writeText(ipButton)
  console.log(ipButton)
}

function openNavbar() {
  const navbar = document.querySelector('.navbar')
  // console.log(navbar)
  
  if(navbar.className === 'navbar') {
    navbar.className += ' reactive'
  } else {
    navbar.className = 'navbar'
  }
}
// function openTrailer() {
//   popupWindow = document.querySelector('iframe');
//   if(popupWindow.className === '') {
//     popupWindow.className = 'trailer-open'
//   } else {
//     popupWindow.className = ' '
//   }
//   console.log(popupWindow)

// }