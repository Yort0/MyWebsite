function processAndDisplayTable(tableText) {
  const rows = tableText.split('\n');

  // Find the header row (assume the row with the most cells)
  let headerRow = rows[0];
  let maxCells = headerRow.split(/(\s+|[,;:\.]\s+)|'/).length;  // Split by spaces, punctuation, apostrophes

  for (let i = 1; i < rows.length; i++) {
    let numCells = rows[i].split(/(\s+|[,;:\.]\s+)|'/).length;
    if (numCells > maxCells) {
      headerRow = rows[i];
      maxCells = numCells;
    }
  }

  // Create the HTML for the table structure
  let newTableHTML = '<table style="border: 1px solid black; font-size: 0.8rem;">';
  newTableHTML += '<thead><tr>'; 

  // Process header cells
  const headerCells = removeBasicHTMLTags(headerRow).split(/(\s+|[,;:\.]\s+)|'/);  
  headerCells.forEach(cell => {
    newTableHTML += `<th>${cell}</th>`;
  });

  newTableHTML += '</tr></thead>';
  newTableHTML += '<tbody>'; 

  // Process data rows
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] !== headerRow) { // Skip the header row
      newTableHTML += '<tr>';

      // Improved cell processing:
      const cells = removeBasicHTMLTags(rows[i]).split(/(\s+|[,;:\.]\s+)|'/);
      let currentCell = '';
      for (let j = 0; j < cells.length; j++) {
        const cellContent = cells[j];
        // Check if next cell starts with a letter or underscore to group potential words
        if (j < cells.length - 1 &&  /^[a-zA-Z_]/.test(cells[j + 1]) ) {
          currentCell += cellContent + ' ';
        } else {
          newTableHTML += `<td>${currentCell + cellContent}</td>`;
          currentCell = '';
        }
      }
      // Add the last cell
      if (currentCell) {
        newTableHTML += `<td>${currentCell}</td>`;
      }

      newTableHTML += '</tr>';
    }
  }

  newTableHTML += '</tbody></table>';
  return newTableHTML;
}
