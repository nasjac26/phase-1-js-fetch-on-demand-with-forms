



const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("I am an event!") 
        console.log(event);
        // event.target.children;
    })}


document.addEventListener('DOMContentLoaded', init);