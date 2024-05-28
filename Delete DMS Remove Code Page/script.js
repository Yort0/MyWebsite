document.addEventListener('DOMContentLoaded', function() {
   const cleanButton = document.getElementById('cleanButton');
   const inputContainer = document.getElementById('inputContainer');
   const outputText = document.getElementById('outputText');

   cleanButton.addEventListener('click', function() {
       const inputText = inputContainer.innerText;
       const cleanedText = cleanText(inputText);
       outputText.textContent = cleanedText;
   });

   function cleanText(text) {
       // Remove HTML tags and entities
       const tagRegex = /<[^>]*>/g; // Regex to match anything between < and >
       const entityRegex = /&[^;]+;/g; // Regex to match HTML entities

       return text.replace(tagRegex, '').replace(entityRegex, '');
   }
});
