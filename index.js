function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const obj = {
        username, email, phone
    }
    const stingObj = JSON.stringify(obj);
    localStorage.setItem(email, stingObj);
    displayUser(obj);
}
function displayUser(obj) {



    const ul = document.querySelector('ul');
    
    const newli = document.createElement('li');
    newli.textContent = obj.username + "-" + obj.email + "-" + obj.phone;
    

    const newButton = document.createElement('button');

    newButton.textContent = 'Delete';
    newButton.addEventListener("click", () => {
        newli.remove();
        localStorage.removeItem(obj.email);
    })
    newli.appendChild(newButton);
    ul.appendChild(newli);


}
module.exports = handleFormSubmit;