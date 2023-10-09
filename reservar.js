const reservas = [];

document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const quantidadePessoas = document.getElementById("quantidadePessoas").value;

  const reserva = {
    data: data,
    hora: hora,
    quantidadePessoas: quantidadePessoas,
  };

  reservas.push(reserva);

  const exibirReservasDiv = document.getElementById("exibirReservas");
  exibirReservasDiv.innerHTML = "<h2>Reserva concluída!</h2>";
  reservas.forEach((reserva, index) => {
    exibirReservasDiv.innerHTML += `
            <p>Reserva ${index + 1}</p>
            <p>Data: ${reserva.data}</p>
            <p>Hora: ${reserva.hora}</p>
            <p>Quantidade de Pessoas: ${reserva.quantidadePessoas}</p>
            <hr>`;
  });

  document.getElementById("reservaForm").reset();
});
