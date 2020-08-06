let colors = ["blue", "yellow", "pink"];
let sizes = ["small", "medium", "large"];
let types = ['p', 's', 't'];
let gender = ['Man', 'Woman'];

const products = [];

for (let i of colors) {
   for (let j of sizes){
        for (let k of types){
            products.push({color:i, size:j, type:k, gender:randomItem(gender) });
        }
    }
}
function filter(id) {
    return products.filter((product, index) => 
    ((product.type === id) || (product.color === id)));
}

function showProducts(ids) {
    var selectedItem = document.getElementById("products");
    selectedItem.innerHTML = ""
    for (let product of ids){
        selectedItem.innerHTML += "<div class = \"products-frame\"><img src=\"imgs/" + product.color + "_" + product.type + ".png\" alt=\"button1\" class = \"products-image\"><div class = \"products-discribe\">" +product.gender+", " + product.size + "-size </div></div>\n";
    }
    
}
showProducts(products);

function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}
