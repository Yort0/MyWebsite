const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputTextarea = document.getElementById('outputTextarea'); // Changed to textarea

formatButton.addEventListener('click', function() {
   const table = inputArea.innerHTML;
   const formattedTable = formatTable(table);
   outputTextarea.value = formattedTable; // Set value of textarea
});

// No need for Ctrl+A functionality for selecting text in textarea

function formatTable(table) {
   const tempDiv = document.createElement('div');
   tempDiv.innerHTML = table;
   const tableElement = tempDiv.querySelector('table');

   if (!tableElement) {
       return 'No table found in input.';
   }

   const rows = tableElement.rows;
   const rowCount = rows.length;
   const colCount = rows[0].cells.length;

   let newTableHTML = '';
   for (let i = 0; i < rowCount; i++) {
       for (let j = 0; j < colCount; j++) {
           if (i === 0) {
               newTableHTML += rows[i].cells[j].innerHTML + '\t';
           } else {
               newTableHTML += rows[i].cells[j].innerHTML + '\t';
           }
       }
       newTableHTML += '\n';
   }
   return newTableHTML;
}

// DeleteRow and DeleteColumn functions remain unchanged
