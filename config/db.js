const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt"); // encrypting fields

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// USER
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, // mporoume na dwsoume epipleon idiothtes sto first name
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    role: {
        type: String,
        default: "client", // default role
        enum: ["client", "admin", "superUser"]
    }
}, {
    timestamps: true // adds timestamps
});

userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);

//PRODUCT
const productSchema = mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    title: String,
    miniDescription: String,
    description: String,
    price: Number,
    sale: Number,
    photo: String
}, {
    timestamps: true
});

global.Product = mongoose.model("Product", productSchema);

//CATEGORY
const categorySchema = mongoose.Schema({
    title: String
}, {
    timestamps: true
});

global.Category = mongoose.model("Category", categorySchema);
