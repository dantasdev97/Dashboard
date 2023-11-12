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



