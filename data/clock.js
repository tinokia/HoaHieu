function capNhatDongHo(){

    const d = new Date();

    const thu = [
        "Chủ nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy"
    ];

    let ngay = String(d.getDate()).padStart(2,"0");
    let thang = String(d.getMonth()+1).padStart(2,"0");
    let nam = d.getFullYear();

    let gio = String(d.getHours()).padStart(2,"0");
    let phut = String(d.getMinutes()).padStart(2,"0");
    let giay = String(d.getSeconds()).padStart(2,"0");

    const box = document.getElementById("dongHo");

    if(!box) return;

    box.innerHTML =
    `📅 ${thu[d.getDay()]}, ${ngay}/${thang}/${nam}
    
    🕒 ${gio}:${phut}:${giay}`;
}

setInterval(capNhatDongHo,1000);

capNhatDongHo();

