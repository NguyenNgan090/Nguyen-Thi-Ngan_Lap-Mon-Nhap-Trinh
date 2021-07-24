function nam_nhuan() {
    let leadyear = document.getElementById ("year").value;
    if (leadyear%4 ==0) 
        if (leadyear%100 ==0)
       document.getElementById("result").innerHTML = leadyear +" là năm nhuận";
        else
        document.getElementById("result").innerHTML = leadyear +" là năm nhuận";
     else
     document.getElementById("result").innerHTML = leadyear +" không là năm nhuận";
   
}