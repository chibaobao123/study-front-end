import { NhanVien } from './NhanVien';

export class TroLyGiamDoc extends NhanVien{
    TinhLuong(){
        this.tongLuong = this.luongCB * 3;
    }
}