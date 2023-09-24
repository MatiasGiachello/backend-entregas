const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.products = []
        this.path = path
    }

    writeFile = async data => {
        try {
            await fs.promises.writeFile(
                this.path, JSON.stringify(data, null, 2)
            )
        } catch (error) {
            console.log(error)
        }
    }
    getProducts = async () => {
        try {
            const productsList = await fs.promises.readFile(this.path, 'utf-8')
            const product = productsList === "" ? [] : JSON.parse(productsList)
            return product
        } catch (error) {
            if (error.message.includes('ENOENT: no such file or directory')) return []
            console.log(error)
        }
    }
    addProduct = async (title, description, price, thumbnail, code, stock) => {

        let products = await this.getProducts()

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Debe completar todos los Datos para Generar un nuevo Producto")
            return
        }

        const codeExists = products.some(product => product.code === code)
        if (codeExists) {
            console.log("El Código del Producto ya existe. Debe ser único para cada Producto")
            return
        }
        if (products.length === 0) {
            product.id = 1;
        } else {
            product.id = products[products.length - 1].id + 1;
        }
        products.push(product)
        await this.writeFile(products)
        return this.getProducts()
    }
    getProductById = async (id) => {
        let products = await this.getProducts()

        const productFind = products.find(product => product.id === id)
        if (productFind) {
            console.log(productFind)
            return productFind
        } else {
            console.log(`El producto con el ID: ${id} no ha sido encontrado`)
        }
    }

    updateProduct = async (id, { title, description, price, thumbnail, code, stock }) => {
        try {
            let products = await this.getProducts()
            let product = await this.getProductById(id)
            if (product) {
                Object.assign(products[id - 1], { title, description, price, thumbnail, code, stock })
                await this.writeFile(products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteProduct = async (id) => {
        try {
            let products = await this.getProducts()
            let product = await this.getProductById(id)
            let newList = products.filter(prod => prod.id !== id)
            if (product) {
                await this.writeFile(newList)
            }

        } catch (error) {
            console.log(error)
        }
    }
}


const ProductManager = new ProductManager('entrega2/products.json')

