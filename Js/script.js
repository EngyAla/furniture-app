let body = document.querySelector(".body")
let login_link = document.querySelector("#login_link")
let login_sec = document.querySelector(".login_sec")
let close_icon = document.querySelector("#close_icon")
let header2 = document.querySelector(".header2")
///////////////////////////////////////////////////////
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let login_btn = document.querySelector("#login_btn")
let logout_btn = document.querySelector("#logout_btn")
let logout_sec_details = document.querySelector(".logout_sec_details")
let login_sec_inputs = document.querySelector(".login_sec_inputs")
let welcome_tex = document.querySelector(".welcome_tex")
let login_sec_p = document.querySelector(".login_sec_p")
let login_tex = document.querySelector("#login_tex")
////////////////////////////////////////////////////////////
let Festival_link= document.querySelector("#Festival_tex")
let cairo_festival_sec = document.querySelector(".cairo_festival_sec")
let cairo_festival_close_icon = document.querySelector("#cairo_festival_close_icon")
////////////////////////////////////////////////////////////
let gallary = document.querySelector(".gallary")
let next_icon = document.querySelector(".next_icon")
let back_icon = document.querySelector(".back_icon")
let gallary2 = document.querySelector(".gallary2")
let next_icon2 = document.querySelector(".next_icon2")
let back_icon2 = document.querySelector(".back_icon2")
/////////////////////////////////////////////////////////////
window.addEventListener("scroll" , function onScroll(){
    if(window.scrollY > 50){
        // this.alert("kk")
        header2.style.top = "0%"
        header2.style.backgroundColor = "#fff"
        header2.style.zIndex = "999"
        header2.style.position = "fixed"
        }else{
        header2.style.top = "8%"
        header2.style.backgroundColor = "transparent"
    }
})

function handleRating(rating){
    let starHtml = ``;

    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)

    for(let i =0; i < fullStar; i++){
        starHtml += `<i class="fa-solid fa-star"></i>`
    }

    if(halfStar){
        starHtml += `<i class="fa-solid fa-star fa-star-half-stroke"></i>`
    }

    for(let i =0; i < emptyStar; i++){
        starHtml += `<i class="fa-regular fa-star"></i>`
    }
    return starHtml;
}

// products slider 1
let all_products = document.querySelector(".all_products")
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

function drawProducts(){
    all_products.innerHTML = products.map((item) =>{
        return`
        <div class="products">
                <div class="front">
                    <img src="${item.frontImg}" alt="">
                </div>
                <div class="back">
                    <img src="${item.backImg}" alt="">
                </div>
                <div class="products_tex">
                    <p class="red_title">New Lower Price</p>
                    <p class="item_description">${item.description}</p>
                    <p class="item_price"><sup>EGP</sup>${item.price}</p>
                    <div class="stars">${handleRating(item.rating)}</div>
                    <div class="add_to_cart">
                        <i class="fa-solid fa-bag-shopping cart_icon" data-id="${item.id}" id="cart_icon_1"></i>
                        <i class="fa-regular fa-heart" tabindex="0"></i>
                    </div>
                </div>
            </div>
        `
    }).join("")
} 
drawProducts()
// products slider 2
let all_products_2 = document.querySelector(".all_products_2")
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
function drawProducts2(){
    all_products_2.innerHTML = products_2.map((item) =>{
        return`
        <div class="products" data-id="${item.id}">
                <div class="front">
                    <img src="${item.frontImg}" alt="">
                </div>
                <div class="back">
                    <img src="${item.backImg}" alt="">
                </div>
                <div class="products_tex">
                    <p class="red_title">New Lower Price</p>
                    <p class="item_description">${item.description}</p>
                    <p class="item_price"><sup>EGP</sup>${item.price}</p>
                    <div class="stars">${handleRating(item.rating)}</div>
                    <div class="add_to_cart">
                        <i class="fa-solid fa-bag-shopping cart_icon cart_icon_2" data-custom-id="${item.id}"></i>
                        <i class="fa-regular fa-heart" tabindex="0"></i>
                    </div>
                </div>
            </div>
        `
    }).join("")
}
drawProducts2()

//////////////////////////////////////////////////////////////////////
let fav = document.querySelectorAll(".fa-heart")
fav.forEach((icon) =>{
    icon.addEventListener("click", ()=>{
        icon.style.fontWeight = 600
        icon.style.transform = "scale(1.2)"
    })
})
///////////////////////////////////////////////////////////////////////
// add products_1 to htmlCart and localStorage
let cart_num = document.querySelector(".cart_num")
let counter = 0;

if(localStorage.getItem("cartCount")){
    counter = parseInt(localStorage.getItem("cartCount"))
    cart_num.textContent = +(counter)
}

let carts = []
let addToCart_btn = document.querySelectorAll("#cart_icon_1")
addToCart_btn.forEach((item) => {
        item.addEventListener("click", () => {
            if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
                counter += 1;
                cart_num.textContent = +(counter)
                localStorage.setItem("cartCount" , counter)
                let productId = item.getAttribute("data-id");
                addToCartArray(productId)
            }else{
                alert("please login first!")
            }
        });
});
function addToCartArray(productId) {
    let selectedProduct = products.find((product) => product.id == productId);
    console.log(selectedProduct.quintity)
    if(carts.length === 0) {
        carts.push(selectedProduct); 
    } else {
        let productExist = carts.some((item) => item.id === productId);
        if (!productExist) {
            carts.push(selectedProduct); 
        } 
    }
    addToMemory(); 
}
function addToMemory(){
    localStorage.setItem("addedItem" , JSON.stringify(carts))
}
if(localStorage.getItem("addedItem")){
    carts = JSON.parse(localStorage.getItem("addedItem"))
}

let cart_2 = []
let addToCart_btn_2 = document.querySelectorAll(".cart_icon_2")
addToCart_btn_2.forEach((item) =>{
    item.addEventListener("click" , ()=>{
        if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){   
            counter += 1;
            cart_num.textContent = +(counter)
            localStorage.setItem("cartCount" , counter)
            let productId_2 = item.getAttribute("data-custom-id")
            console.log(productId_2)
            addToCartArray_2(productId_2)
        } else{
            alert("please login first!")
        }
    })
})

function addToCartArray_2(productId_2){
    let selectedProduct_2 = products_2.find((product) => product.id == productId_2)
    if(cart_2.length === 0){
        cart_2.push(selectedProduct_2)
    } else{
        let productExist_2 = products_2.some((item) => item.id === productId_2)
        if(!productExist_2){
            cart_2.push(selectedProduct_2)
        }
    }
    addToMemory_2()
}

function addToMemory_2(){
    localStorage.setItem("addedItem_2" , JSON.stringify(cart_2))
}
if(localStorage.getItem("addedItem_2")){
    cart_2 = JSON.parse(localStorage.getItem("addedItem_2"))
}
////////////////////////////////////////////////////////////////////////////////////////////////
// slider handling
next_icon.addEventListener("click" , ()=>{
    gallary.style.scrollBehavior = "smooth"
    gallary.scrollLeft += 950
    console.log("ooo")
})
back_icon.addEventListener("click" , ()=>{
    gallary.scrollLeft -= 950
    gallary.style.scrollBehavior = "smooth"

})
next_icon2.addEventListener("click" , ()=>{
    gallary2.style.scrollBehavior = "smooth"
    gallary2.scrollLeft += 950
    console.log("ooo")
})
back_icon2.addEventListener("click" , ()=>{
    gallary2.scrollLeft -= 950
    gallary2.style.scrollBehavior = "smooth"

})
// toggle login section
login_link.addEventListener("click", function(){
    console.log("open")
    login_sec.style.transform = "translateX(0%)"
    body.className = "toggled"
})

close_icon.addEventListener("click" , function(){
    console.log("close")
    login_sec.style.transform = "translateX(100%)"
    body.className = "no_toggle"
})

// toggle festavle section
Festival_link.addEventListener("click", function(){
    console.log("open")
    cairo_festival_sec.style.transform = "translateX(0%)"
    body.className = "toggled"
})

cairo_festival_close_icon.addEventListener("click" , function(){
    console.log("close")
    cairo_festival_sec.style.transform = "translateX(100%)"
    body.className = "no_toggle"
})

// login logic
login_btn.addEventListener("click" , function(){
    if(username.value === "" || email.value === "" || password.value === ""){
        alert("please fill data")
    }else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password" , password.value)

        login_tex.textContent = "Hej " + localStorage.getItem("username") + "!"
        welcome_tex.textContent = "Hej " + localStorage.getItem("username") + "!"
        login_sec_p.textContent = ""
        logout_sec_details.style.display = "block"
        login_sec_inputs.style.display = "none"
    }
})
if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
    login_tex.textContent = "Hej " + localStorage.getItem("username") + "!"
    welcome_tex.textContent = "Hej " + localStorage.getItem("username") + "!"
    login_sec_p.textContent = ""
    logout_sec_details.style.display = "block"
    login_sec_inputs.style.display = "none"
}

// logout logic
logout_btn.addEventListener("click" , function(){
    username.value = ""
    email.value = "" 
    password.value = ""
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("password")

    login_tex.textContent = "Login"
    welcome_tex.textContent = "Log in to your account"
    login_sec_p.textContent = "Get a more personalised experience where you don't need to fill in your information every time"
    logout_sec_details.style.display = "none"
    login_sec_inputs.style.display = "flex"
})

let bag = document.querySelector(".fa-bag-shopping")
bag.addEventListener("click" ,()=>{
    if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
        setTimeout(()=>{
            window.location = "cart.html"
        }, 1000)
    }else{
        alert("please login first!")
    }
})