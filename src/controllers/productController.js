import Product from "../models/productModel.js";

// create product
export const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get product by id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update product by id
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete product by id
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}