import { NhanVien } from "./NhanVien";

export class DanhSachNhanVien {
    public MangNhanVien:Array<NhanVien> = [];
    public ThemNhanVien(nhanVien){
        this.MangNhanVien.push(nhanVien);
    }
}