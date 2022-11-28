


const router = require('express').Router();
const { addproduct ,getProducts,getProductById,updateProduct,deleteProduct} = require("../controller/product.controller")


router.post("/addProduct", addproduct);
router.get("/getProduct",getProducts);
router.get("/getProductById/:id",getProductById);
router.patch("/editproduct/:id",updateProduct);
router.delete("/deleteProduct/:id" ,deleteProduct);

module.exports = router;

