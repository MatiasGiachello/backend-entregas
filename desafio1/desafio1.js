// class ProductManager {
//     constructor() {
//         this.Products = [];
//     }
//     getProducts() {
//         return this.Products
//     }
//     addProduct(title, description, code, price, stock, thumbnail) {
//         let product = this.Products.find(prod => prod.code === code)
//         if (product) {
//             return console.log("colocado en la lista")
//         } else {
//             this.Products.push(
//                 {
//                     id: this.Products.length === 0 ? 1 : this.Products[this.Products.length - 1].id + 1,
//                     title,
//                     description,
//                     code,
//                     price,
//                     stock,
//                     thumbnail
//                 })
//         } console.log("Producto Agregado")
//     }
//     getProductsById(id) {
//         let product = this.Products.find(prod => prod.id === id)
//         if (!product) {
//             console.log("Producto no definido")
//         } else {
//             console.log("Producto Definido", product)

//         }
//     }
// }

// let productManager = new ProductManager();

// console.log("getProdcuts", productManager.getProdcuts());

// productManager.addProduct("producto de prueba", "Este producto es de prueba", 200, "sin foto", "abc", 25)
// console.log(productManager.getProdcuts());

// productManager.addProduct("producto de prueba", "Este producto es de prueba", 200, "sin foto", "abc", 25)

// productManager.getProdcutById(4);

// console.log("getProdcuts", productManager.getProdcuts());

