<<<<<<< HEAD
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
=======
let colors = ["blue", "yellow", "pink"];
let sizes = ["small", "medium", "large"];
let types = ['p', 's', 't'];
let gender = ['Man', 'Woman'];

const products = [];

for (let i of colors) {
   for (let j of sizes){
        for (let k of types){
            products.push({color:i, size:j, type:k, sex:randomItem(sex) });
        }
    }
}
const button1 = products.filter((product, index) => product.type === 't');
const button2 = products.filter((product, index) => product.type === 's');
const button3 = products.filter((product, index) => product.type === 'p');
const button4 = products.filter((product, index) => product.color === 'blue');
const button5 = products.filter((product, index) => product.color === 'yellow');
const button6 = products.filter((product, index) => product.color === 'pink');

var selectedItem = document.getElementById("products");
console.log(selectedItem);

function showProducts(id) {
    var selectedItem = document.getElementById("products");
    var addForm = document.createElement("div");
        selectedItem.innerHTML = ""
    for (let product of id){
        selectedItem.innerHTML += "<div class = \"products-frame\"><img src=\"imgs/" + product.color + "_" + product.type + ".png\" alt=\"button1\" class = \"products-image\"><div class = \"products-discribe\">" +product.gender+", " + product.size + "-size </div></div>\n"
    }
    
}
showProducts(products);

function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}
>>>>>>> e808450e9eb36284ba85860b2946069d2e5c4fe6