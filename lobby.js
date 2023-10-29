function startGame(op) {
  const opp = op.classList[0];

    localStorage.setItem("opponent", opp);
    window.location.href = "game.html";
  }