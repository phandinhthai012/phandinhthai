var arrLichKham = [];
function checkname(){
    var mabenhnhan = document.getElementById('mabenhNhan').value;
    var matkhau = document.getElementById('matKhau').value;
    var ngaykham = document.getElementById('ngayKham').value;
    
    errorMa = document.getElementById('errorMa');
    errorMK = document.getElementById('errorMK');
    errorDate = document.getElementById('errorDate');
    var regexMa =/^BN-\w{5}/g;
    var matk = /[\w\d]{6,}/g;
    if(mabenhnhan == "" || mabenhnhan==null){
        errorMa.innerHTML= "(*)không được để trống";
    }
    else if(!regexMa.test(mabenhnhan)){
        errorMa.innerHTML= "(*)BN-YYYYY";
        return false;
    }
    else {
        errorMa.innerHTML= "";
    }
    if(matkhau =="" || matkhau ==null){
        errorMK.innerHTML= "(*)không được để trống";
    }
    else if(!matk.test(matkhau)){
        errorMK.innerHTML= "chứa từ 6 ký tự bất kỳ trở lên";
        return false;
    }
    else {
        errorMK.innerHTML= "";
    }
    ngaykham = new Date(ngaykham);
    var x = new Date();
    var day = x.getDate();
    var month = x.getMonth()+1;
    var year = x.getFullYear();
    if(ngaykham.getFullYear()>year){
        errorDate.innerHTML= "Ngày khám phải sau ngày hiện tại";
        return false;
    }
    else if(ngaykham.getFullYear()<year){
        errorDate.innerHTML= "";
    }
    else if(ngaykham.getMonth()+1<month){
        errorDate.innerHTML= "";
    }
    else if(ngaykham.getMonth()+1>month){
        errorDate.innerHTML= "Ngày khám phải sau ngày hiện tại";
        return false;
    }
    else if(ngaykham.getDate()>day){
        errorDate.innerHTML= "Ngày khám phải sau ngày hiện tại";
        return false;
    }
    else if(ngaykham.getDate()<=day && ngaykham.getMonth()+1==month){
        errorDate.innerHTML= "";
    } 
    return true;
}
function getInfo() {
    // lấy các giá trị tròng form
    if(checkname()){
        var mabenhnhan = document.getElementById('mabenhNhan').value;
        var matkhau = document.getElementById('matKhau').value;
        var ngaykham = document.getElementById('ngayKham').value;
        var loaidichvu = document.getElementsByName('dichVu');
        dichvu = getdichvuCheckBox(loaidichvu);
        var chuyenkhoa = document.getElementById('chuyenKhoa').value;
        console.log(chuyenkhoa);
        // tạo object
        var ojbLichKham = {
            mabenhnhan : mabenhnhan,
            matkhau : matkhau,
            ngaykham : ngaykham,
            dichvu : dichvu,
            chuyenkhoa : chuyenkhoa
        }
    
        // đưa object vao mảng
        arrLichKham.push(ojbLichKham);
         // xóa form
        document.getElementById('mabenhNhan').value="";
        document.getElementById('matKhau').value="";
        document.getElementById('ngayKham').value="";
        document.getElementById('ngayKham').value='';
        // in ds ra table
        inLichKham();
        //  let trnew = "<tr><td>"+0+"/td><td>"+ojbLichKham.mabenhnhan+"</td><td>"+ojbLichKham.matkhau+"</td><td>"+ojbLichKham.ngaykham+"</td><td>"+ojbLichKham.dichvu+"</td><td>"+ojbLichKham.chuyenkhoa+"</td></tr>";
        // let x = `<tr>
        //             <td>${0}</td>
        //             <td>${ojbLichKham.mabenhnhan}</td>
        //             <td>${ojbLichKham.matkhau}</td>
        //             <td>${ojbLichKham.ngaykham}</td>
        //             <td>${ojbLichKham.dichvu}</td>
        //             <td>${ojbLichKham.chuyenkhoa}</td>
        //         </tr>`;
        // // $('#mytable').append(trnew);
        // document.getElementById('mytable').innerHTML += x;
        // document.getElementById('mytable').append(trnew);
    }
   
   
    
};


// function getdichvuRadioButton(loaidichvu){
//     var dichVu = '';
//     for(i=0; i<loaidichvu.length; i++){
//     if(loaidichvu[i].checked==true){
//         dichVu = loaidichvu[i].value;
//         }
//     }
//    console.log(dichVu);
// }

function getdichvuCheckBox(loaidichvu){
    dichVu =0;
    for(i=0; i<loaidichvu.length; i++){
    if(loaidichvu[i].checked==true){
        dichVu +=  parseFloat(loaidichvu[i].value);
        }
    }
    return dichVu;
}
// function inLichKham(ojbLichKham){
//     var table = document.getElementById('tablebody');
//     var htmls =(function(ojbLichKham){
//         return `
//             <tr>
//                 <td>##</td> 
//                 <td>${ojbLichKham.mabenhnhan}</td>
//                 <td>${ojbLichKham.matkhau}</td>
//                 <td>${ojbLichKham.date}</td>
//                 <td>1000000000</td>
//                 <td>${ojbLichKham.chuyenkhoa}</td>
//             </tr>
//         `;
//     });
//     table.innerHTML =htmls;
// }

function inLichKham(){


    var table = document.getElementById("mytable");

    //xoa du liệu
    for(var i =table.rows.length-1; i> 0; i--){
        table.deleteRow(i);
    }    

    for( var i =0; i< arrLichKham.length; i++){
        var obj = arrLichKham[i];

        //  tạo row mới
        var row = table.insertRow();

        //tạo các cell cho row
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        // teh dư lieuj cho cell
        cell1.innerHTML = i+1;
        cell2.innerHTML = obj.mabenhnhan;
        cell3.innerHTML = obj.matkhau;
        cell4.innerHTML = obj.ngaykham;
        cell5.innerHTML = obj.dichvu;
        cell6.innerHTML = obj.chuyenkhoa;
    }
}
