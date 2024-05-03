const processButton = document.getElementById('processButton');
const inputArea = document.getElementById('tableInput');
const outputArea = document.getElementById('tableOutput');

processButton.addEventListener('click', function() {
  const tableText = inputArea.value;
  const processedTable = processAndDisplayTable(tableText);
  outputArea.innerHTML = processedTable;
});

function processAndDisplayTable(tableText) {
  // TODO: Table parsing, HTML generation, and delete row logic 
}
