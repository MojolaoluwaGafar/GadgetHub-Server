const PRODUCT = require("../Models/Product")

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      brand,
      specifications,
    } = req.body

    if (!req.file) {
      return res.status(400).json({ message: "Product image is required" })
    }

    const product = await PRODUCT.create({
      name,
      description,
      category,
      brand,
      specifications: JSON.parse(specifications),

      image: {
        url: req.file.path,
        public_id: req.file.filename,
      },
    })

    res.status(201).json({
      message: "Product added successfully",
      product,
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to add product" })
  }
}

module.exports = { addProduct }
