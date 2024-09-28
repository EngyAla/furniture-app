let header2 = document.querySelector(".header2")
window.addEventListener("scroll" , function onScroll(){
    if(window.scrollY > 50){
        header2.style.top = "0%"
        header2.style.backgroundColor = "#fff"
        header2.style.zIndex = "9999"
        header2.style.position = "fixed"
        }else{
        header2.style.top = "8%"
    }
})

let login_tex = document.querySelector("#login_tex")
if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
    login_tex.textContent = "Hej " + localStorage.getItem("username") + "!"
}

let products = [
    {
        id: 1,
        frontImg: "photo/kleppstad-bed-frame-white-vissle-beige__1035340_pe840527_s5.avif",
        backImg: "photo/kleppstad-bed-frame-white-vissle-beige__1035341_pe840528_s5.avif",
        description: "Bed frame, 160x200 cm",
        price: "13258",
        rating: 4.5,
        quintity: 1
    },
    {
        id: 2,
        frontImg: "photo/segeroen-chair-with-armrests-outdoor-dark-green__1138767_pe880069_s5.avif",
        backImg: "photo/segeroen-chair-with-armrests-outdoor-dark-green__1185517_pe898420_s5.avif",
        description: "Chair with armrests, outdoor",
        price: "5495",
        rating: 3,
        quintity: 1
    },
    {
        id: 3,
        frontImg: "photo/tonstad-desk-brown-stained-oak-veneer__1329845_pe945275_s5.avif",
        backImg: "photo/tonstad-desk-brown-stained-oak-veneer__1319551_pe941587_s5.avif",
        description: "Desk, 140x75 cm",
        price: "14495",
        rating: 5,
        quintity: 1
    },
    {
        id: 4,
        frontImg: "photo/godmorgon-mirror-cabinet-with-2-doors-kasjoen-white__0649004_pe705182_s5.avif",
        backImg: "photo/godmorgon-mirror-cabinet-with-2-doors-kasjoen-white__0861357_pe689759_s5 (1).avif",
        description: "Mirror cabinet with 2 doors, 60x14x96 cm",
        price: "8995",
        rating: 4,
        quintity: 1
    },
    {
        id: 5,
        frontImg: "photo/kinnahult-table-lamp-black-ash-black__0982269_pe815596_s5.avif",
        backImg: "photo/kinnahult-table-lamp-black-ash-black__0982270_pe815599_s5.avif",
        description: "Table lamp, 37 cm",
        price: "1999",
        rating: 3.5,
        quintity: 1
    },
    {
        id: 6,
        frontImg: "photo/langsted-rug-low-pile-light-brown__1080058_pe857845_s5.avif",
        backImg: "photo/langsted-rug-low-pile-light-brown__1080059_pe857846_s5.avif",
        description: "Rug, low pile, 133x195 cm",
        price: "2799",
        rating: 2,
        quintity: 1
    },
    {
        id: 7,
        frontImg: "photo/benno-tv-bench-white__1041933_pe841201_s5.avif",
        backImg: "photo/benno-tv-bench-white__1041935_pe841202_s5.avif",
        description: "TV bench, 120x39x42 cm",
        price: "4995",
        rating: 5,
        quintity: 1
    },
    {
        id: 8,
        frontImg: "photo/hoegalt-chair-silver-colour-aelvsborg-beige__1156076_pe886890_s5.avif",
        backImg: "photo/hoegalt-chair-silver-colour-aelvsborg-beige__1156073_pe886883_s5.avif",
        description: "Chair",
        price: "3795",
        rating: 3,
        quintity: 1
    },
    {
        id: 9,
        frontImg: "photo/kyrre-stool-birch__0714153_pe729952_s5.avif",
        backImg: "photo/kyrre-stool-birch__1318923_ph191746_s5.avif",
        description: "Stool",
        price: "1495",
        rating: 3.5,
        quintity: 1
    },
]

let productsInCart = localStorage.getItem("addedItem");
let all_products_cart = document.querySelector(".all_products_cart");
let total_price = document.querySelector(".total_price")

let total_1 = 0; // لتخزين مجموع الدالة drawTotal
let total_2 = 0; // لتخزين مجموع الدالة drawTotal_2

function drawTotal(products) {
    // حساب مجموع الأسعار للمنتجات الأولى
    total_1 = products.reduce((sum, item) => {
        return sum + (item.price * (item.quintity || 1)); 
    }, 0);
    
    updateTotal(); 
}

function drawTotal_2(products_2) {
    total_2 = products_2.reduce((sum, item) => {
        return sum + (item.price * (item.quintity || 1)); 
    }, 0);
    
    updateTotal(); 
}

function updateTotal() {
    let combinedTotal = total_1 + total_2;
    
    total_price.innerHTML = `
        <h3 class="total_price"><sup>EGP</sup>${combinedTotal}</h3>
    `;
}

if (productsInCart) {
    let items = JSON.parse(localStorage.getItem("addedItem"));
    drawCartProducts(items);
    drawTotal(items)
}
function drawCartProducts(products) {
    all_products_cart.innerHTML = products.map((item) => {
        return `
        <div class="cart_content container" data-id="${item.id}">
            <img src="${item.frontImg}" width="200">
            <div class="products_tex">
                <p class="red_title">New Lower Price</p>
                <p class="item_description">${item.description}</p>
                <p class="item_price"><sup>EGP</sup>${item.price}</p>
                <div class="cart_actions">
                    <div class="inc_dec">
                        <i class="fa-solid fa-minus" onclick="removeOneItem(${item.id})"></i>
                        <h5 class="quantity" data-id="${item.id}">${item.quintity || 1}</h5>
                        <i class="fa-solid fa-plus" onclick="addOneItem(${item.id})"></i>
                    </div>
                    <div class="del">
                        <p class="delete" onclick="deleteItem(${item.id})">Remove</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="container">
        `;
    }).join("");
}


// plus , minus
function removeOneItem(id){
    let itemRow = event.target.closest(".cart_content");
    if (itemRow) {
        let amount = itemRow.querySelector(".quantity");
        let totalAmount = parseInt(amount.textContent);

        if (totalAmount === 1) {
            itemRow.remove();
            removeFromLocalStorage(id);  // إزالة المنتج من LocalStorage
        } else {
            totalAmount -= 1;
            amount.textContent = totalAmount;
            updateAmountInLocalStorage(id, totalAmount);  // تحديث الكمية في LocalStorage
        }

        // تقليل عدد المنتجات في العربة في LocalStorage
        updateCartCount(-1);
    }
}

function deleteItem(id){
    let itemRow = event.target.closest(".cart_content");
    if(itemRow){
        let amount = itemRow.querySelector(".quantity");
        let totalAmount = parseInt(amount.textContent);

        if(totalAmount === 1){
            itemRow.remove();
            removeFromLocalStorage(id);  // إزالة المنتج من localStorage
            updateCartCount(-1);
        }
    }
}

function addOneItem(id){
    let itemRow = event.target.closest(".cart_content");
    if(itemRow){
        let amount = itemRow.querySelector(".quantity");
        let totalAmount = parseInt(amount.textContent);
        let price = itemRow.querySelector(".item_price")
        console.log(price.textContent)
        totalAmount += 1;
        amount.textContent = totalAmount;
        
        updateCartCount(1);
        // تحديث الكمية في localStorage بعد الزيادة
        updateAmountInLocalStorage(id, totalAmount);
    }
}

function updateCartCount(change) {
    let currentCount = parseInt(localStorage.getItem("cartCount")) || 0;
    let newCount = currentCount + change;

    // تخزين العدد الجديد في LocalStorage
    localStorage.setItem("cartCount", newCount);

    // تحديث واجهة المستخدم بالعدد الجديد
    cart_num.textContent = newCount;
}

function updateAmountInLocalStorage(id, newAmount) {
    let cart = JSON.parse(localStorage.getItem("addedItem")) || [];
    
    // تحديث الكمية للمنتج المحدد
    cart = cart.map(product => {
        if (product.id == id) {
            product.quintity = newAmount; // تحديث الكمية
        }
        return product;
    });

    // حفظ التعديلات في localStorage
    localStorage.setItem("addedItem", JSON.stringify(cart));
}

function removeFromLocalStorage(id) {
    let cart = JSON.parse(localStorage.getItem("addedItem")) || [];
    cart = cart.filter(product => product.id != id);  // حذف المنتج
    localStorage.setItem("addedItem", JSON.stringify(cart));  // حفظ السلة الجديدة
}

let cart_num = document.querySelector(".cart_num")
let cartCount = parseInt(localStorage.getItem("cartCount"))
cart_num.textContent = cartCount
/////////////////////////////////////////////////////////////
let porductsInCart_2 = localStorage.getItem("addedItem_2")
let all_products_cart_2 = document.querySelector(".all_products_cart_2")

if(porductsInCart_2){
    let item_2 = JSON.parse(localStorage.getItem("addedItem_2"))
    drawCartProducts_2(item_2)
    drawTotal_2(item_2)

}
let products_2 = [
    {
            id: 1,
            frontImg: "photo/micke-desk-white-anthracite__0921886_pe787989_s5.avif",
            backImg: "photo/micke-desk-white-anthracite__0973767_ph175190_s5.avif",
            description: "Desk, 105x50 cm",
            price: "5795",
            rating: 4.5,
            quintity: 1
    },
    {
        id: 2,
        frontImg: "photo/billy-bookcase-with-glass-doors-grey-metallic-effect__0806974_pe770197_s5.avif",
        backImg: "photo/billy-bookcase-with-glass-doors-grey-metallic-effect__0834401_pe778289_s5.webp",
        description: "Bookcase with glass-doors, 80x30x202 cm",
        price: "9995",
        rating: 3.5,
        quintity: 1
    },
    {
        id: 3,
        frontImg: "photo/droenjoens-letter-tray-white__0669940_pe715479_s5.avif",
        backImg: "photo/droenjoens-letter-tray-white__0773826_pe756537_s5.avif",
        description: "Letter tray",
        price: "999",
        rating: 5,
        quintity: 1
    },
    {
        id: 4,
        frontImg: "photo/utespelare-gaming-chair-bomstad-grey__0985643_pe816715_s5.avif",
        backImg: "photo/utespelare-gaming-chair-bomstad-grey__1046649_ph180883_s5.avif",
        description: "Gaming chair",
        price: "9995",
        rating: 5,
        quintity: 1
    },
    {
        id: 5,
        frontImg: "photo/alex-storage-unit-black-brown__1209803_pe909446_s5.avif",
        backImg: "photo/alex-storage-unit-black-brown__1216044_pe912307_s5.jpg",
        description: "Storage unit, 36x70 cm",
        price: "3995",
        rating: 3,
        quintity: 1
    },
    {
        id: 6,
        frontImg: "photo/gladhoejden-desk-sit-stand-light-grey-anthracite__1159426_pe888475_s5.avif",
        backImg: "photo/gladhoejden-desk-sit-stand-light-grey-anthracite__1159431_pe888479_s5.avif",
        description: "Desk sit/stand, 100x60 cm",
        price: "14495",
        rating: 4,
        quintity: 1
    },
    {
        id: 7,
        frontImg: "photo/blaliden-glass-door-cabinet-white__1186284_pe898752_s5.avif",
        backImg: "photo/blaliden-glass-door-cabinet-white__1187668_pe899238_s5.avif",
        description: "Glass-door cabinet,",
        price: "5995",
        rating: 4,
        quintity: 1
    },
    {
        id: 8,
        frontImg: "photo/ikea-365-food-container-square-plastic__0711439_pe728231_s5.jpg",
        backImg: "photo/ikea-365-food-container-square-plastic__0897184_pe694699_s5.avif",
        description: "Food container, 1.4 l",
        price: "139",
        rating: 5,
        quintity: 1
    },
    {
        id: 9,
        frontImg: "photo/vittsjoe-laptop-stand-black-brown-glass__0176250_pe329143_s5.avif",
        backImg: "photo/vittsjoe-laptop-stand-black-brown-glass__0855294_pe564652_s5.avif",
        description: "Laptop stand, 35x65 cm",
        price: "2295",
        rating: 5,
        quintity: 1
    },
]
function drawCartProducts_2(products_2){
    all_products_cart_2.innerHTML = products_2.map((item) =>{
        return`
            <div class="cart_content container" data-id="${item.id}">
            <img src="${item.frontImg}" width="200">
            <div class="products_tex">
                <p class="red_title">New Lower Price</p>
                <p class="item_description">${item.description}</p>
                <p class="item_price"><sup>EGP</sup>${item.price}</p>
                <div class="cart_actions">
                    <div class="inc_dec">
                        <i class="fa-solid fa-minus" onclick="removeOneItem_2(${item.id})"></i>
                        <h5 class="quantity" data-id="${item.id}">${item.quintity || 1}</h5>
                        <i class="fa-solid fa-plus" onclick="addOneItem_2(${item.id})"></i>
                    </div>
                    <div class="del">
                        <p class="delete" onclick="deleteItem_2(${item.id})">Remove</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="container">
        `
    }).join("")
}

function removeOneItem_2(id){
    let itemRow = event.target.closest(".cart_content");
    if (itemRow) {
        let amount = itemRow.querySelector(".quantity");
        let totalAmount = parseInt(amount.textContent);

        if (totalAmount === 1) {
            itemRow.remove();
            removeFromLocalStorage_2(id)
        } else {
            totalAmount -= 1;
            amount.textContent = totalAmount;
            updateAmountInLocalStorage_2(id, totalAmount)
        }

        // تقليل عدد المنتجات في العربة في LocalStorage
        updateCartCount(-1);
    }
}
function deleteItem_2(id){
    let itemRow = event.target.closest(".cart_content");
    if(itemRow){
        let amount = itemRow.querySelector(".quantity");
        let totalAmount = parseInt(amount.textContent);

        if(totalAmount === 1){
            itemRow.remove();
            removeFromLocalStorage_2(id)
            updateCartCount(-1);
        }
    }
}

function addOneItem_2(id){
    let itemRow = event.target.closest(".cart_content");
    if(itemRow){
        let amount = itemRow.querySelector(".quantity");
        let totalAmount = parseInt(amount.textContent);
        let price = itemRow.querySelector(".item_price")
        console.log(price.textContent)
        totalAmount += 1;
        amount.textContent = totalAmount;
        
        updateCartCount(1);
        // تحديث الكمية في localStorage بعد الزيادة
        updateAmountInLocalStorage_2(id, totalAmount)
    }
}

function updateAmountInLocalStorage_2(id, newAmount) {
    let cart_2 = JSON.parse(localStorage.getItem("addedItem_2")) || [];
    
    // تحديث الكمية للمنتج المحدد
    cart_2 = cart_2.map(product => {
        if (product.id == id) {
            product.quintity = newAmount; // تحديث الكمية
        }
        return product;
    });

    // حفظ التعديلات في localStorage
    localStorage.setItem("addedItem_2", JSON.stringify(cart_2));
}

function removeFromLocalStorage_2(id) {
    let  cart_2 = JSON.parse(localStorage.getItem("addedItem_2")) || [];
    cart_2 = cart_2.filter(product => product.id != id);  // حذف المنتج
    localStorage.setItem("addedItem_2", JSON.stringify(cart_2));  // حفظ السلة الجديدة
}
