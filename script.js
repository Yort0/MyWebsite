const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');
const deleteRowButton = document.getElementById('deleteRowButton');
const deleteColumnButton = document.getElementById('deleteColumnButton');

formatButton.addEventListener('click', function() {
    const table = inputArea.innerHTML;
    const formattedTable = formatTable(table);
    outputArea.innerHTML = formattedTable;
});

deleteRowButton.addEventListener('click', function() {
    const outputTable = document.getElementById('tableOutput').querySelector('table');
    const rowCount = outputTable.rows.length;

    if (rowCount > 0) {
        outputTable.deleteRow(rowCount - 1);
    }
});

deleteColumnButton.addEventListener('click', function() {
    const outputTable = document.getElementById('tableOutput').querySelector('table');
    const rows = outputTable.rows;

    for (let i = 0; i < rows.length; i++) {
        rows[i].deleteCell(0); // Always delete the first column
    }
});

function formatTable(table) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = table;
    const tableElement = tempDiv.querySelector('table');

    if (!tableElement) {
        return '<p>No table found in input.</p>';
    }

    return tableElement.outerHTML;
}
