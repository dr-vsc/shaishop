
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config();

const app = express();
app.use(cors())
//middleware
app.use(express.json());
// Serve static files from the React app
app.use(express.static('client/build'));

const Product = mongoose.model("product", {
    title: String,
    description: String,
    category: String,
    image: String,
    price: Number,
    rating: {
        rate: Number,
        count: Number,
    }
    //  completed: Boolean,
})

app.get("/api", (req, res) => {
    res.send("hello world")
});

// app.get("api/products", (req, res) => {
//     const { title, price, description, image } = req.query;
//     Product.find().then((products) => {
//         const filteredProducts = { title, price, description, category, image }
//             ? products.filter((product) =>
//                 product.title.toLowerCase().includes(title.toLowerCase())
//             )
//             : products;
//         console.log("fff", filteredProducts);
//         res.send(filteredProducts);
//     });
// });s

app.get("/api/products/:productId", (req, res) => {
    const { productId } = req.params;
    Product.findById(productId)
        .then((product) => {
            res.send(product);
            console.log("product", product);
        })
        .catch((err) => res.send("err"));
});

app.get("/api/products", (req, res) => {
    Product.find()
        .then((products) => {
            res.send(products);
        })
        .catch((err) => res.send("err"));
});

app.post("/api/products", (req, res) => {
    const { title, price, description, category, image, rating: { rate, count } } = req.body;
    Product.insertMany([
        {
            title: String,
            description: String,
            category: String,
            image: String,
            price: Number,
            rating: {
                rate: Number,
                count: Number,
            }
        }
    ]).then((products) => {
        res.send(products);
    });
});

app.patch("/api/products/:productId", (req, res) => {
    const { productId } = req.params;

    Product.findByIdAndUpdate(productId, req.body)
        .then((products) => res.send(products))
        .catch((err) => res.send("err"));
});

app.delete("/api/products/:productId", (req, res) => {
    const { productId } = req.params;

    Product.findByIdAndRemove(productId)
        .then((product) => res.send(product))
        .catch((err) => res.send("err"));
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + 'client/build/index.html');
});

const { DB_PASS, DB_USER, DB_HOST, DB_NAME } = process.env
const PORT = process.env.PORT || 8000
// mongoose.connect("mongodb://localhost:27017/products-05-22").then(() => {
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
// app.get("/products", (req, res) => {
//     fsp.readFile("./products.json", "utf8").then(Data => res.send(Data));
// });

// app.get("/products/:productId", (req, res) => {
//     const { productId } = req.params;
//     fsp.readFile("./products.json", "utf8").then(Data => {
//         const products = JSON.parse(Data);
//         const product = products.find((product) => product.id === +productId);
//         if (product) {
//             res.send(product)
//         } else {
//             res.send("false")
//         }
//     });
// });
// function getMaxId(arr) {
//     const ids = arr.map((obg) => {
//         return obg.id;
//     })
//     const max = Math.max(...ids);
//     return max;
// }

// app.post('/products', (req, res) => {
//     fsp.readFile("./products.json", "utf8").then(data => {
//         const products = JSON.parse(data);
//         const { title, price, description, category, image, rating } = req.body;
//         console.log(products);
//         products.push({
//             id: getMaxId(products) + 1,
//             title,
//             price,
//             description,
//             category,
//             image,
//             rating,
//         })
//         fsp.writeFile("./products.json", JSON.stringify(products));
//         res.send(products);
//     })
// })
// app.patch("/products/:productId", (req, res) => {
//     const { productId } = req.params;
//     console.log("I'm on PATCH")
//     fsp.readFile("./products.json", "utf8").then((data => {
//         if (req.body) {
//             const products = JSON.parse(data)
//             const productIndex = products.findIndex((product) => product.id === +productId)
//             console.log(productIndex)
//             products[productIndex] = { ...products[productIndex], ...req.body }
//             fsp.writeFile("./products.json", JSON.stringify(products)).then(() => {
//                 res.send(products)
//             }).catch((err) => console.log(error))
//         }
//     }))
//         .catch((err) => res.send(err))

// })
// app.delete("/products/:productId", (req, res) => {
//     const { productId } = req.params;
//     console.log("I'm on PATCH")
//     fsp.readFile("./products.json", "utf8").then((data => {
//         if (req.body) {
//             const products = JSON.parse(data)
//             const productIndex = products.findIndex((product) => product.id === +productId)
//             products.splice(productIndex, 1)
//             products[productIndex] = { ...products[productIndex], ...req.body }
//             fsp.writeFile("./products.json", JSON.stringify(products)).then(() => {
//                 res.send(products)
//             }).catch((err) => console.log(error))
//         }
//     }))
//         .catch((err) => res.send(err))

// })

// Create HTTP server and listen on port 8000 for requests

// http.createServer((request, response) => {
//     console.log("test");

//     readMyFile("myTextEn.txt")
//     // Set the response HTTP header with HTTP status and Content type
//     // response.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send the response body "Hello World"
//     response.end("Success");
// }).listen(8000);

// // Print URL for accessing server
// console.log('Server running at http://127.0.0.1:8000/');