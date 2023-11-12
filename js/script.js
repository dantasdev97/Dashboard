const body = document.querySelector("body"),
   sidebar = body.querySelector(".sidebar"),
   toggle = body.querySelector(".toggle"),
   searchBtn = body.querySelector(".search-box"),
   modeSwitch = body.querySelector(".toggle-switch");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});



modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "ligth mode"
    }else{
        modeText.innerText = "Dark Mode"
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const sidebarFoto = document.getElementById('sidebarFoto');
  const inputFoto = document.getElementById('formFile');
  const enviarBotao = document.getElementById('enviarBotao'); // Adicione um ID ao seu botão de enviar

  enviarBotao.addEventListener('click', function () {
      const file = inputFoto.files[0];

      if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {
              // Atualiza a foto de perfil
              sidebarFoto.src = e.target.result;
          };

          reader.readAsDataURL(file);
      }
  });
});






document.addEventListener("DOMContentLoaded", function() {
    const descInput = document.getElementById("desc");
    const amountInput = document.getElementById("amount");
    const typeSelect = document.getElementById("type");
    const tableBody = document.querySelector(".divTable table tbody");
    const totalAmountSpan = document.querySelector(".total-amount");
    const btnNew = document.getElementById("btnNew");

    let totalAmount = parseFloat(totalAmountSpan.textContent);

    btnNew.addEventListener("click", function() {
      const description = descInput.value;
      const amount = parseFloat(amountInput.value);
      const type = typeSelect.value;

      if (description && !isNaN(amount)) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${description}</td>
          <td class="colunAmont">${amount.toFixed(2)}</td>
          <td class="colunType">${type}</td>
          <td class="colunAction">
              <button class="deleteButton">Deletar</button>
          </td>
        `;
        tableBody.appendChild(newRow);

        if (type === "Entrada") {
          totalAmount += amount;
        } else if (type === "Saida") {
          totalAmount -= amount;
        }

        totalAmountSpan.textContent = totalAmount.toFixed(2);

        // Limpa os campos de entrada
        descInput.value = "";
        amountInput.value = "";
      }
    });

    tableBody.addEventListener("click", function(e) {
      if (e.target.classList.contains("deleteButton")) {
        const row = e.target.parentElement.parentElement;
        const typeCell = row.querySelector(".colunType");
        const amountCell = row.querySelector(".colunAmont");
        const type = typeCell.textContent;
        const amount = parseFloat(amountCell.textContent);

        if (type === "Entrada") {
          totalAmount -= amount;
        } else if (type === "Saida") {
          totalAmount += amount;
        }

        totalAmountSpan.textContent = totalAmount.toFixed(2);

        row.remove();
      }


    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const profissaoSelect = document.getElementById('profissao');
    const profissaoNoSidebar = document.getElementById('profissaoNoSidebar');

    profissaoSelect.addEventListener('change', function () {
        // Atualiza o conteúdo do elemento span no sidebar com a profissão selecionada
        profissaoNoSidebar.textContent = 'Profissão: ' + profissaoSelect.value;
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const profissaoSelect = document.getElementById('profissao');
  const profissaoNoSidebar = document.getElementById('profissaoNoSidebar');
  const enviarBotao = document.getElementById('enviarBotao');

  enviarBotao.addEventListener('click', function () {
      // Verifica se uma profissão foi escolhida
      if (profissaoSelect.value) {
          // Atualiza o conteúdo do elemento span no sidebar com a profissão escolhida
          profissaoNoSidebar.textContent = 'Profissão: ' + profissaoSelect.value;
      } else {
          // Se nenhuma profissão foi escolhida, você pode lidar com isso conforme necessário
          alert('Escolha uma profissão antes de enviar!');
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const profissaoSelect = document.getElementById('profissao');
  const profissaoNoSidebar = document.getElementById('profissaoNoSidebar');
  const enviarBotao = document.getElementById('enviarBotao');
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.querySelector('.sidebar');

  // Função para atualizar a profissão no sidebar
  function atualizarProfissao() {
      profissaoNoSidebar.textContent = 'Profissão: ' + profissaoSelect.value;
  }

  // Adiciona um evento de clique à seta de toggle
  toggleSidebar.addEventListener('click', function () {
      // Verifica se o sidebar está aberto
      const sidebarAberto = sidebar.classList.contains('close');

      // Se o sidebar está aberto, atualiza a profissão
      if (!sidebarAberto) {
          atualizarProfissao();
      }
  });

  // Adiciona um evento de clique ao botão "Enviar"
  enviarBotao.addEventListener('click', function () {
      // Verifica se uma profissão foi escolhida antes de enviar
      if (profissaoSelect.value) {
          atualizarProfissao();
      } else {
          alert('Escolha uma profissão antes de enviar!');
      }
  });
});







