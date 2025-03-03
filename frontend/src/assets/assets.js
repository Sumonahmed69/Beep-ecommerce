import k1 from '../assets/images/k-1.png'
import k2 from '../assets/images/k-2.png'
import k3 from '../assets/images/k-3.png'
import k4 from '../assets/images/k-4.png'
import kjb1 from '../assets/images/k-j-b-1.png'
import kjb2 from '../assets/images/k-j-b-2.png'
import kjb3 from '../assets/images/k-j-b-3.png'
import kjb4 from '../assets/images/k-j-b-4.png'
import kjnb1 from '../assets/images/k-j-b-1.png'
import kjnb2 from '../assets/images/k-j-b-2.png'
import kjnb3 from '../assets/images/k-j-b-3.png'
import kp1 from '../assets/images/k-1.png'
import kp2 from '../assets/images/k-2.png'
import kp3 from '../assets/images/k-3.png'
import kp4 from '../assets/images/k-4.png'
import kr1 from '../assets/images/k-r-1.png'
import kr2 from '../assets/images/k-r-2.png'
import kr3 from '../assets/images/k-r-3.png'
import kr4 from '../assets/images/k-r-4.png'
import ps1 from '../assets/images/p-s-1.png'
import ps2 from '../assets/images/p-s-2.png'
import ps3 from '../assets/images/p-s-3.png'
import ps4 from '../assets/images/p-s-4.png'
import trb1 from '../assets/images/t-rb-1.png'
import trb2 from '../assets/images/t-rb-2.png'
import trb3 from '../assets/images/t-rb-3.png'
import trb4 from '../assets/images/t-rb-4.png'
import tsb1 from '../assets/images/t-s--b-1.png'
import tsb2 from '../assets/images/t-s--b-2.png'
import tsb3 from '../assets/images/t-s--b-3.png'
import tsb4 from '../assets/images/t-s--b-4.png'
import tsy1 from '../assets/images/t-s-y-1.png'
import tsy2 from '../assets/images/t-s-y-2.png'
import tsy3 from '../assets/images/t-s-y-3.png'
import logo from '../assets/images/beep logo1.png'
import cart from '../assets/images/cart.png'
import hero from '../assets/images/hero-1.png'
import stripe from '../assets/images/Stripe_Logo.png'
import bkash from '../assets/images/bkash.png'
import about from '../assets/images/about.png'
import contact from '../assets/images/contact.png'
import Razorpay from '../assets/images/razorpay.png'








export const assets = {
    Razorpay,
    contact,
    about,
    bkash,
    stripe,
    hero,
    cart,
    logo,
    k1,
    k2,
    k3,
    k4,
    kjb1,
    kjb2,
    kjb3,
    kjb4,
    kjnb1,
    kjnb2,
    kjnb3,
    kp1,
    kp2,
    kp3,
    kp4,
    kr1,
    kr2,
    kr3,
    kr4,
    ps1,
    ps2,
    ps3,
    ps4,
    trb1,
    trb2,
    trb3,
    trb4,
    tsb1,
    tsb2,
    tsb3,
    tsb4,
    tsy1,
    tsy2,
    tsy3,




}
export const products = [
    {
        "_id": "1",
        "name": "Women Round Neck Cotton Top",
        "description": "A lightweight, usually knitted, pullover shirt, close-fitting",
        "price": 100,
        "image": [k1, k2, k3, k4],
        "category": "Women",
        "subCategory": "Topwear",
        "sizes": ["S", "M", "L"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "2",
        "name": "Men Casual Cotton Shirt",
        "description": "Comfortable and breathable cotton shirt, perfect for casual wear",
        "price": 120,
        "image": [tsb1, tsb2, tsb3, tsb4],
        "category": "Men",
        "subCategory": "Topwear",
        "sizes": ["M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": false
    },
    {
        "_id": "3",
        "name": "Unisex Hoodie Sweatshirt",
        "description": "Soft and warm fleece hoodie with front pockets",
        "price": 150,
        "image": [kjb1, kjb2, kjb3, kjb4],
        "category": "Kids",
        "subCategory": "Bottomwear",
        "sizes": ["S", "M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "4",
        "name": "Women Floral Maxi Dress",
        "description": "Elegant long dress with floral prints, perfect for summer",
        "price": 200,
        "image": [kr1, kr2, kr3, kr4],
        "category": "Women",
        "subCategory": "Topwear",
        "sizes": ["S", "M", "L"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "5",
        "name": "Men Slim Fit Denim Jeans",
        "description": "Stylish and durable denim jeans with a slim fit",
        "price": 180,
        "image": [tsb1, tsb2, tsb3, tsb4],
        "category": "Men",
        "subCategory": "Bottomwear",
        "sizes": ["M", "L", "XL", "XXL"],
        "date": 1716621345448,
        "bestseller": false
    },
    {
        "_id": "6",
        "name": "Women High-Waist Leggings",
        "description": "Stretchable and comfortable leggings for workouts and casual wear",
        "price": 90,
        "image": [trb1, trb2, trb3, trb4],
        "category": "Women",
        "subCategory": "Bottomwear",
        "sizes": ["S", "M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "7",
        "name": "Men Sports Joggers",
        "description": "Breathable and lightweight joggers for active lifestyle",
        "price": 130,
        "image": [kjb1, kjb2, kjb3, kjb4],
        "category": "Kids",
        "subCategory": "Winterwear",
        "sizes": ["M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": false
    },
    {
        "_id": "8",
        "name": "Women Knit Cardigan",
        "description": "Cozy and warm knit cardigan for chilly days",
        "price": 220,
        "image": [kr1, kr2, kr3, kr4],
        "category": "Women",
        "subCategory": "Bottomwear",
        "sizes": ["S", "M", "L"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "9",
        "name": "Men Leather Jacket",
        "description": "Stylish and rugged leather jacket for a bold look",
        "price": 300,
        "image": [tsy1, tsy2, tsy3],
        "category": "Men",
        "subCategory": "Bottomwear",
        "sizes": ["M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "10",
        "name": " Cotton Beanie",
        "description": "Soft and warm beanie for casual wear",
        "price": 50,
        "image": [ps1, ps2, ps3, ps4],
        "category": "Men",
        "subCategory": "Winterwear",
        "sizes": ["S", "M", "L"],
        "date": 1716621345448,
        "bestseller": false
    }, {
        "_id": "11",
        "name": "Men Slim Fit Denim Jeans",
        "description": "Stylish and durable denim jeans with a slim fit",
        "price": 18,
        "image": [tsb1, tsb2, tsb3, tsb4],
        "category": "Men",
        "subCategory": "Bottomwear",
        "sizes": ["M", "L", "XL", "XXL"],
        "date": 171621345448,
        "bestseller": false
    },
    {
        "_id": "12",
        "name": "Women High-Waist Leggings",
        "description": "Stretchable and comfortable leggings for workouts and casual wear",
        "price": 70,
        "image": [trb1, trb2, trb3, trb4],
        "category": "Women",
        "subCategory": "Bottomwear",
        "sizes": ["S", "M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "13",
        "name": "Men Sports Joggers",
        "description": "Breathable and lightweight joggers for active lifestyle",
        "price": 100,
        "image": [kjb1, kjb2, kjb3, kjb4],
        "category": "Kids",
        "subCategory": "Winterwear",
        "sizes": ["M", "L", "XL"],
        "date": 1716621345448,
        "bestseller": true
    },
    {
        "_id": "14",
        "name": "Women Knit Cardigan",
        "description": "Cozy and warm knit cardigan for chilly days",
        "price": 100,
        "image": [kr1, kr2, kr3, kr4],
        "category": "Women",
        "subCategory": "Winterwear",
        "sizes": ["S", "M", "L"],
        "date": 1716621345448,
        "bestseller": false
    },
]
