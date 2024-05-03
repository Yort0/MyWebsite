function processAndDisplayTable(tableText) {
  const rows = tableText.split('\n');

  // Find the header row (assume the row with the most cells)
  let headerRow = rows[0];
  let maxCells = headerRow.split(/\s+/).length;  // Estimate by spaces
  for (let i = 1; i < rows.length; i++) {
    let numCells = rows[i].split(/\s+/).length;
    if (numCells > maxCells) {
      headerRow = rows[i];
      maxCells = numCells;
    }
  }

  // Create the HTML for the table structure
  let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">';
  newTableHTML += '<thead><tr>'; 

  // Process header cells
  const headerCells = removeBasicHTMLTags(headerRow).split(/\s+/);  
  headerCells.forEach(cell => {
    newTableHTML += `<th>${cell}</th>`;
  });

  newTableHTML += '</tr></thead>';
  newTableHTML += '<tbody>'; 

  // Process data rows
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] !== headerRow) { // Skip the header row
      newTableHTML += '<tr>';
      const cells = removeBasicHTMLTags(rows[i]).split(/\s+/);
      cells.forEach(cell => {
        newTableHTML += `<td>${cell}</td>`;
      });
      newTableHTML += '</tr>';
    }
  }

  newTableHTML += '</tbody></table>';
  return newTableHTML;
}

// Helper to strip out basic HTML tags
function removeBasicHTMLTags(text) {
  return text.replace(/<[^>]+>/g, ''); 
}
