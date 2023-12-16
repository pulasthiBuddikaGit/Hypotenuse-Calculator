
let a;
let b;
let c;
document.getElementById("submit1").onclick= function(){

    a=document.getElementById("myText").value
    b=document.getElementById("myText1").value

    // The isNaN function in JavaScript stands for "is Not a Number."
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers for side A and side B");
        return;
    }
    if (a<=0|| b<=0) {
        alert("Please enter positive numbers for side A and side B");
        return;
    }

    a=Number(a)
    b=Number(b)

    c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
    c=Math.abs(c)

    document.getElementById("sideC").innerHTML= "length of Side C: "+ c

    

}