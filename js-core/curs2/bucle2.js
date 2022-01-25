var i = 1;
var j = 1;
var max = 10;
while (j <= max) {
    var message = j + "x" + i + "=" + i * j + "<br>"
    message =`${j} x ${i} = ${j*i} <br>`
    document.write(message )
    j++
}
document.write("<br>")
for ( i =1 ; i<=max;i++ ){
for (j = 1;j <= max ; j++) {
    message =`${j} x ${i} = ${j*i} <br>`
    document.write(message )
}
document.write("<br>")
}