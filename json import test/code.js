const vers = document.getElementById('jsonVersion');

function writeInConsole(text) {
    const consoleElement = document.querySelector('.console');

    if (consoleElement) {
        consoleElement.innerText += text + '\n';
    }
}

writeInConsole('Starting the fetching...');
setTimeout(() => {
    writeInConsole('Data processed successfully!');
}, 100);
setTimeout(() => {
    fetch('package.json')
    .then(r => r.json())
    .then(data => {
        setTimeout(() => {
       writeInConsole(JSON.stringify(data));
       vers.innerText = data.version; 
        },10)
    })
}, 50);