/* 10. Chọn idol K-pop để nghe nhạc 
Better Bytes Academy 
Tạo file: 10-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chưa tên K-pop idol (bts, blackpink, exo, twice), chương trình hiển thị một bài hát nổi tiếng của nhóm đó. 
�� Kết quả mong muốn: 
● "bts" → "Nghe ngay 'Dynamite'!" 
● "blackpink" → "Thử 'How You Like That' nào!" 
● "exo" → "Đừng bỏ lỡ 'Love Shot'!" 
● "twice" → "Bật ngay 'The Feels' nào!" */

let idol = "bts";

if(idol === "bts") {
    console.log("Nghe ngay 'Dynamite'!");
}
else if(idol === "blackpink") {
    console.log("Thử 'How You Like That' nào!");
}
else if(idol === "exo") {
    console.log("Đừng bỏ lỡ 'Love Shot'!");
}
else if(idol === "twice") {
    console.log("Bật ngay 'The Feels' nào!");
}   

switch (idol) {
    case "bts":
        console.log("Nghe ngay 'Dynamite'!");
        break;
    case "blackpink":
        console.log("Thử 'How You Like That' nào!");
        break;
    case "exo":
        console.log("Đừng bỏ lỡ 'Love Shot'!");
        break;
    case "twice":
        console.log("Bật ngay 'The Feels' nào!");
        break;
    default:
        break;
}