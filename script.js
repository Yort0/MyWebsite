// Prevent the default behavior of Ctrl+A (selecting the entire page)
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
    }
});

function processTable() {
    // JavaScript logic here
}

function updateTextarea() {
    // JavaScript logic here
}
