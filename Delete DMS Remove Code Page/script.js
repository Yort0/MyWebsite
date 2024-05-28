document.addEventListener('DOMContentLoaded', function() {
   const cleanButton = document.getElementById('cleanButton');
   const inputContainer = document.getElementById('inputContainer');
   const outputText = document.getElementById('outputText');

   cleanButton.addEventListener('click', function() {
       const inputText = inputContainer.innerText;
       const cleanedText = cleanText(inputText);
       outputText.textContent = cleanedText;
   });

   outputText.addEventListener('keydown', function(event) {
       if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
           event.preventDefault();
           selectElementContents(outputText);
       }
   });

   function cleanText(text) {
       const tagRegex = /<[^>]*>/g; // Regex to match anything between < and >
       const entityRegex = /&[^;]+;/g; // Regex to match HTML entities

       return text.replace(tagRegex, '').replace(entityRegex, '');
   }

   function selectElementContents(element) {
       const range = document.createRange();
       range.selectNodeContents(element);
       const selection = window.getSelection();
       selection.removeAllRanges();
       selection.addRange(range);
   }
});
