/* Bài tập câu điều kiện 
Với các bài tập của câu điều kiện, hãy làm theo cả 2 cách: 
● Sử dụng if…else 
● Sử dụng switch…case 
�� 1. Dự đoán kết quả trận bóng đá 
Tạo file: 01-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Khai báo biến result chứa một trong các giá trị (win, draw, lose). In ra thông báo tương ứng với từng loại kết quả. 
�� Kết quả mong muốn: 
● "win" → "Chúc mừng! Đội của bạn đã chiến thắng!" 
● "draw" → "Trận đấu hòa, thật đáng tiếc!" 
● "lose" → "Thua rồi, nhưng đừng bỏ cuộc!"  */

let result = 'win'; 
if (result === 'win') {
    console.log('Chúc mừng! Đội của bạn đã chiến thắng!');
}else if (result === 'draw') {
    console.log('Trận đấu hòa, thật đáng tiếc!');
}else if (result === 'lose') {
    console.log('hua rồi, nhưng đừng bỏ cuộc!');
}

switch(result) {
    case 'win':
        console.log('Chúc mừng! Đội của bạn đã chiến thắng!');
        break;
    case 'draw':
        console.log('Trận đấu hòa, thật đáng tiếc!');
        break;
    case 'lose':
        console.log('Thua rồi, nhưng đừng bỏ cuộc!');
        break;
    default:
        console.log('Mời bạn nhập lại!');
        break;
}