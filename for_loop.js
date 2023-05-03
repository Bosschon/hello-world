let qrt = prompt("จำนวนสินค้า")
let sum = 0
for(var i = 1 ; i <= qrt ; i++){
    let price = prompt("ราคาสินค้าชิ้นที่ " + i)
    document.getElementById("result").innerHTML += "รายการสินค้าชิ้นที่ " + i +": " + price + "บาท" + "<br>"
    sum = sum + parseInt(price)
}
document.getElementById("totalprice").innerHTML = "Total " + sum + " baht"