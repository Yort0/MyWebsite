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

    const rowCount = tableElement.rows.length;
    const deleteRowButtonsHTML = generateDeleteRowButtonsHTML(rowCount);

    return tableElement.outerHTML + deleteRowButtonsHTML;
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
