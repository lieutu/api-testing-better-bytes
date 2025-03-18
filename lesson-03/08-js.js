/* 8. Lựa chọn phương tiện di chuyển 
Tạo file: 08-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chứa tên phương tiện (bike, car, bus, train), chương trình hiển thị thời gian ước tính để đến nơi. 
�� Kết quả mong muốn: 
● "bike" → "Mất khoảng 15 phút" 
● "car" → "Mất khoảng 10 phút" 
● "bus" → "Mất khoảng 30 phút" 
● "train" → "Mất khoảng 45 phút"  */

let vehicle = "bike";

if (vehicle == "bike") {
    console.log("Mất khoảng 15 phút");
}
else if (vehicle == "car") {    
    console.log("Mất khoảng 10 phút");
}
else if (vehicle == "bus") {            
    console.log("Mất khoảng 30 phút");
}
else if (vehicle == "train") {
    console.log("Mất khoảng 45 phút");
}

switch (vehicle) {
    case "bike":
        console.log("Mất khoảng 15 phút");
        break;
    case "car":
        console.log("Mất khoảng 10 phút");
        break;
    case "bus":
        console.log("Mất khoảng 30 phút");
        break;
    case "train":
        console.log("Mất khoảng 45 phút");
        break;
    default:
          break;
}