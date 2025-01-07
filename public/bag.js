
function addToCart(par) {
    // Get the values of the elements that you want to add to the ca
    const classname = par.className;
    
    const img = document.querySelector(`.`+classname+" "+'img').src;
    const h2 = document.querySelector(`.`+classname+" "+'h2').textContent;
    const h3 = document.querySelector(`.`+classname+" "+'h3').textContent;
    const h4 = document.querySelector(`.`+classname+" "+'h4').textContent;
    const size = document.querySelector(`.`+classname+" "+'#size').value;

    // Store the values in the local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ img, h2, h3, h4, size });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.alert('Item added to Bag')
    

    // Redirect the user to the cart page
}
function deleteItem() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    cartItems.pop();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    Display();
    window.alert('Item removed from Bag')
}

function Display(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartDetails');
    cartItemsContainer.innerHTML=''
    cartItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.className="cart-Details"
        itemContainer.innerHTML = `
            <img src="${item.img}" alt="shirt image"/>
            <h2>${item.h2}</h2>
            <h3>${item.h3}</h3>
            <p>Size: ${item.size}</p>
            <h4>${item.h4}</h4>
        `;
        cartItemsContainer.appendChild(itemContainer);
    });
}


Display();

