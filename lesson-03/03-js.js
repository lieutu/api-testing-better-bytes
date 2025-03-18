/* �� 3. Chọn nền tảng streaming để xem phim 
Tạo file: 03-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Khai báo biến chứa tên nền tảng (netflix, disney+, hbo, prime) và chương trình hiển thị một bộ phim nổi bật trên nền tảng đó. 
�� Kết quả mong muốn: 
● "netflix" → "Bạn có thể xem 'Stranger Things'!" 
● "disney+" → "Thử ngay 'Loki' trên Disney+!" 
● "hbo" → "Xem 'Game of Thrones' ngay nào!" 
● "prime" → "Bạn có thể xem 'The Boys'!"  */

let platform = "netflix";
let movie = "";

if(platform === "netflix"){
    movie = "Bạn có thể xem 'Stranger Things'!";
}
else if(platform === "disney+"){
    movie = "Thử ngay 'Loki' trên Disney+!";
}
else if(platform === "hbo"){    
    movie = "Xem 'Game of Thrones' ngay nào!";
}
else if(platform === "prime"){
    movie = "Bạn có thể xem 'The Boys'!";
}
else{
    movie = "Không có nền tảng này!";
}
console.log(movie);

switch (platform) {
    case "netflix":
        movie = "Bạn có thể xem 'Stranger Things'!";
        break;
    case "disney+":
        movie = "Thử ngay 'Loki' trên Disney+!";
        break;
    case "hbo":
        movie = "Xem 'Game of Thrones' ngay nào!";
        break;
    case "prime":
        movie="Bạn có thể xem 'The Boys'!";
        break;
    default:
        movie = "Không có nền tảng này!";
}
console.log(movie);