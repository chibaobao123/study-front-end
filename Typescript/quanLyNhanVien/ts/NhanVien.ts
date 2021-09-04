export class NhanVien{
    public maNV: string;
    public hoVaTen: string;
    public luongCB: number;
    public tongLuong: number;
    constructor(maNV: string, hoVaTen: string, luongCB: number){
        this.maNV = maNV;
        this.hoVaTen = hoVaTen;
        this.luongCB = luongCB;
    }
    TinhLuong(){
        this.tongLuong = this.luongCB;
    }
}