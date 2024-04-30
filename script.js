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
        for (let j = 0; j < colCount; j++) {
            newTableHTML += `<td>${rows[i].cells[j].innerHTML}<button class="deleteButton" onclick="deleteColumn(this)">Delete Column</button></td>`;
        }
        newTableHTML += `<td><button class="deleteButton" onclick="deleteRow(this)">Delete Row</button></td>`;
        newTableHTML += '</tr>';
    }
    newTableHTML += '</table>';
    return newTableHTML;
}

function deleteRow(deleteButton) {
    const tableRow = deleteButton.parentNode.parentNode; // Get the table row
    tableRow.parentNode.removeChild(tableRow); // Remove the row from the table
}

function deleteColumn(deleteButton) {
    const tableCell = deleteButton.parentNode; // Get the table cell
    const cellIndex = tableCell.cellIndex; // Get the index of the cell
    const table = tableCell.parentNode.parentNode; // Get the table
    const rows = table.rows; // Get all rows of the table

    for (let i = 0; i < rows.length; i++) {
        rows[i].deleteCell(cellIndex); // Delete the cell at the specified index in each row
    }
}
