let u = prompt("ความเร็วลูกบอล (หน่วยเมตร/วินาที)")
let angle = prompt("มุมกี่องศา")
let s = prompt("ระยะห่าง (หน่วยเมตร)")
var g = -9.81
var angle1 = angle * Math.PI/180
var uy = u*Math.sin(angle1)
var ux = u*Math.cos(angle1)
var t = -(uy*2/g)
var sy = -(g*t*t/4)/2
var sx = u*Math.cos(angle1)*t
var t_fixed = t.toFixed(2)
var sy_fixed = sy.toFixed(2)
var sx_fixed = sx.toFixed(2)

document.getElementById("result1").innerHTML = "ลูกบอลไปได้ไกลสุดเท่าไหร่จึงจะตกถึงพื้น " + "("+sy_fixed +" m" +" " +sx_fixed +" m" +" "+ t_fixed + " "+" sec" +")"

var sx2 = s - sx
var sx2_fixed = sx2.toFixed(2)
var t2 = s/ux
var t2_fixed = t2.toFixed(2)
var sy2 = uy*t2 + (g*t2*t2)/2
var sy2_fixed = sy2.toFixed(2)
if(sx > s) {
    document.getElementById("result2").innerHTML = "ที่ตำแหน่งเส้นประตู " + "("+sy2_fixed+" m"+" " + t2_fixed + " sec" +")"
}
else if(sx < s) {
    document.getElementById("result2").innerHTML = "ที่ตำแหน่งเส้นประตู " + "(ลูกบอลตกพื้นก่อนถึงประตู "+sx2_fixed+" m"+" " + t2_fixed + " sec" +")"
    
}

if(sy2_fixed > 2.44 )
{
    document.getElementById("result3").innerHTML = "ไม่เข้า ลูกบอลข้ามประตู"  
}
else if(sy2_fixed < 2.44)
{
    if(t2_fixed < 0.5 && sx > s)
    {document.getElementById("result3").innerHTML = "ลูกบอลเข้าประตู"}
    else if(t2_fixed > 0.5 && sx > s)
    {document.getElementById("result3").innerHTML = "ไม่เข้า ผู้รักษาประตูรับได้"}
    else if(sx < s)
    {document.getElementById("result3").innerHTML = "ไม่เข้า ลูกบอลตกพื้นก่อน"}
}
