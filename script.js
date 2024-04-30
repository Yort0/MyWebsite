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
        if (i === 0) {
            for (let j = 0; j < colCount; j++) {
                newTableHTML += `<th>${rows[i].cells[j].innerHTML}</th>`;
            }
        } else {
            newTableHTML += `<td><button class="deleteRowButton" onclick="deleteRow(${i})">Delete Row</button></td>`;
            for (let j = 0; j < colCount; j++) {
                newTableHTML += `<td>${rows[i].cells[j].innerHTML}</td>`;
            }
        }
        newTableHTML += '</tr>';
    }
    newTableHTML += '</table>';
    return newTableHTML;
}

function deleteRow(rowIndex) {
    const outputTable = document.getElementById('tableOutput').querySelector('table');
    outputTable.deleteRow(rowIndex);
}

function deleteColumn() {
    const outputTable = document.getElementById('tableOutput').querySelector('table');
    const colCount = outputTable.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
        outputTable.deleteRow(0);
    }
}
