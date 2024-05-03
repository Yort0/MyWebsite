const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');
const tableBody = document.getElementById('tableBody');  

formatButton.addEventListener('click', function() {
  const table = inputArea.innerHTML;
  const formattedTable = formatTable(table);
  tableBody.innerHTML = formattedTable; 
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

  let newTableHTML = ''; 

  for (let i = 0; i < rowCount; i++) {
    newTableHTML += '<tr>';

    // Create delete button and add to table cell:
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Row';
    deleteButton.classList.add('deleteRowButton');
    deleteButton.onclick = function() { deleteRow(this) }; 
    const buttonCell = document.createElement('td');
    buttonCell.appendChild(deleteButton);
    newTableHTML += buttonCell.outerHTML; 

    for (let j = 0; j < colCount; j++) {
      if (i === 0) {
        newTableHTML += `<th>${rows[i].cells[j].innerHTML}<button class="deleteColumnButton" onclick="deleteColumn(${j})">Delete Column</button></th>`;
      } else {
        newTableHTML += `<td>${rows[i].cells[j].innerHTML}</td>`;
      }
    }
    newTableHTML += '</tr>';
  }

  return newTableHTML;
}

function deleteRow(deleteButton) {
  const tableRow = deleteButton.parentNode.parentNode; 
  tableRow.parentNode.removeChild(tableRow); 
}

function deleteColumn(columnIndex) {
  const rows = tableBody.rows; 

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(columnIndex);
  }
}
