import { CType } from "./type.mjs";

const brandType = [
    {
        name:"Disney", image : "https://i.pinimg.com/736x/17/36/7f/17367f44837221f0e5c3d95e0af93981.jpg"
    },
    {
        name:"FisherPrice", image : "https://www.kroger.com/product/images/large/front/0088796160090"
    },
    {
        name:"PawPatrol", image : "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/74ac831a77a018242623a1dd53e54ac3.jpg"
    },
    {
        name:"PeppaPig", image : "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p274928_b_v13_aa.jpg"
    },
    {
        name:"HotWheels", image : "https://miro.medium.com/v2/resize:fit:854/0*zhrWkf7h1WG6hpgY.jpg"
    }
]

const brands = brandType.map(data => new CType( data.name, data.image));

export {brands};