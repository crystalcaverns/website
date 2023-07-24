console.log('Welcome to Crystal Caverns! :D')
// function copyServerAdress() {
//   let ipButton = document.querySelector('.ip-adress')
//   ipButton = document.createElement('button');
//   ipButton.classList.add('ip-adress');
//   ipButton.textContent = '192.168.1.1';

//   ipButton.addEventListener('click', () => {
//     const textToCopy = ipButton.textContent;
//     let clipboard = new ClipboardJS();
//     clipboard.writeText(textToCopy);
// });
function openNavbar() {
  const navbar = document.querySelector('.navbar')
  
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