import { GiamDoc } from './GiamDoc';
import { TroLyGiamDoc } from './TroLyGiamDoc';
import { NhanVien } from "./NhanVien";
import { QuanLy } from "./QuanLy";
import { DanhSachNhanVien } from './DanhSachNhanVien';


let DSNV = new DanhSachNhanVien();
function ThemNhanVien(){
    let maNV = (<HTMLInputElement>document.getElementById('txtMaNV')).value;
    let HoVaTen = (<HTMLInputElement>document.getElementById('txtHoVaTen')).value;
    let LuongCB:any = (<HTMLInputElement>document.getElementById('txtLuongCB')).value;
    LuongCB = parseFloat(LuongCB);
    let loainv = KiemTraNhanVien();
    if(loainv == null){
        alert("Vui lòng chọn loại nhân viên");
    }else{
        let NhanVienMoi:NhanVien;
        if (loainv == 'QuanLy'){
            NhanVienMoi = new QuanLy(maNV,HoVaTen,LuongCB);
        }
        else if (loainv == 'TroLyGiamDoc'){
            NhanVienMoi = new TroLyGiamDoc(maNV,HoVaTen,LuongCB);
        }
        else {
            NhanVienMoi = new GiamDoc(maNV,HoVaTen,LuongCB);
        }
        NhanVienMoi.TinhLuong();
        console.log(NhanVienMoi)
        DSNV.ThemNhanVien(NhanVienMoi);
        console.log(DSNV.MangNhanVien);
    }
}
let KiemTraNhanVien = () => {
    let mangLoaiNhanVien:any = document.getElementsByClassName('loainv');
    for(let i in mangLoaiNhanVien){
        if(mangLoaiNhanVien[i].checked){
            return mangLoaiNhanVien[i].value;
        }
    }
    return null;
}
let TaoBang = () => {
    let content = '';
    for(let nhanVien of DSNV.MangNhanVien){
        let {maNV,hoVaTen,luongCB,tongLuong} = nhanVien;
        content += `
            <tr>
                <td>${maNV}</td>
                <td>${hoVaTen}</td>
                <td>${luongCB}</td>
                <td>${tongLuong}</td>
            </tr>
        `
    }
    document.getElementById('tbodyNhanVien').innerHTML = content;
}