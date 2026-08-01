/*=========================================
THƠ - TRUYỆN - ĐÔI LIỄN
Version 2
=========================================*/

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

    if(document.getElementById("tongTho"))
        document.getElementById("tongTho").innerHTML="("+tho.length+" bài)";

    if(document.getElementById("tongdanhngon"))
        document.getElementById("tongdanhngon").innerHTML="("+danhngon.length+" bài)";

    if(document.getElementById("tongLien"))
        document.getElementById("tongLien").innerHTML="("+lien.length+" bài)";

    if(document.getElementById("tongkinh"))
        document.getElementById("tongkinh").innerHTML="("+kinhphapcu.length+" bài)";

    if(document.getElementById("tongTatCa"))
        document.getElementById("tongTatCa").innerHTML=
        tho.length+danhngon.length+lien.length+kinhphapcu.length;
}

//============================
// 5 BÀI MỚI NHẤT
//============================

function baiMoi(){

    let box=document.getElementById("baimoi");

    if(!box) return;

    let html="";
    let ds=[];

    if(typeof tho!="undefined") ds=ds.concat(tho);
    if(typeof danhngon!="undefined") ds=ds.concat(danhngon);
    if(typeof lien!="undefined") ds=ds.concat(lien);
    if(typeof kinhphapcu!="undefined") ds=ds.concat(kinhphapcu);

    ds.sort(function(a,b){
        return b.id-a.id;
    });

    ds.slice(0,5).forEach(function(item){

        html+=`
        <div class="item">
            <b>${item.tieude}</b>
        </div>
        `;

    });

    box.innerHTML=html;

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

    tho.forEach(function(item){
        if(item.tieude.toLowerCase().includes(key)){
            html+=`<div class="item">
            <a href="#" onclick="docBai('tho',${item.id})">${item.tieude}</a>
            </div>`;
        }
    });

    danhngon.forEach(function(item){
        if(item.tieude.toLowerCase().includes(key)){
            html+=`<div class="item">
            <a href="#" onclick="docBai('danhngon',${item.id})">${item.tieude}</a>
            </div>`;
        }
    });

    lien.forEach(function(item){
        if(item.tieude.toLowerCase().includes(key)){
            html+=`<div class="item">
            <a href="#" onclick="docBai('lien',${item.id})">${item.tieude}</a>
            </div>`;
        }
    });

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