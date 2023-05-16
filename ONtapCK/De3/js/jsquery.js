function kTraSerial(){
    var sosr = document.getElementById('txtSerial').value;
    var regex = /[A-Z_0-9]{6,}/;
    var er1 = document.getElementById('er1');
    if(sosr=="" || sosr==null){
        er1.innerHTML =" không được để rỗng"
        return false;
    }
    else if(regex.test(sosr)){
        er1.innerHTML ="";
    }
    else {
        er1.innerHTML ="Số serial có thể gồm các ký tự chữ cái hoa, dấu _ và các ký số; chiều dài ít nhất là 6"
        return false;
    }
}
$('#txtSerial').blur(function(e){
    kTraSerial();
});
function kmota(){
    var kh = document.getElementById('txtKienHang').value;
    var regex = /[A-Z_0-9]{6,}/;
    var er2 = document.getElementById('er2');
    if(kh=="" || kh==null){
        er2.innerHTML =" không được để rỗng"
        return false;
    }
    else{
        er2.innerHTML ="";
    }
   
}
$('#txtKienHang').blur(function(e){
   kmota();
});

function ktTrongLuong(){
    var tl = document.getElementById('txttrongluong').value;
    var regex = /[A-Z_0-9]{6,}/;
    var er3 = document.getElementById('er3');
    if(tl=="" || tl==null){
        er3.innerHTML =" không được để rỗng"
        return false;
    }
    else if(tl<=0){
        er3.innerHTML ="Trọng lượng là số > 0";
        return false;
    }
    else{
        er3.innerHTML =" ";
    }
   
}
$('#txttrongluong').blur(function(e){
   ktTrongLuong();
});
function tinhPhi(){
    var tl = document.getElementById('txttrongluong').value;
    var x;
    if(tl<=20){
        x=35000*tl;
    }
    else if(tl<=50){
        x=30000*tl;
    }
    else {
        x=15000*tl;
    }
    return x;
}
function getGiaTien(){
    var tl = document.getElementById('txttrongluong').value;
    var x = tinhPhi();
    document.getElementById('txtGia').value=x;
}
$('#txttrongluong').change(function(e){
    getGiaTien()
  });


function updatefilename(){
    var input = document.querySelector('#img');
    var filename = input.files[0].name;
    return filename;
}

count=1;
function dk(){
    var sosr = document.getElementById('txtSerial').value;
    var kh = document.getElementById('txtKienHang').value;
    var tl = document.getElementById('txttrongluong').value;
    var phivanchuyen = tinhPhi();
    var filename=updatefilename();

    var table = document.getElementById('tble');
    var r = table.insertRow();
    var cel1 = r.insertCell(0);
    var cel2 = r.insertCell(1);
    var cel3 = r.insertCell(2);
    var cel4 = r.insertCell(3);
    var cel5 = r.insertCell(4);
    var cel6 = r.insertCell(5);
    cel1.innerHTML=count;
    cel2.innerHTML=sosr;
    cel3.innerHTML=kh;
    cel4.innerHTML=filename;
    cel5.innerHTML=tl;
    cel6.innerHTML=phivanchuyen;
    count++;
    document.getElementById('txtSerial').value="";
    document.getElementById('txtKienHang').value="";
    document.getElementById('txttrongluong').value="";
    document.getElementById('txtGia').value="";
    document.querySelector('#img').value='';
   
}
