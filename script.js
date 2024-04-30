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
    let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">'; // Table style with font size

    for (let i = 0; i < rows.length; i++) {
        newTableHTML += '<tr>';
        const cells = rows[i].split('\t');
        cells.forEach(cell => {
            newTableHTML += `<td>${cell}</td>`;
        });
        newTableHTML += '</tr>';
    }

    newTableHTML += '</table>';
    return newTableHTML;
}
