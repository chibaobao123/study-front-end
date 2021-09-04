"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhSachNhanVien = void 0;
var DanhSachNhanVien = /** @class */ (function () {
    function DanhSachNhanVien() {
        this.MangNhanVien = [];
    }
    DanhSachNhanVien.prototype.ThemNhanVien = function (nhanVien) {
        this.MangNhanVien.push(nhanVien);
    };
    return DanhSachNhanVien;
}());
exports.DanhSachNhanVien = DanhSachNhanVien;
