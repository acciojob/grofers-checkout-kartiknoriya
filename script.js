const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Select all price cells
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach((p) => {
    total += parseFloat(p.textContent);
  });

  const table = document.querySelector('table');

  // Remove existing total row if already added
  const existingRow = document.getElementById('ans');
  if (existingRow) {
    existingRow.remove();
  }

  // Create new row
  const newRow = document.createElement('tr');
  newRow.id = 'ans';

  const labelCell = document.createElement('td');
  const totalCell = document.createElement('td');

  labelCell.textContent = 'Total Price';
  totalCell.textContent = total;

  newRow.append(labelCell, totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

