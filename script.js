const formatButton = document.getElementById('formatButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');
const deleteRowButtonsContainer = document.getElementById('deleteRowButtons');
const deleteColumnButton = document.getElementById('deleteColumnButton');

formatButton.addEventListener('click', function() {
    const table = inputArea.innerHTML;
    const formattedTable = formatTable(table);
    outputArea.innerHTML = formattedTable;
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

    const rowCount = tableElement.rows.length;
    const deleteRowButtonsHTML = generateDeleteRowButtonsHTML(rowCount);

    deleteRowButtonsContainer.innerHTML = deleteRowButtonsHTML;

    return tableElement.outerHTML;
}

function generateDeleteRowButtonsHTML(rowCount) {
    let buttonsHTML = '';
    for (let i = 1; i < rowCount; i++) {
        buttonsHTML += `<div class="deleteButtonContainer"><button class="deleteButton" onclick="deleteRow(${i})">Delete Row ${i}</button></div>`;
    }
    return buttonsHTML;
}

function deleteRow(rowIndex) {
    const outputTable = document.getElementById('tableOutput').querySelector('table');
    outputTable.deleteRow(rowIndex);
}
