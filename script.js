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
   for (let i = 0; i < rowCount; i++) {
       newTableHTML += '<tr>';
       newTableHTML += `<td><button class="deleteRowButton" onclick="deleteRow(this)">Delete Row</button></td>`;
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
