// function kiemtra() {
//     let number = document.getElementById ("number").value;
//     let even = number % 2 == 0; //true/false
//     if (even) {
//         alert ("number" + "là số chẵn")
//     }
//     else if (even) {
//         alert ("number" +"là số lẻ")}
//     }
//     }

function kiemtra() {
   let number = document.getElementById("number").value;
    let even = number % 2 == 0; //true/false
    alert( even ? number+ " là số chẵn" : number + " không là số chẵn");
}
