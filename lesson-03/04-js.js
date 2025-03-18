/* �� 4. Tính giảm giá theo sự kiện mua sắm 
Tạo file: 04-js.js, thêm vào code cho yêu cầu sau: 
�� Yêu cầu: 
Tạo biến chứa tên ngày (blackfriday, cybermonday, christmas), chương trình hiển thị mức giảm giá tương ứng. 
6 https://academy.betterbytesvn.com
Better Bytes Academy 
Học Kĩ - Hiểu Bản Chất - Mentor Tận Tình 
�� Kết quả mong muốn: 
● "blackfriday" → "Giảm 50% toàn bộ sản phẩm!" 
● "cybermonday" → "Giảm 40% cho sản phẩm công nghệ!" 
● "christmas" → "Ưu đãi đặc biệt mùa Noel - giảm 30%!"  */

let day = "blackfriday";
let discount = "";
switch (day) {
  case "blackfriday":
    discount = "Giảm 50% toàn bộ sản phẩm!";
    break;
  case "cybermonday":
    discount = "Giảm 40% cho sản phẩm công nghệ!";
    break;
  case "christmas":
    discount = "Ưu đãi đặc biệt mùa Noel - giảm 30%!";
    break;
  default:
    discount = "Không có chương trình khuyến mãi!";
}
console.log(discount);

switch (day) {
    case "blackfriday":
        console.log("Giảm 50% toàn bộ sản phẩm!");
        break;
    case "cybermonday":
        console.log("Giảm 40% cho sản phẩm công nghệ!");
        break;
    case "christmas":
        console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
        break;
    default:
        console.log("Không có chương trình khuyến mãi!");
    }
console.log(discount);