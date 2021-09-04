"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
var NhanVien = /** @class */ (function () {
    function NhanVien(maNV, hoVaTen, luongCB) {
        this.maNV = maNV;
        this.hoVaTen = hoVaTen;
        this.luongCB = luongCB;
    }
    NhanVien.prototype.TinhLuong = function () {
        this.tongLuong = this.luongCB;
    };
    return NhanVien;
}());
exports.NhanVien = NhanVien;
