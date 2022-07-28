const a={
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":6,
    "g":7,
    "h":8,
    "i":9,
    "j":10,
    "k":11,
    "l":12,
    "m":13,
    "n":14,
    "o":15,
    "p":16,
    "q":17,
    "r":18,
    "s":19,
    "t":20,
    "u":21,
    "v":22,
    "w":23,
    "x":24,
    "y":25,
    "z":26
};
const mp3=new Audio("song.mp3")
const mp31=new Audio("loss.aac")


const btn = document.getElementById("btn1");

btn.addEventListener("click", first);
function first(e){
    e.preventDefault();
    const b=document.getElementById('l1').value;
    const c=document.getElementById('l2').value;
    const d=document.getElementById('l3').value;
    const con = document.getElementById('con1');
    if((b>='a' &&  b<='z') && (d>='a' &&  d<='z') && (d>='a' &&  d<='z') && b!=="" && c!=="" && d!=="" && c.length==1 && b.length==1 && d.length==1)
    {
        const p1= document.getElementById('p1');
        p1.innerText=`You won\nYour calculative number = ${(a[b]*(a[c]+3)*(a[d]+1)*1009)%1000} equal 865\n  Calculation:\n Enter elements are  \n ${b}, ${c}, ${d} \nCorresponding numbers are \n ${a[b]}, ${a[c]}, ${a[d]}. \n Second operation -\n add 1 with 2nd number and add 3 with 3rd number 
        ${a[b]}, ${a[c]}+1 = ${a[c]+1}, ${a[d]}+3= ${a[d]+3}\n Third operation - \n Multiply all the numbers together\n ${a[b]}X${a[c]+1}X${a[d]+3}= ${a[b]*(a[c]+3)*(a[d]+1)}
        Fourth operation - \n Multiply ${a[b]*(a[c]+3)*(a[d]+1)} by 1009\n ${a[b]*(a[c]+3)*(a[d]+1)}X1009=${a[b]*(a[c]+3)*(a[d]+1)*1009}\n Fifth Operation - \n Choose last three digit of ${a[b]*(a[c]+3)*(a[d]+1)*1009}\n  Final Number = ${(a[b]*(a[c]+3)*(a[d]+1)*1009)%1000}`
        
        const fn=(a[b]*(a[c]+3)*(a[d]+1)*1009)%1000
        if(fn == 865)
        {
            mp3.play()

        }
        else{
            mp31.play()
           // p1.innerText=`Sorry you loss. To play again refresh or re-enter clicking the link`
           const p1= document.getElementById('p1');
        p1.innerText=`Your calculative number = ${(a[b]*(a[c]+3)*(a[d]+1)*1009)%1000}\n Calculation:\n Enter element are\n ${b}, ${c}, ${d} \nCorresponding numbers are \n ${a[b]}, ${a[c]}, ${a[d]}. \n Second operation -\n add 1 with 2nd number and add 3 with 3rd number 
        ${a[b]}, ${a[c]}+1 = ${a[c]+1}, ${a[d]}+3= ${a[d]+3}\n Third operation - \n Multiply all the numbers together\n ${a[b]}X${a[c]+1}X${a[d]+3}= ${a[b]*(a[c]+3)*(a[d]+1)}
        Fourth operation - \n Multiply ${a[b]*(a[c]+3)*(a[d]+1)} by 1009\n ${a[b]*(a[c]+3)*(a[d]+1)}X1009=${a[b]*(a[c]+3)*(a[d]+1)*1009}\n Fifth Operation - \n Choose last three digit of ${a[b]*(a[c]+3)*(a[d]+1)*1009}\n  Final Number = ${(a[b]*(a[c]+3)*(a[d]+1)*1009)%1000}`
         
        }
        console.log("ok", fn);
    }
    else{
           mp31.play()
           con.innerText="Enter correct letters and Refresh or re-enter clicking the link"
    }
    const p2= document.getElementById('p2');
    console.log("hello", b, c, d);
}
