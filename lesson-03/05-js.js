/* 5. Chọn chế độ Dark Mode hay Light Mode 
Tạo file: 05-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chứa giá trị "dark" hoặc "light", chương trình in ra thông báo thay đổi giao diện. �� Kết quả mong muốn: 
● "dark" → "Chế độ tối đã được bật!" 
● "light" → "Chế độ sáng đã được bật!"  */

let mode = "dark";
if (mode === "dark") {
    console.log("Chế độ tối đã được bật!");
}
else if (mode === "light") {
    console.log("Chế độ sáng đã được bật!");
} else {
    console.log("Chế độ không hợp lệ!");
}

switch (mode) {
    case "dark":
        console.log("Chế độ tối đã được bật!");
        break;
    case "light":
        console.log("Chế độ sáng đã được bật!");
        break;
    default:
        console.log("Chế độ không hợp lệ!");
        break;
}