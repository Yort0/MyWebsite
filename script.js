const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');

formatButton.addEventListener('click', function() {
  const table = inputArea.innerHTML;
  const formattedTable = formatTable(table);
  outputArea.innerHTML = formattedTable;
});

function formatTable(table) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = table;
  const tableElement = tempDiv.querySelector('table');

  if (!tableElement) {
    return '<p>No table found in input.</p>';
  }

  const rows = tableElement.rows;
  const rowCount = rows.length;
  const colCount = rows[0].cells.length;

  let newTableHTML = '<table>';
  const deleteButtons = []; 

  for (let i = 0; i < rowCount; i++) {
    newTableHTML += '<tr>';

    // Create and store delete button:
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Row';
    deleteButton.classList.add('deleteRowButton');
    deleteButton.onclick = function() { deleteRow(this) }; 
    deleteButtons.push(deleteButton);

    for (let j = 0; j < colCount; j++) {
      if (i === 0) {
        newTableHTML += `<th>${rows[i].cells[j].innerHTML}<button class="deleteColumnButton" onclick="deleteColumn(${j})">Delete Column</button></th>`;
      } else {
        newTableHTML += `<td>${rows[i].cells[j].innerHTML}</td>`;
      }
    }
    newTableHTML += '</tr>';
  }
  newTableHTML += '</table>';

  // Add buttons to container:
  const buttonsContainer = document.getElementById('deleteButtonsContainer');
  buttonsContainer.innerHTML = ''; 
  deleteButtons.forEach(button => buttonsContainer.appendChild(button));

  return newTableHTML;
}

function deleteRow(deleteButton) {
  const tableRow = deleteButton.parentNode.parentNode; 
  tableRow.parentNode.removeChild(tableRow); 
}

function deleteColumn(columnIndex) {
  const outputTable = document.getElementById('tableOutput').querySelector('table');
  const rows = outputTable.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(columnIndex);
  }
}
