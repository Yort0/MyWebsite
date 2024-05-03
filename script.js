const processButton = document.getElementById('processButton');
const inputArea = document.getElementById('tableInput');
const outputArea = document.getElementById('tableOutput');

processButton.addEventListener('click', function() {
    const rawTable = inputArea.value;
    const processedTable = processAndDisplayTable(rawTable);
    outputArea.innerHTML = processedTable;
});

function processAndDisplayTable(tableText) {
    const rows = tableText.split('\n');
    let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">'; // Table style with font size

    for (let i = 0; i < rows.length; i++) {
        newTableHTML += '<tr>';
        const cells = rows[i].split('\t');
        cells.forEach(cell => {
            newTableHTML += `<td>${cell}</td>`;  // Only add cell content
        });
        newTableHTML += `<td><button onclick="deleteRow(this.parentElement)">Delete</button></td>`;  // Add delete button on the side
        newTableHTML += '</tr>';
    }

    newTableHTML += '</table>';
    return newTableHTML;
}

function deleteRow(tableRow) {
    tableRow.parentElement.removeChild(tableRow); // Remove the row from the table
}
