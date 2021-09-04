"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// REST PARAMS
var Tong = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var tong = 0;
    for (var i = 0; i < numbers.length; i++) {
        tong += numbers[i];
    }
    console.log(tong);
};
Tong(1, 2, 3, 4);
//SPREAD OPERATOR
var mang1 = [1, 2, 3, 4];
var mang2 = [4, 5, 6];
// let mang3 = mang1.concat(mang2); 
var mang3 = __spreadArray(__spreadArray([], mang1), mang2);
console.log(mang3);
// TRUY XUẤT PHẦN TỬ MẢNG, OBJ
var date = [6, 3, 1999];
var dd = date[0], mm = date[1], yy = date[2];
var namsinh = dd + "-" + mm + "-" + yy;
console.log(namsinh);
var hocSinh = {
    ten: 'Bao',
    tuoi: 22,
    diem: 10,
};
var ten = hocSinh.ten, tuoi = hocSinh.tuoi, diem = hocSinh.diem;
var info = 'tên: ' + ten + " tuổi: " + tuoi + " điểm: " + diem;
console.log(info);
// STRING TEMPLATE
var string = " bao bao ";
var hello = "t\u00EAn t\u00F4i l\u00E0 " + string;
console.log(hello);
// for in & for of
var tenHocSinh = ['bao', 'banh', 'uyen', 'nghi'];
for (var index in tenHocSinh) {
    console.log(index);
}
for (var _i = 0, tenHocSinh_1 = tenHocSinh; _i < tenHocSinh_1.length; _i++) {
    var item = tenHocSinh_1[_i];
    console.log(item);
}
//DUYỆT MẢNG
var nguoiDung = /** @class */ (function () {
    function nguoiDung(ten, tk, mk) {
        this.ten = ten;
        this.matKhau = mk;
        this.taiKhoan = tk;
    }
    nguoiDung.prototype.getTen = function () {
        return this.ten;
    };
    nguoiDung.say = function () {
        console.log("hello");
    };
    return nguoiDung;
}());
var user = new nguoiDung('Bao', 'banh', 'banhxac');
console.log(user.getTen());
nguoiDung.say();
var nhanVien = /** @class */ (function () {
    function nhanVien(ten, manv, luongcb) {
        this.HoVaTen = ten;
        this.maNV = manv;
        this.luongCB = luongcb;
    }
    nhanVien.prototype.tinhLuong = function () {
        return this.luongCB;
    };
    return nhanVien;
}());
var truongPhong = /** @class */ (function (_super) {
    __extends(truongPhong, _super);
    function truongPhong(ten, manv, luongcb, hoahong) {
        var _this = _super.call(this, ten, manv, luongcb) || this;
        _this.hoaHong = hoahong;
        return _this;
    }
    truongPhong.prototype.tingLuong = function () {
        var luongcb = _super.prototype.tinhLuong.call(this);
        return luongcb * 2 + this.hoaHong;
    };
    return truongPhong;
}(nhanVien));
var truongPhongDichVu = new truongPhong('bao', 'nv123456', 2000, 500);
console.log(truongPhongDichVu.tingLuong());
var NhanVienThuong = /** @class */ (function () {
    function NhanVienThuong(ten, manv, Luongcb) {
        this.HoVaTen = ten;
        this.maNV = manv;
        this.luongCB = Luongcb;
    }
    NhanVienThuong.prototype.Luong = function () {
        return this.luongCB;
    };
    return NhanVienThuong;
}());
var nghi = new NhanVienThuong('nghi', '1543nghi', 200000000000);
console.log(nghi);
// DOM VÀ SỰ KIỆN TRONG TYPESCRIPT
var btnEmail = document.getElementById("getEmail");
btnEmail.addEventListener("click", function () {
    var email = document.getElementById("email").value;
    console.log(email);
});
