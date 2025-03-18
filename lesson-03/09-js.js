/* 9. Xếp hạng thành viên theo điểm số 
Tạo file: 09-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chứa số điểm (0 - 100), chương trình hiển thị xếp hạng (newbie, intermediate, pro, legend). 
�� Kết quả mong muốn: 
● score < 40 → "Xếp hạng: Newbie" 
● score >= 40 && score < 70 → "Xếp hạng: Intermediate" 
● score >= 70 && score < 90 → "Xếp hạng: Pro" 
● Mặc định →"Xếp hạng: Legend"  */

let score = 10;
if (score < 40) {
  console.log("Xếp hạng: Newbie");
}
else if (score >= 40 && score < 70) {
    console.log("Xếp hạng: Intermediate");
    }
else if (score >= 70 && score < 90) {
    console.log("Xếp hạng: Pro");
    }
else {
    console.log("Xếp hạng: Legend");
    }

switch (true) {
        case score < 40:
            console.log("Xếp hạng: Newbie");
            break;
        case score >= 40 && score < 70:
            console.log("Xếp hạng: Intermediate");
            break;
        case score >= 70 && score < 90:
            console.log("Xếp hạng: Pro");
            break;
        default:
            console.log("Xếp hạng: Legend");
            break;
    }