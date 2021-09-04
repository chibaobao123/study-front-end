// REST PARAMS
let Tong = (...numbers:number[]) => {
    let tong:number = 0;
    for(var i = 0; i < numbers.length; i++){
        tong += numbers[i];
    }
    console.log(tong);
}
Tong(1,2,3,4);

//SPREAD OPERATOR
let mang1 = [1,2,3,4];
let mang2 = [4,5,6];
    // let mang3 = mang1.concat(mang2); 
let mang3 = [...mang1,...mang2];
console.log(mang3)

// TRUY XUẤT PHẦN TỬ MẢNG, OBJ
let date = [6,3,1999];
let [dd,mm,yy] = date;
let namsinh = dd + "-" + mm + "-" + yy;
console.log(namsinh);

let hocSinh = {
    ten: 'Bao',
    tuoi: 22,
    diem: 10,
}
let {ten, tuoi, diem} = hocSinh;
let info = 'tên: ' + ten + " tuổi: " + tuoi + " điểm: " + diem;
console.log(info);

// STRING TEMPLATE
let string = " bao bao ";
let hello = `tên tôi là ${string}`;
console.log(hello);

// for in & for of
let tenHocSinh:string[] = ['bao', 'banh', 'uyen', 'nghi']

for(let index in tenHocSinh){
    console.log(index);
}
for(let item of tenHocSinh){
    console.log(item);
}

//DUYỆT MẢNG
class nguoiDung {
    private ten:string;
    public taiKhoan:string; 
    public matKhau:string;
    constructor(ten:string, tk:string, mk:string){
        this.ten = ten;
        this.matKhau = mk;
        this.taiKhoan = tk;
    }
    public getTen(){
        return this.ten;
    }
    static say(){
        console.log("hello");
    }
}
let user = new nguoiDung('Bao', 'banh', 'banhxac');
console.log(user.getTen());
nguoiDung.say();

class nhanVien{
    public HoVaTen:string;
    public maNV:string;
    public luongCB:number;
    constructor(ten:string, manv:string, luongcb:number){
        this.HoVaTen = ten;
        this.maNV = manv;
        this.luongCB = luongcb;
    }
    public tinhLuong(){
        return this.luongCB;
    }
}

class truongPhong extends nhanVien{
    public hoaHong:number;
    constructor(ten:string, manv:string, luongcb:number, hoahong:number){
        super(ten,manv,luongcb);
        this.hoaHong = hoahong;
    }
    public tingLuong(){
        let luongcb:number = super.tinhLuong()
        return luongcb*2 + this.hoaHong;
    }
}

let truongPhongDichVu = new truongPhong('bao','nv123456',2000,500);
console.log(truongPhongDichVu.tingLuong());

// INTERFACE
interface NhanVien{
    HoVaTen:string;
    maNV:string;
    luongCB:number;
    hoaHong?:number;
}
class NhanVienThuong implements NhanVien{
    public HoVaTen:string;
    public maNV:string;
    public luongCB:number;
    constructor(ten:string, manv:string, Luongcb:number){
        this.HoVaTen = ten;
        this.maNV = manv;
        this.luongCB = Luongcb;
    }
    Luong(){
        return this.luongCB;
    }
}
let nghi = new NhanVienThuong('nghi', '1543nghi', 200000000000);
console.log(nghi);


// DOM VÀ SỰ KIỆN TRONG TYPESCRIPT
let btnEmail = <HTMLButtonElement>document.getElementById("getEmail");
btnEmail.addEventListener("click",function(){
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    console.log(email);

})