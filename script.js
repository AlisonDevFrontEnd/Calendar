const mesAno = document.getElementById("mesAno");
const dias = document.getElementById("dias");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let dataAtual = new Date();

prevBtn.addEventListener("click", () => {
  dataAtual.setMonth(dataAtual.getMonth() - 1);
  atualizarCalendario();
});

nextBtn.addEventListener("click", () => {
  dataAtual.setMonth(dataAtual.getMonth() + 1);
  atualizarCalendario();
});

function atualizarCalendario() {
  // Limpar o calendário
  dias.innerText = "";

  // Definir o título do mês e ano com Intl.DateTimeFormat
  const formatoMesAno = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long"
  });
  mesAno.innerText = formatoMesAno.format(dataAtual);

  const primeiroDia = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth(),
    1
  );
  const ultimoDia = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth() + 1,
    0
  );

  // Adicionar os dias do mês ao calendário
  for (
    let dia = primeiroDia;
    dia <= ultimoDia;
    dia.setDate(dia.getDate() + 1)
  ) {
    const cell = document.createElement("td");
    // Formatar o número do dia com Intl.DateTimeFormat
    const formatoDia = new Intl.DateTimeFormat("pt-BR", { day: "numeric" });
    cell.innerText = formatoDia.format(dia);
    dias.appendChild(cell);
  }
}

atualizarCalendario();