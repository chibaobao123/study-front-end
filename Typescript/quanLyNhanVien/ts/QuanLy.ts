import { NhanVien } from './NhanVien';

export class QuanLy extends NhanVien {
    TinhLuong(){
        this.tongLuong = this.luongCB * 4;
    }
}