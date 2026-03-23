const posts = [
    {
        "id": 1,
        "name": "Ultima G3 Smartwatch",
        "category": "Wearables",
        "price": 199.99,
        "in_stock": true,
        "tags": ["fitness", "tech", "waterproof"]
    },
    {
        "id": 2,
        "name": "ErgoDesk Pro",
        "category": "Furniture",
        "price": 450.00,
        "in_stock": true,
        "tags": ["office", "ergonomic", "standing-desk"]
    },
    {
        "id": 3,
        "name": "SonicBoom Wireless Speaker",
        "category": "Audio",
        "price": 75.50,
        "in_stock": false,
        "tags": ["portable", "bluetooth", "bass-boost"]
    },
    {
        "id": 4,
        "name": "Nebula 4K Projector",
        "category": "Home Cinema",
        "price": 899.00,
        "in_stock": true,
        "tags": ["4k", "smart-tv", "cinema"]
    },
    {
        "id": 5,
        "name": "AeroLight Running Shoes",
        "category": "Footwear",
        "price": 120.00,
        "in_stock": true,
        "tags": ["running", "lightweight", "sports"]
    },
    {
        "id": 6,
        "name": "BrewMaster Espresso Machine",
        "category": "Appliances",
        "price": 249.99,
        "in_stock": true,
        "tags": ["coffee", "kitchen", "espresso"]
    },
    {
        "id": 7,
        "name": "Titan Gaming Chair",
        "category": "Furniture",
        "price": 320.00,
        "in_stock": true,
        "tags": ["gaming", "comfort", "leather"]
    },
    {
        "id": 8,
        "name": "EcoCharge Solar Power Bank",
        "category": "Accessories",
        "price": 45.00,
        "in_stock": true,
        "tags": ["solar", "outdoor", "portable"]
    }
]

const getPosts = (req, res) => {
    res.send(posts.map((data, i) => {
        console.log(first)
        // res.send(data)
    }))
}

export default getPosts;