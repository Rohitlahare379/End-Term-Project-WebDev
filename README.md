# Personal Finance Tracker

## Project Title & Description
Personal Finance Tracker is a web-based application developed using HTML, CSS, and JavaScript.  
The project helps users record, track, and manage their income and expenses. It provides a clear view of total income, total expenses, and remaining balance, enabling better financial awareness and budgeting habits.

The application stores data locally in the browser so that transactions are not lost after refreshing the page.

---

## Problem Statement
Many individuals do not actively track their daily income and expenses, which often leads to poor financial planning and overspending.  
The objective of this project is to create a simple and interactive system that allows users to:
- Record income and expense transactions
- Categorize spending
- Instantly view financial summaries
- Maintain data persistence without using a backend

---

## Features Implemented
- Add income and expense transactions
- Categorization of transactions (Food, Transport, Education, Entertainment, etc.)
- Automatic calculation of:
  - Total Income
  - Total Expense
  - Remaining Balance
- Warning message when expenses exceed income
- Dynamic transaction list display
- Delete individual transactions
- Clear all transaction data with confirmation
- Data persistence using localStorage
- Sound feedback for user actions
- Responsive and dark-themed user interface

---

## DOM Concepts Used
The following DOM and JavaScript concepts are used in this project:
- `document.getElementById()` to access HTML elements
- Event handling using `addEventListener()`
- Dynamic creation and removal of elements using:
  - `document.createElement()`
  - `appendChild()`
  - `innerHTML`
- Manipulation of text content using `textContent`
- Conditional rendering based on data values
- Browser storage using `localStorage`
- JSON parsing and stringifying for data storage

---

## Steps to Run the Project
1. Download or clone the project repository.
2. Ensure all files (`index.html`, `style.css`, `script.js`, and the `sounds` folder) are in the same directory.
3. Open the `index.html` file in any modern web browser.
4. Start adding income and expense transactions using the input fields.
5. View the updated totals and transaction list in real time.

No additional installation or server setup is required.

---

## Known Limitations
- Data is stored only in the browser and will be lost if localStorage is cleared.
- No user authentication or login system is implemented.
- The project does not include a backend or database.
- No advanced data visualization (charts/graphs) is included.

---

## Conclusion
This project demonstrates the use of core JavaScript concepts such as DOM manipulation, event handling, data storage, and basic UI design to solve a real-world problem related to personal finance management.
