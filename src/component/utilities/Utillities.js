const addToDo=id=>{
    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }else{
        shoppingCart={};
    }


    // add the shopping cart
    const quantity=shoppingCart[id];
    if(quantity){
            const newQuantity=parseInt(quantity)+1;
            shoppingCart[id]=newQuantity;
            // localStorage.setItem(id, newQuantity);
    }else{
        shoppingCart[id]=1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFormDb=id=>{
    const storedCart=localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart= JSON.parse(storedCart)
             if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export {addToDo,removeFormDb}