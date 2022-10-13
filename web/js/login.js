document.getElementById("form").onsubmit = function (e) {
    e.preventDefault()

    const data = new FormData(form);
    fetch('../api/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({username: data.get("username"), password: data.get("password")})
}).then(res => res.text())
  .then(res => {
    document.getElementById("err").innerText = res
  if (res == "All set") {
    location.href="/app"
  }});
}