# REST API
## Definition
- Mô hình Client and Server. Client request to Server and Server response to Client
![](https://media.licdn.com/dms/image/v2/D5612AQF48QPidIOsmg/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1725203941747?e=1747267200&v=beta&t=TAZ9Nmx3ymBGQuwrJmvE0nxXDbDZuW6EegqLEq0lJ-4)

## Request: Method
- Phương thức định nghĩa các giao thức HTTP để chỉ ra hành động mà client muốn gửi tới Server
### GET
- GET được sử dụng để request dữ liệu từ một server chỉ định
### POST
- POST được sử dụng để gửi dữ liệu tới server để thêm mới một tài nguyên
### PUT
- PUT (UPDATE): Lệnh để cập nhật thông tin Resource. (toàn bộ)
### PATCH
- PATCH (UPDATE): Lệnh để cập nhật 1 phần thông tin Resource.
### DELETE:
- DELETE (DELETE): Lệnh để xoá một Resource.
### HEAD:
- HEAD: Lấy metadata của resource
### OPTIONs:
- OPTIONS: Lấy thông tin về method

## Request: URL
- Đường dẫn tới resource
- URL bao gồm: scheme, domain, path, query, fragment

### Scheme
- HTTP: không bảo mật
- HTTPS: HTTP + SSL - Có bảo mật

### Domain: 
- Subdomain: phần đứng trước tên miền (ex: www)

### PATH: 
- Đường dẫn tới dữ liệu con trong resource, đứng trước domain, theo
sau bởi dấu /
Ex: example.com

### query:
- Các thông tin bổ sung cho dữ liệu, có định dạng key=value
- Query đầu tiên: theo sau bởi dấu ?
- Từ query thứ hai: theo sau bởi dấu &

### fragment: 
- Một vị trí neo trên trang web. Ví dụ ta muốn di chuyển tới đúng vị trí nào đó thì ta gõ nội dung của nó vô phần fragment, khi call URL thì nó di chuyển tới đúng vị trí đó

## Request: Header
- Là dữ liệu đi đầu trong mỗi request
- Là các cặp key-value trong request HTTP để truyền tải thông tin bổ sung giữa client và server.
### Các nhóm header:
- Authorization headers: Chuyên cho việc xác thực, gồm nhiều loại xác thực như Bearer, Basic, OAuth...

![alt text](<Screenshot 2025-03-15 at 22.32.26.png>)

- Content Headers: khai báo kiểu dữ liệu mà client gửi lên
![alt text](<Screenshot 2025-03-15 at 22.37.06.png>)

- Caching headers: liên quan đến bộ nhớ đệm (cache)

![alt text](<Screenshot 2025-03-15 at 22.32.26-1.png>)

- Security headers: liên quan đến bảo mật
1. HTTP Strict Transport Security (HSTS)
- Nếu một trang web được trang bị HSTS, sever sẽ buộc trình duyệt giao tiếp qua HTTPS (HTTP Secure), đảm bảo tất cả thông tin từ trình duyệt được gửi qua HTTPS

![](https://images.viblo.asia/6e16a3f8-479e-4f79-8757-b1de7081b7d4.png)

2. Content Security Policy (CSP)
- Kiểm soát website bằng cách hạn chế tài nguyên mà người dùng được phép tải trong website
Ex: Content-Security-Policy: script-src 'self' https://viblo.asia
===> CSP này chỉ cho phép tải mọi thứ qua domain hiện tại hoặc qua https://viblo.asia.

3. Cross Site Scripting Protection (X-XSS)
