const livros = [
  {
    id: "livro1",
    nome: "Três Pétalas da Rosa",
    senha: "rosavermelha",
    desbloqueado: false
  },
  {
    id: "livro2",
    nome: "Placeholder",
    senha: "0413251001",
    desbloqueado: false
  },
  {
    id: "livro3",
    nome: "Placeholder II",
    senha: "splef",
    desbloqueado: false
  },
  {
    id: "livro4",
    nome: "Placeholder III",
    senha: "noveedeix",
    desbloqueado: false
  },
  {
    id: "livro5",
    nome: "Placeholder IV",
    senha: "papaa",
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
    ? `<img src="livros/${livro.id}/capa.png"><p>${livro.nome}</p>`
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
