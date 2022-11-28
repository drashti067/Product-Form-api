const Product = require('../model/product.model')

exports.addproduct = async (req, res, next) => {
    const data = req.body;
    const productdata = await Product.create(data);

    res.json({
        msg: 'data inseted succesfuly!!',
        status: 'success',
        result: productdata
    })
}

exports.getProducts = async (req, res, next) => {
 
    const posts = await Product.find()
    res.json({  
        status: 'success',
        message: 'Dodument display successfully.',
        result: posts
    });
};

exports.getProductById = async (req, res) => {
	const post = await Product.findOne({ _id: req.params.id })
    res.json({  
        status: 'success',
        message: 'Dodument display successfully.',
        result: post
    });
};

exports.updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    if (!id) return next(new AppError('No id was provided.', 400));

    if (data.slug) data.slug = _.kebabCase(data.slug);
    if (data.id) delete data.id;

    const product = await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    if (!product) return next(new AppError('No product found with this id.', 404));

    res.json({
        status: 'success',
        message: 'Dodument updated successfully.',
        result: product
    });
};




exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    if (!id) return next(new AppError('No id was provided.', 400));

    const productss = await Product.findByIdAndDelete(id);
    if (!Product) return next(new AppError('No product foun`d with this id.', 404));

    res.json({
        status: 'success',
        message: 'Dodument deleted successfully.',
        result: productss
    });
};

