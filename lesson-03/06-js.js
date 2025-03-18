/* 6. Đặt món ăn nhanh 
Tạo file: 06-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chứa tên món (burger, pizza, sushi, taco), chương trình hiển thị giá tiền món đó. �� Ví dụ: 
● "burger" → "Giá: 5$" 
● "pizza" → "Giá: 8$" 
● "sushi" → "Giá: 12$" 
● "taco" → "Giá: 6$"  */

let food = "burger";
let price = 0;

if (food === "burger") {
    price = 5;
}
else if (food === "pizza") {
    price = 8;
}
else if (food === "sushi") {
    price = 12;
}
else if (food === "taco") {
    price = 6;
}
else {
    price = 0;
}
console.log(`Giá: ${price}$`);

switch (food) {
    case "burger":
        price = 5;
        break;
    case "pizza":
        price = 8;
        break;
    case "sushi":
        price = 12;
        break;
    case "taco":
        price = 6;
        break;
    default:
        price = 0;
        break;
}
console.log(`Giá: ${price}$`);

