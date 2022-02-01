var scores = [50,65,47,81,20,55,19,91,58,60]

document.write('al doila scor este :' + scores[1] + '<br>')
document.write('Ultimul scor este :' + scores[9] + '<br>')
var max = 0
for (let i = 0; i < scores.length; i++) {
    
    if (scores[i]>max) {
        max =scores[i]
    }
}
document.write('socorul maxim :' + max + '<br>')

scores.sort()
document.write(scores+ '<br>') 

var fruits = ['orange','banana','apple','wasabi']
fruits[0] = 'mango'
fruits.push('pear')
fruits.sort ()
document.write(fruits + '<br>')
var words = ['hello',' Visual studio' , 'Java script',  'if' , 'object']

 var upperWords = []

 for (const word of words) {
   //  word[0].toUpperCase() == word[0] alta varianta
     if (word[0]>='A' && word[0]<='Z'){
upperWords.push(word)
     }
 }
 upperWords.sort
 document.write(upperWords)