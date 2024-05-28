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
       // Replace </li><li> with a space
       const liRegex = /<\/li>\s*<li>/g;
       text = text.replace(liRegex, ' ');

       // Remove all other HTML tags
       const tagRegex = /<[^>]*>/g;
       text = text.replace(tagRegex, '');

       // Remove HTML entities
       const entityRegex = /&[^;]+;/g;
       text = text.replace(entityRegex, '');

       return text;
   }

   function selectElementContents(element) {
       const range = document.createRange();
       range.selectNodeContents(element);
       const selection = window.getSelection();
       selection.removeAllRanges();
       selection.addRange(range);
   }
});
