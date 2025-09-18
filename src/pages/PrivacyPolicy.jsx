const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-green-900 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Chính sách bảo mật</h1>
        <p className="text-base sm:text-lg">
          Chúng tôi tôn trọng và bảo vệ thông tin cá nhân mà khách hàng cung cấp khi
          đăng ký nhận tư vấn dự án Conic Boulevard. Chính sách này mô tả chi tiết
          loại dữ liệu chúng tôi thu thập, mục đích sử dụng và các biện pháp bảo mật
          tương ứng.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">1. Thông tin thu thập</h2>
        <p className="text-base sm:text-lg">
          Khi bạn điền biểu mẫu đăng ký, chúng tôi thu thập các thông tin cần thiết để
          liên hệ gồm: <strong>Họ và tên</strong> và <strong>Số điện thoại</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">2. Mục đích sử dụng</h2>
        <p className="text-base sm:text-lg">
          Thông tin được sử dụng duy nhất cho mục đích <strong>liên hệ tư vấn</strong>,
          cung cấp báo giá, thông tin khuyến mãi và hỗ trợ chọn sản phẩm phù hợp tại dự
          án Conic Boulevard. Chúng tôi không bán, trao đổi hoặc chia sẻ dữ liệu này
          cho bên thứ ba không liên quan.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">3. Lưu trữ &amp; bảo mật</h2>
        <p className="text-base sm:text-lg">
          Dữ liệu đăng ký được lưu trữ trên hệ thống quản lý khách hàng nội bộ với các
          biện pháp bảo vệ bằng mật khẩu, phân quyền truy cập và mã hóa kết nối khi
          truyền tải. Chỉ những nhân sự được ủy quyền mới có quyền xem và xử lý thông
          tin, nhằm ngăn ngừa truy cập trái phép, tiết lộ hoặc sử dụng sai mục đích.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">4. Quyền của khách hàng</h2>
        <p className="text-base sm:text-lg">
          Bạn có quyền yêu cầu cập nhật hoặc xóa thông tin bất cứ lúc nào. Khi nhận
          được yêu cầu hợp lệ, chúng tôi sẽ xử lý trong thời gian sớm nhất.
        </p>
        <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-base sm:text-lg">
          <p>
            Liên hệ qua số <a className="text-green-700 font-semibold hover:underline" href="tel:0941841024">0941 841 024</a>
            {' '}hoặc email <a className="text-green-700 font-semibold hover:underline" href="mailto:cuongcoach.vn2025@gmail.com">cuongcoach.vn2025@gmail.com</a>
            {' '}để được hỗ trợ chỉnh sửa hoặc xóa dữ liệu.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;