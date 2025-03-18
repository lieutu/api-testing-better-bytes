/* �� Yêu cầu: 
Tạo biến chứa loại gói (free, premium, family, student), in ra quyền lợi của gói đó. Better Bytes Academy 
�� Kết quả mong muốn: 
● "free" → "Bạn có thể nghe nhạc nhưng có quảng cáo." 
● "premium" → "Không quảng cáo, nghe nhạc offline!" 
● "family" → "Gói dùng cho nhiều thành viên!" 
● "student" → "Ưu đãi dành riêng cho sinh viên!" */

let package = "student";
let benefit = "";

if (package === "free") {
    benefit = "Bạn có thể nghe nhạc nhưng có quảng cáo.";
    } else if (package === "premium") {
    benefit = "Không quảng cáo, nghe nhạc offline!";
    }
    else if (package === "family") {
    benefit = "Gói dùng cho nhiều thành viên!";
    }
    else if (package === "student") {
    benefit = "Ưu đãi dành riêng cho sinh viên!";
    }
    else {
    benefit = "Không có gói này!";
    }
console.log(benefit);

switch (package) {
  case "free":
    benefit = "Bạn có thể nghe nhạc nhưng có quảng cáo.";
    break;
    case "premium":
    benefit = "Không quảng cáo, nghe nhạc offline!";
    break;
    case "family":
    benefit = "Gói dùng cho nhiều thành viên!";
    break;
    case "student":
    benefit = "Ưu đãi dành riêng cho sinh viên!";
    break;
    default:
    benefit = "Không có gói này!";
}
console.log(benefit);

