/** Biến */
// var a = 10;
// var a = 20;
// var b = 20;

// var c = a + b;
// console.log(c);

// let a = 10;
// let a = 20;
// let b = 20;
// let c = a + b;
// console.log(c);

// const a = 10;
// a = 20;
// console.log(a);

/**
 * Mặc định sử dụng const để khai báo biến
 * Nếu cần thay đổi giá trị thì sử dụng let
 */

/**
 * Đặt tên biến:
 *  - camelCase
 *  - danh từ
 *  - Nếu số nhiều thì phải có list hoặc thêm s
 * Đặt tên hàm
 *  - camelCase
 *  - động từ
 */

// const productList = [];
// const products = [];
// const users = [];
// const myName = "Lê Trọng Đạt";
// const myAge = 20;
// const isMarried = true;
// const hasChild = false;
// const myInfo = {
//     name: "Lee",
//     age: 20,
// };

// // Khai báo hàm
// function removeProduct() {}
// function setPermission() {}
// function getProduct() {}
// function addProduct() {}


/** 
 * / Khai báo và tham trị
 * Shalow copy
 */


// const product =[1,2,3,4];
// const productClone = [...products] ;
// productsClone.push(5);
// console.log("products", products);
// console.log("productsClone", productsClone);

//Đối tượng
// const products ={
//     // name: "Product A",
// };
// const productsClone ={...products };
// productClone.price = 200 ;
// productClone.address.street ="8";

/**kiểu dữ liệu : string, number , boolean, object, underfined
 */
const myAge = 10; //number
const myName ="Lee"; //string
const isMarried = true ; //boolean
const myInfo = {
    //object
    name:"lee",
    age : 28,
    run: function(){
        //method
        // console.log(thisname); // this là gọi từ tên đầu r gọi đến tên sau ( cách 1)
    }
};
const myChildren = ["A","B","C"]; //array

console.log(myInfo.name); // gọi tên đầu trc đến tên sau ( cách 2)
console.log(myInfo.run());