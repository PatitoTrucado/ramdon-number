function numberPrint() {
    const min = 1;
    const max = 1000;
    const number = Math.floor(Math.random() * (max - min)) + min;
    
    console.log(`This is your number random ${number}`);
}

module.exports = numberPrint;