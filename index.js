function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const object = {
         username, email, phone
        
    }
    const stringObj = JSON.stringify(object);
    localStorage.setItem(email, stringObj);
    getUsersFromLocalStorage(object);
}
function getUsersFromLocalStorage(object) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    
  
    li.textContent = object.username + "-" + object.email + "-"  + object.phone;

    ul.appendChild(li);
    
    
}
module.exports = handleFormSubmit;