var date = new Date ()
var hour = date.getHours()
if (hour < 12) {
    document.write ("good morning")
} else if (hour == 12) {
    document.write("enjoy your meal")
}
else if ( hour < 17) {
  document.write ("good afternoon")  
}
else if ( hour < 22) {
  document.write ("good evening")  
}
else if ( hour > 0 && hour < 3) {
  document.write ("good night")  
}