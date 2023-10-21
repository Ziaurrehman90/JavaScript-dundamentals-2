// lets first create the array of object type 
const products=[
    {
        name:"Laptop",
        price:120000,
    },
    {
        name:"Mobile",
        price:70000,
    },
    {
        name:"Laptop Bag",
        price:20000,
    },
    {
        name:"Watch",
        price:20000,
    },
    {
        name:"Mobile Charger",
        price:1500,
    },
]
function max_min(products){
    let maximum=0;
    let maxName='x';
    let minimum=999999;
    let minName='y';
    // maxium ka logic lagate h 
    for(let i of products){
        if(i['price']>maximum){
            maximum=i['price'];
            maxName=i['name'];

        }
        if(i['price']<minimum){
            minimum=i['price'];
            minName=i['name']
        }

    }
    console.log("The product with maximum amount is ",maxName," which is priced at Rs. ",maximum);
    console.log("The product with minimum amount is ",minName," which is priced at Rs. ",minimum);
    
}
max_min(products);