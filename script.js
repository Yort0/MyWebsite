const processButton = document.getElementById('processButton');
const inputArea = document.getElementById('tableInput');
const outputArea = document.getElementById('tableOutput');

processButton.addEventListener('click', function() {
  const tableText = inputArea.value;
  const processedTable = processAndDisplayTable(tableText);
  outputArea.innerHTML = processedTable;
});

function processAndDisplayTable(tableText) {
  // Split the table text into rows based on new line characters
  const rows = tableText.split('\n');

  // Create the HTML for the table structure
  let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">';
  newTableHTML += '<thead><tr>';  // Add header row

  // Extract header cells from the first row (assuming consistent structure)
  const headerCells = rows[0].split(/\s{2,}/);  // Split by two or more spaces
  headerCells.forEach(cell => {
    newTableHTML += `<th>${cell}</th>`;
  });

  newTableHTML += '</tr></thead>';  // Close header row

  // Process table body rows (excluding the header row)
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].split(/\s{2,}/);
    newTableHTML += '<tr>';
    cells.forEach(cell => {
      newTableHTML += `<td>${cell}</td>`;
    });
    newTableHTML += '</tr>';
  }

  newTableHTML += '</table>';
  return newTableHTML;
}
