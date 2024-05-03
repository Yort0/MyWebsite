// Prevent the default behavior of Ctrl+A (selecting the entire page)
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
    }
});

function processTable() {
    const inputTable = document.getElementById('inputTable').innerHTML.trim();
    if (inputTable === '') {
        alert('Please paste a table first.');
        return;
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = inputTable;

    const tableElement = tempDiv.querySelector('table');

    if (!tableElement) {
        alert('No table found in input.');
        return;
    }

    const tableCopy = tableElement.cloneNode(true);

    const rows = tableCopy.querySelectorAll('tr');
    rows.forEach(row => {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Row';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            row.remove();
            updateTextarea();
        };
        const lastCell = row.insertCell();
        lastCell.appendChild(deleteButton);
    });

    document.getElementById('outputTable').innerHTML = '';
    document.getElementById('outputTable').appendChild(tableCopy);

    updateTextarea();
}

function updateTextarea() {
    const outputTable = document.getElementById('outputTable');
    const outputTextarea = document.getElementById('outputTextarea');
    outputTextarea.value = outputTable.outerHTML;
}
