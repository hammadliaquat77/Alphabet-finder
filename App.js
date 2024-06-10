

function alphabet(letter){
let arry = {
    'A': ['Apple', 'Avocado', 'Ant', 'Asteroid', 'Aurora'],
    'B': ['Banana', 'Bicycle', 'Balloon', 'Bat', 'Butterfly'],
    'C': ["cat","carrot","cap","car","cup"],
    'D': ["duck","doll","drum","daniyal","danish"],
    'E': ["elephent","egg","eran","emirates","eggfood"],
    'F': ["fish","frog","fan","form","farm"],
    'G': ["Grapes","glue","green","grave","graving"],
    'H': ["happy","hat","hammer","hammad","hamza"],
    'I': ["igloo","imran","imad","insect","iran"],
    'J': ["jeraf","jameel","jewellery","jump","jugar"],
    'K': ["key","kashif","kareem","kamran","kap"],
    'L': ["lion","lam","lamp","liaquat","light"],
    'M': ["Map","Mother","Madina","Makkah","Muhammad"],
    'N': ["Nut","nest","net","number","nabeel"],
    'O': ["orange","osaka","ostrish","odd","omais"],
    'P': ["parrot","pen","pencil","pan","picashow"],
    'Q': ["queel","Quran","quol","qamar","qasim"],
    'R': ["Rabbit","rin","rain","rambow","rehan"],
    'S': ["sun","soap","super","supari","sweet"],
    'T': ["tea","tapal","tarboz","treat","trim"],
    'U': ["umbrella","umer","umair","usama","usman"],
    'V': ["van","vim","venue","vip","village"],
    'W': ["well","wall","west","waap","wasy"],
    'X': ["xray","xyz","xyz","xyz","xyz",],
    'Y': ["yasir","yoyo","yonus","yahya","yameen"],     
    'Z': ["Zebra", "Zucchini", "Zeppelin", "Zenith", "Zombie"]

};

var math = Math.floor(Math.random()*5)
// console.log(person[letter][math]);
var vell =arry[letter][math];
// console.log(vell);
document.getElementById("hello").value = vell;
}
  




document.addEventListener('keypress' , function(event){
    console.log(event.key);
    if (e.key === 'Enter') {
        alphabet()
    }
})













