const processButton = document.getElementById('processButton');
const inputContainer = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');
const deleteButtonsContainer = document.getElementById('deleteButtons');

processButton.addEventListener('click', function() {
    const inputText = inputContainer.textContent;
    const processedTable = processAndDisplayTable(inputText);
    outputArea.firstChild.innerHTML = processedTable; // Inject into existing table
});

function processAndDisplayTable(inputText) {
    // TODO: Add your table processing logic here  
    // 1. Split the text into lines 
    // 2. Split each line into cells (tabs or consistent spacing)
    // 3. Generate the HTML for the table structure

    // Placeholder - remove this 
    let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">'; 
    newTableHTML += '<tr><td>Sample Row</td><td>Sample Cell</td></tr>'; 
    newTableHTML += '</table>';
    return newTableHTML;
}

function deleteRow(rowIndex) {
    const table = document.querySelector('#tableOutput table');
    const rowToDelete = table.rows[rowIndex];
    rowToDelete.remove();

    const deleteButton = deleteButtonsContainer.childNodes[rowIndex]; 
    deleteButton.remove();
}
