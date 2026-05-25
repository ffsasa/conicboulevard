# Conic Boulevard Landing Page

Website giới thiệu dự án **Conic Boulevard** được xây dựng bằng **React + Vite + Tailwind CSS**.

## Mục tiêu dự án

Dự án tập trung vào trải nghiệm landing page cho bất động sản, bao gồm:

Giới thiệu tổng quan dự án, vị trí, tiện ích, tiến độ.
- Trình bày bảng giá theo từng loại căn hộ.
- Trưng bày hình ảnh thực tế và video theo từng mẫu căn.
- Thu thập thông tin khách hàng qua form đăng ký tư vấn.
- Cung cấp trang chính sách bảo mật.

## Công nghệ sử dụng

- **React 19**
- **Vite 6**
- **Tailwind CSS 3**
- **React Router DOM 7**
- **Axios** (gửi dữ liệu form tư vấn)
- **Swiper** (carousel hình ảnh)

## Cấu trúc chính

```text
src/
├─ components/          # Các thành phần UI (Hero, Navbar, form, carousel...)
├─ layouts/             # Layout tổng
├─ pages/               # Các trang (Home, PrivacyPolicy)
├─ service/             # Tầng gọi API
├─ App.jsx              # Khai báo routing
└─ main.jsx             # Điểm khởi chạy ứng dụng
```

## Chức năng nổi bật

- **Đa section theo nội dung dự án**: tổng quan, vị trí, tiện ích, bảng giá, thư viện media.
- **Image + video showcase**: hỗ trợ nhiều bộ ảnh theo từng layout căn hộ.
- **Form đăng ký tư vấn**: gửi dữ liệu về API backend.
- **Routing cơ bản**:
  - `/`: Trang chủ
  - `/privacy-policy`: Trang chính sách bảo mật

## Yêu cầu môi trường

- **Node.js**: khuyến nghị từ `18+`
- **npm**: khuyến nghị từ `9+`

## Cài đặt và chạy local

```bash
npm install
npm run dev
```

Sau khi chạy, mở địa chỉ Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

## Scripts có sẵn

- `npm run dev`: chạy môi trường development.
- `npm run build`: build production vào thư mục `dist/`.
- `npm run preview`: chạy thử bản build production local.
- `npm run lint`: kiểm tra coding style bằng ESLint.

## Tích hợp API tư vấn

Service gửi form đang cấu hình tại:

- `src/service/consultationApi.js`
- Base URL hiện tại: `https://api.conicboulevard.info/api`
- Endpoint gửi dữ liệu: `POST /consultation`

> Nếu thay đổi backend, hãy cập nhật lại base URL trong file service.

## Asset tĩnh

Toàn bộ ảnh minh họa/ảnh dự án được đặt trong thư mục `public/`, tổ chức theo từng nhóm (ví dụ: `maua`, `maub`, `mauc`, `maud`).

## Triển khai

Repo có file `vercel.json`, phù hợp để triển khai nhanh trên Vercel.
