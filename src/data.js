export const products = [
    {
        id:"1",
        text:"Ноутбуки", 
        imageSrc: "/img/notebook.jpg",
        items:[{
            id: "1",
            imageSrc: "/img/notebook.jpg",
            text: "Lenova",
            price: 55000,
            description: "блаблабла",
        },
        {
            id: "2",
            imageSrc: "/img/notebook.jpg",
            text: "HP",
            price: 35000,
            
        }],
    },
    {
        id:"2",
        text:"Роутеры",
        imageSrc: "/img/router.jpg",
    },
    {
        id:"3",
        text:"Модемы",
        imageSrc: "/img/modem.jpg",
    },
    {
        id:"4",
        text:"Смартфоны",
        imageSrc: "/img/smart.jpg",
    },
    {
        id:"5",
        text:"Планшеты",
        imageSrc: "/img/tablet.jpg",
    },
    {
        id:"6",
        text:"SSD",
        imageSrc: "/img/ssd.jpg",
    },
    {
        id:"7",
        text:"USB",
        imageSrc: "/img/usb.jpg",
    },
]

export const items = {}
products.forEach(product => {
    if(product.items){
        product.items.forEach(item => {
            items[item.id] = item;
        });
    }
})
