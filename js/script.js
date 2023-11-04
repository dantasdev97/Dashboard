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






const descInput = document.getElementById("desc");
        const amountInput = document.getElementById("amount");
        const typeSelect = document.getElementById("type");
        const tableBody = document.getElementById("tableBody");
        const totalAmountDisplay = document.getElementById("totalAmount");
        const btnNew = document.getElementById("btnNew");

        let totalAmount = 0;

        btnNew.addEventListener("click", function() {
            const description = descInput.value;
            const amount = parseFloat(amountInput.value);
            const type = typeSelect.value;

            if (description && !isNaN(amount)) {
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td>${description}</td>
                    <td class="colunAmont">${amount}</td>
                    <td class="colunType">${type}</td>
                    <td class="colunAction">
                        <button class="deleteButton">Deletar</button>
                    </td>
                `;
                tableBody.appendChild(newRow);

                if (type === "entrada") {
                    totalAmount += amount;
                } else if (type === "saida") {
                    totalAmount -= amount;
                }

                totalAmountDisplay.textContent = totalAmount;

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

                if (type === "entrada") {
                    totalAmount -= amount;
                } else if (type === "saida") {
                    totalAmount += amount;
                }

                totalAmountDisplay.textContent = totalAmount;

                row.remove();
            }
        });