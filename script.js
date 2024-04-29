inputContainer.focus(); // Try adding this line

const processButton = document.getElementById('processButton');
const inputContainer = document.getElementById('inputContainer');
const outputArea = document.getElementById('tableOutput');
const deleteButtonsContainer = document.getElementById('deleteButtons');

// Add the paste event listener
inputContainer.addEventListener('paste', function(event) {
    // Only prevent the default if the clipboard contains text content
    if (event.clipboardData && event.clipboardData.types.includes('text/plain')) {
        event.preventDefault(); 
        const clipboardData = event.clipboardData || window.clipboardData;  
        const pastedText = clipboardData.getData('text/plain');
        inputContainer.textContent = pastedText; 
    }
});

processButton.addEventListener('click', function() {
    const inputText = inputContainer.textContent;
    const processedTable = processAndDisplayTable(inputText);
    outputArea.firstChild.innerHTML = processedTable; 
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
