function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    console.log("username: " + nameEl.value);
  }
  