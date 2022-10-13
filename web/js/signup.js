document.getElementById("form").onsubmit = function (e) {
    e.preventDefault()

    const data = new FormData(form);
    fetch('../api/signup', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({username: data.get("username"), password: data.get("password")})
}).then(res => res.text())
  .then(res => { if (res == "You may now login") return location.href="../login";
    document.getElementById("err").innerText = res});
}