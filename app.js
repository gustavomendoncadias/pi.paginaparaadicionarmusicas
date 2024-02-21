function mudarCor() {
    var cores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.getElementById("body").style.backgroundColor = corAleatoria;
  }
  