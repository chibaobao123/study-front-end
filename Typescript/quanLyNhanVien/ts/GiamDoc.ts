import {NhanVien} from "./NhanVien";

export class GiamDoc extends NhanVien{
    TinhLuong(){
        this.tongLuong = this.luongCB * 2;
    }
}