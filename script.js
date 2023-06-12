function myFunctionAdd()
{
    let x = document.getElementById("Numberone").value;
    console.log(x);
    let y = document.getElementById("Numbertwo").value;
    console.log(y);

    let z = Number(x) + Number(y);
    console.log(z);
    document.getElementById("output").innerHTML = z;
}
function myFunctionSub()
{
    let x = document.getElementById("Numberone").value;
    console.log(x);
    let y = document.getElementById("Numbertwo").value;
    console.log(y);

    let z = Number(x) - Number(y);
    console.log(z);
    document.getElementById("output").innerHTML = z;
}
function myFunctionMul()
{
    let x = document.getElementById("Numberone").value;
    console.log(x);
    let y = document.getElementById("Numbertwo").value;
    console.log(y);

    let z = Number(x) * Number(y);
    console.log(z);
    document.getElementById("output").innerHTML = z;
}
function myFunctionDiv(){
    let x = document.getElementById("Numberone").value;
    console.log(x);
    let y = document.getElementById("Numbertwo").value;
    console.log(y);

    let z = Number(x) / Number(y);
    console.log(z);
    document.getElementById("output").innerHTML = z;
}