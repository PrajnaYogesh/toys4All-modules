
import { CType } from "./type.mjs";

const categoryType = [
    {
        name:"Arts & Crafts", image : "https://www.okinawa.usmc-mccs.org/modules/media/t/cde6f0114f174564b0f16a902223ac46_v1.jpg?m=638298255491470000&w=1200&h=630"
    },
    {
        name:"Lego", image : "https://www.ikea.com/us/en/images/products/bygglek-201-piece-lego-r-brick-set-mixed-colors__0915518_pe784785_s5.jpg"
    },
    {
        name:"Action Figures", image : "https://m.media-amazon.com/images/I/71SLTkr-xrL.jpg"
    },
    {
        name:"Sand Play", image : "https://mybtoys.com/wp-content/uploads/BX1330_LS_A.jpg"
    },
    {
        name:"Building Blocks", image : "https://t3.ftcdn.net/jpg/04/72/12/66/360_F_472126629_Yj8WmE4IVhCnBBpnO9DivP0AlFJzcFvJ.jpg"
    }
]

const categories = categoryType.map(data => new CType( data.name, data.image));

export {categories};












// import { Product } from "./products.mjs";

// const categoryData = [
//     { image: "image1.jpg", name: "Product1", price: 29.99 },
//     { image: "image2.jpg", name: "Product2", price: 49.99 },
//     { image: "image3.jpg", name: "Product3", price: 19.99 },
//     { image: "image4.jpg", name: "Product4", price: 99.99 }
// ];

// // Create and export categories
// const categories = categoryData.map(data => new Product(data.image, data.name, data.price));

// export { categories };

//  --------------------------------------------------------------------------------------------------


// let categories = []
// function showCategory(){
//     const category1 = new Product("image1.jpg", "Product1", 29.99);
//     categories.push(category1)
//     const category2 = new Product("image2.jpg", "Product2", 49.99);
//     categories.push(category2)
//     const category3 = new Product("image3.jpg", "Product3", 19.99);
//     categories.push(category3)
//     const category4 = new Product("image4.jpg", "Product4", 99.99);
//     categories.push(category4)
// }

// showCategory();

// export {categories};


