const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');

formatButton.addEventListener('click', function() {
    const rawTable = inputArea.value;
    const processedTable = processAndDisplayTable(rawTable);
    outputArea.innerHTML = processedTable;
});

function processAndDisplayTable(tableText) {
    const rows = tableText.trim().split('\n');
    let newTableHTML = '<table>'; // Table style with font size

    for (let i = 0; i < rows.length; i++) {
        newTableHTML += '<tr>';
        const cells = rows[i].split('\t');
        cells.forEach(cell => {
            newTableHTML += `<td>${cell}<button class="deleteButton" onclick="deleteColumn(this)">Delete Column</button></td>`;
        });
        newTableHTML += `<td><button class="deleteButton" onclick="deleteRow(this)">Delete Row</button></td>`; // Add delete row button
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
