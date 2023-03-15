const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sqOfNum = numbers.map((num) => num * num);
console.log(sqOfNum);


const Products = [
    {ProdID : 1001, ProdName : 'Computer' , ProdPrice : 30000},
    {ProdID : 1002, ProdName : 'Laptop' , ProdPrice : 35000},
    {ProdID : 1003, ProdName : 'Mobile' , ProdPrice : 10000},
    {ProdID : 1004, ProdName : 'Tablet' , ProdPrice : 5000}
    ]
    
    const ProdNames = Products.map(product =>product.ProdName);
    console.log(ProdNames)
    
    // const divs = ProdNames.map(name => `<div>${name}</div>`);
    // console.log(divs);

    const divss = ProdNames.map(name => console.log(`${name}`));
    // console.log(divss);



