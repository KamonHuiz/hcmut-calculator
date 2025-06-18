function calculateScore() {
    // Lấy giá trị từ các ô nhập
    const dgnlVan = parseFloat(document.getElementById('dgnl-van').value) || 0;
    const dgnlToan = parseFloat(document.getElementById('dgnl-toan').value) || 0;
    const dgnlAnh = parseFloat(document.getElementById('dgnl-anh').value) || 0;
    const dgnlKhoaHoc = parseFloat(document.getElementById('dgnl-khoa-hoc').value) || 0;

    const thptToan = parseFloat(document.getElementById('thpt-toan').value) || 0;
    const thptLy = parseFloat(document.getElementById('thpt-ly').value) || 0;
    let thptAnhHoa = parseFloat(document.getElementById('thpt-anh-hoa').value) || 0;

    const hbToan10 = parseFloat(document.getElementById('hb-toan-10').value) || 0;
    const hbToan11 = parseFloat(document.getElementById('hb-toan-11').value) || 0;
    const hbToan12 = parseFloat(document.getElementById('hb-toan-12').value) || 0;
    const hbLy10 = parseFloat(document.getElementById('hb-ly-10').value) || 0;
    const hbLy11 = parseFloat(document.getElementById('hb-ly-11').value) || 0;
    const hbLy12 = parseFloat(document.getElementById('hb-ly-12').value) || 0;
    let hbAnhHoa10 = parseFloat(document.getElementById('hb-anh-hoa-10').value) || 0;
    let hbAnhHoa11 = parseFloat(document.getElementById('hb-anh-hoa-11').value) || 0;
    let hbAnhHoa12 = parseFloat(document.getElementById('hb-anh-hoa-12').value) || 0;

    const diemCong = parseFloat(document.getElementById('diem-cong').value) || 0;

    const hasIelts = document.getElementById('ielts').checked;

    // Xử lý IELTS
    if (hasIelts) {
        thptAnhHoa = 10;
        hbAnhHoa10 = 10;
        hbAnhHoa11 = 10;
        hbAnhHoa12 = 10;
        document.getElementById('thpt-anh-hoa').value = 10;
        document.getElementById('hb-anh-hoa-10').value = 10;
        document.getElementById('hb-anh-hoa-11').value = 10;
        document.getElementById('hb-anh-hoa-12').value = 10;
    }

    // Tính điểm ĐGNL
    const dgnlTotal = dgnlVan + (dgnlToan * 2) + dgnlAnh + dgnlKhoaHoc; // Thang 1500
    const dgnl1200 = dgnlVan + dgnlToan + dgnlAnh + dgnlKhoaHoc; // Thang 1200
    document.getElementById('dgnl-total').textContent = dgnlTotal;
    document.getElementById('dgnl-1200').textContent = dgnl1200;

    // Tính điểm THPTQG (thang 30)
    const thptTotal = thptToan + thptLy + thptAnhHoa;
    document.getElementById('thpt-total').textContent = thptTotal;

    // Tính điểm Học Bạ (thang 90)
    const hbTotal = hbToan10 + hbToan11 + hbToan12 + hbLy10 + hbLy11 + hbLy12 + hbAnhHoa10 + hbAnhHoa11 + hbAnhHoa12;
    document.getElementById('hb-total').textContent = hbTotal;

    // Tính điểm tổng hợp ban đầu
    let finalScore = ((dgnlTotal / 15) * 0.7) + ((thptTotal / 3) * 10 * 0.2) + ((hbTotal / 9) * 10 * 0.1);

    // Xử lý điểm cộng
    let adjustedDiemCong = diemCong;
    if (finalScore + diemCong > 100) {
        adjustedDiemCong = 100 - finalScore;
    }
    finalScore += adjustedDiemCong;

    // Hiển thị điểm cộng sau công thức
    document.getElementById('adjusted-diem-cong').textContent = adjustedDiemCong.toFixed(2);

    // Hiển thị kết quả với animation
    const finalScoreElement = document.getElementById('final-score');
    finalScoreElement.textContent = finalScore.toFixed(2);
    finalScoreElement.classList.remove('active');
    setTimeout(() => {
        finalScoreElement.classList.add('active');
    }, 10);
}