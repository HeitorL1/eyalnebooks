const livros = [
  {
    id: "livro1",
    nome: "O Começo do Fim",
    senha: "rosavermelha",
    desbloqueado: false
  },
  {
    id: "livro2",
    nome: "As Três Petalas da Rosa",
    senha: "enigma121",
    desbloqueado: false
  }
];

const container = document.getElementById("livros-container");

livros.forEach(livro => {
  const livroDiv = document.createElement("div");
  livroDiv.classList.add("livro");

  if (localStorage.getItem(livro.id)) {
    livro.desbloqueado = true;
  }

  const conteudo = livro.desbloqueado
    ? `<img src="livros/${livro.id}/capa.jpg"><p>${livro.nome}</p>`
    : `<div class="capa-fechada">🔒 Livro</div>`;

  livroDiv.innerHTML = conteudo;

  livroDiv.onclick = () => {
    if (!livro.desbloqueado) {
      const tentativa = prompt("Digite a senha para desbloquear o livro:");
      if (tentativa === livro.senha) {
        localStorage.setItem(livro.id, "true");
        alert("Livro desbloqueado!");
        location.reload();
      } else {
        alert("Senha incorreta!");
      }
    } else {
      window.location.href = `livro.html?id=${livro.id}`;
    }
  };

  container.appendChild(livroDiv);
});
