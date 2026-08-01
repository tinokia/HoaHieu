//============================
// TÌM KIẾM
//============================

function timKiem() {

    let input = document.getElementById("search");

    if (!input) return;

    let key = input.value.toLowerCase();

    let items = document.querySelectorAll(".item");

    items.forEach(function(item){

        let text = item.innerText.toLowerCase();

        if(text.indexOf(key) > -1){

            item.style.display="block";

        }else{

            item.style.display="none";

        }

    });

}



//============================
// ĐỌC BÀI
//============================

function docBai(loai,id){

    localStorage.setItem("loai",loai);

    localStorage.setItem("id",id);

    window.location.assign("data/doc.html");

}



//============================
// THỐNG KÊ
//============================

function thongKe(){

    if(document.getElementById("tongTatCa"))
        document.getElementById("tongTatCa").innerHTML=
        tho.length+danhngon.length+lien.length+kinhphapcu.length;
}



//============================
// NÚT LÊN ĐẦU
//============================

window.onscroll=function(){

    let nut=document.getElementById("top");

    if(!nut) return;

    if(document.body.scrollTop>300 ||

       document.documentElement.scrollTop>300){

        nut.style.display="block";

    }else{

        nut.style.display="none";

    }
}

function lenDau(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
function timKiemToanBo(){

    let key=document.getElementById("searchAll").value.toLowerCase();

    let html="";

    kinhphapcu.forEach(function(item){
        if(item.tieude.toLowerCase().includes(key)){
            html+=`<div class="item">
            <a href="#" onclick="docBai('kinhphapcu',${item.id})">${item.tieude}</a>
            </div>`;
        }
    });

    document.getElementById("ketQuaTim").innerHTML=html;

}



//============================
// KHỞI ĐỘNG
//============================

window.onload=function(){

    thongKe();

    baiMoi();

}