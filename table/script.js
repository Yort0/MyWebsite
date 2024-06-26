const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');

formatButton.addEventListener('click', function() {
   const table = inputArea.innerHTML;
   const formattedTable = formatTable(table);
   outputArea.innerHTML = formattedTable;
});

// New code for selecting formatted table with Ctrl+A
outputArea.addEventListener('keydown', function(event) {
    // Check if Ctrl key (Cmd key on macOS) is pressed and the key pressed is 'a' (or 'A')
    if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
        // Prevent the default action of the browser (which is to select all text)
        event.preventDefault();
        
        // Select the contents of the output container
        selectElementContents(outputArea);
    }
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
               // Omit the "Delete Column" buttons here
               newTableHTML += `<th>${rows[i].cells[j].innerHTML}</th>`;
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
   const tableRow = deleteButton.parentNode.parentNode; // Get the table row
   tableRow.parentNode.removeChild(tableRow); // Remove the row from the table
}

function deleteColumn(columnIndex) {
   const outputTable = document.getElementById('tableOutput').querySelector('table');
   const rows = outputTable.rows;

   for (let i = 0; i < rows.length; i++) {
       rows[i].deleteCell(columnIndex);
   }
}

// Function to select the contents of an element
function selectElementContents(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
