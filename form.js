var form = document.getElementById("contactForm");
        
async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your message has been sent successfully',
      })
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data["errors"].map(error => error["message"]).join(", ")
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Oops! There was a problem submitting your form'
          })
        }
      })
    }
  }).catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Oops! There was a problem submitting your form'
    })
  });
}
form.addEventListener("submit", handleSubmit)