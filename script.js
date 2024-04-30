const processButton = document.getElementById('processButton');
const inputArea = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');

processButton.addEventListener('click', function() {
    const rawTable = inputArea.innerHTML;
    const processedTable = processAndDisplayTable(rawTable);
    outputArea.innerHTML = processedTable;
});

function processAndDisplayTable(tableText) {
    const rows = tableText.trim().split('<div><br></div>'); // Adjust for line breaks
    let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">'; // Table style with font size

    for (let i = 0; i < rows.length; i++) {
        newTableHTML += '<tr>';
        const cells = rows[i].split('\t');
        cells.forEach(cell => {
            newTableHTML += `<td>${cell}</td>`;
        });
        newTableHTML += `<td><button class="deleteButton" onclick="deleteRow(this)">Delete</button></td>`; // Add delete button for each row
        newTableHTML += '</tr>';
    }

    newTableHTML += '</table>';
    return newTableHTML;
}

function deleteRow(deleteButton) {
    const tableRow = deleteButton.parentNode.parentNode; // Get the table row
    tableRow.parentNode.removeChild(tableRow); // Remove the row from the table
}
