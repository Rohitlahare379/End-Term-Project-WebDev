
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const categorySelect = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");
const warningEl = document.getElementById("warning");
const transactionList = document.getElementById("transactionList");

const addSound = document.getElementById("addSound");
const clearSound = document.getElementById("clearSound");


addBtn.addEventListener("click", function () {
  const description = descriptionInput.value;
  const amount = Number(amountInput.value);
  const type = typeSelect.value;
  const category = categorySelect.value;

  if (description === "" || amount <= 0) {
    alert("Enter valid details");
    return;
  }

  const transaction = {
    description,
    amount,
    type,
    category
  };

  transactions.push(transaction);
  addSound.play();
  saveData();
  updateUI();

  descriptionInput.value = "";
  amountInput.value = "";
});


function saveData() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}


function updateUI() {
  updateTotals();
  renderTransactions();
}


function updateTotals() {
  let income = 0;
  let expense = 0;

  transactions.forEach(item => {
    if (item.type === "income") {
      income += item.amount;
    } else {
      expense += item.amount;
    }
  });

  totalIncomeEl.textContent = income;
  totalExpenseEl.textContent = expense;
  balanceEl.textContent = income - expense;

  if (expense > income) {
    warningEl.textContent = "Warning: Expenses exceed income!";
  } else {
    warningEl.textContent = "";
  }
}


function renderTransactions() {
  transactionList.innerHTML = "";

  transactions.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.description} - ₹${item.amount} (${item.category})`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function () {
      transactions.splice(index, 1);
      saveData();
      updateUI();
    });

    li.appendChild(deleteBtn);
    transactionList.appendChild(li);
  });
}


clearBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all data?")) {
    clearSound.play();
    transactions = [];
    saveData();
    updateUI();
  }
});


updateUI();

