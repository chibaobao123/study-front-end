"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GiamDoc_1 = require("./GiamDoc");
var TroLyGiamDoc_1 = require("./TroLyGiamDoc");
var QuanLy_1 = require("./QuanLy");
var DanhSachNhanVien_1 = require("./DanhSachNhanVien");
var DSNV = new DanhSachNhanVien_1.DanhSachNhanVien();
function ThemNhanVien() {
    var maNV = document.getElementById('txtMaNV').value;
    var HoVaTen = document.getElementById('txtHoVaTen').value;
    var LuongCB = document.getElementById('txtLuongCB').value;
    LuongCB = parseFloat(LuongCB);
    var loainv = KiemTraNhanVien();
    if (loainv == null) {
        alert("Vui lòng chọn loại nhân viên");
    }
    else {
        var NhanVienMoi = void 0;
        if (loainv == 'QuanLy') {
            NhanVienMoi = new QuanLy_1.QuanLy(maNV, HoVaTen, LuongCB);
        }
        else if (loainv == 'TroLyGiamDoc') {
            NhanVienMoi = new TroLyGiamDoc_1.TroLyGiamDoc(maNV, HoVaTen, LuongCB);
        }
        else {
            NhanVienMoi = new GiamDoc_1.GiamDoc(maNV, HoVaTen, LuongCB);
        }
        NhanVienMoi.TinhLuong();
        console.log(NhanVienMoi);
        DSNV.ThemNhanVien(NhanVienMoi);
        console.log(DSNV.MangNhanVien);
    }
}
var KiemTraNhanVien = function () {
    var mangLoaiNhanVien = document.getElementsByClassName('loainv');
    for (var i in mangLoaiNhanVien) {
        if (mangLoaiNhanVien[i].checked) {
            return mangLoaiNhanVien[i].value;
        }
    }
    return null;
};
var TaoBang = function () {
    var content = '';
    for (var _i = 0, _a = DSNV.MangNhanVien; _i < _a.length; _i++) {
        var nhanVien = _a[_i];
        var maNV = nhanVien.maNV, hoVaTen = nhanVien.hoVaTen, luongCB = nhanVien.luongCB, tongLuong = nhanVien.tongLuong;
        content += "\n            <tr>\n                <td>" + maNV + "</td>\n                <td>" + hoVaTen + "</td>\n                <td>" + luongCB + "</td>\n                <td>" + tongLuong + "</td>\n            </tr>\n        ";
    }
    document.getElementById('tbodyNhanVien').innerHTML = content;
};
