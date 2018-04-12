const isEmail = (val) => {
  return val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)
}
window.onload = () => {
  document.getElementById('email-address').addEventListener('input', ({ target }) => {
    if(target.value && isEmail(target.value)) {
      document.getElementById('submit-button').classList.remove('disabled')
      document.getElementById('submit-button').removeAttribute('disabled')
    } else {
      document.getElementById('submit-button').classList.add('disabled')
      document.getElementById('submit-button').setAttribute('disabled', true)
    }
  })
}