/* 7. Chọn cấp bậc trong game 
Tạo file: 07-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chứa cấp bậc (bronze, silver, gold, diamond), chương trình hiển thị quyền lợi. 
�� Kết quả mong muốn: 
● "bronze" → "Bạn đang ở cấp bậc thấp nhất!" 
● "silver" → "Bạn đã có một số lợi ích!" 
● "gold" → "Bạn nhận được nhiều phần thưởng hơn!" 
● "diamond" → "Bạn thuộc top người chơi xuất sắc!"  */

let rank = "diamond";

if (rank === "bronze") {
  console.log("Bạn đang ở cấp bậc thấp nhất!");
}
if (rank === "silver") {
    console.log("Bạn đã có một số lợi ích!");
    }
if (rank === "gold") {
    console.log("Bạn nhận được nhiều phần thưởng hơn!");
    }
if (rank === "diamond") {
    console.log("Bạn thuộc top người chơi xuất sắc!");
    }

switch (rank) {
    case "bronze":
        console.log("Bạn đang ở cấp bậc thấp nhất!");
        break;
    case "silver":
        console.log("Bạn đã có một số lợi ích!");
        break;
    case "gold":
        console.log("Bạn nhận được nhiều phần thưởng hơn!");
        break;
    case "diamond":
        console.log("Bạn thuộc top người chơi xuất sắc!");
        break;
    default:
          break;
}