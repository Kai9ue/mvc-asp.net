const btn = document.querySelector('.btn')
const darkContainer = document.querySelector('.darkContainer')

btn.onclick = function() {
  this.classList.toggle('active')
  darkContainer.classList.toggle('active')
}
