let phones = {
    Techno:{
        brand: "Techno",
        inCart: 'false',
        capacity: "6G RAM, 128G memory",
        price: 750.000
    },
    Apple:{
        brand: "Iphone",
        inCart: "false",
        capacity: "8G RAM, 128G memory",
        price: 800.99
    },
    Samsung:{
        brand: "Samsung",
        inCart: "false",
        capacity: "4G RAM, 64G memory",
        price: 350.99
    },
    Hauwei:{
        brand: "Hauwei",
        inCart: "false",
        capacity: "4G RAM, 128G memory",
        price: 550.99
    },
    HTC:{
        brand: "HTC",
        inCart: "false",
        capacity: "4G RAM, 264G memory",
        price: 750.99
    }
}

export function _getPhones (){
    return new Promise((res, rej) =>{
        setTimeout(() => res({...phones}), 1000);
    });
}

export function setInCart({id, inCart}){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            phones = {
                ...phones,
                [id]:{
                    ...phones[id],
                    inCart: inCart
                }
            }
            res()
        }, 500);
    });
}