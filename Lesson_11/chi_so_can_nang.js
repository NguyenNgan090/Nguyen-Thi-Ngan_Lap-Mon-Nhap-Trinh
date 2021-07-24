function BMI () {

let chieu_cao = document.getElementById ("chieucao").value;
let can_nang = document.getElementById ("cannang").value;
let bmi = can_nang/(Math.pow (chieu_cao, 2))
let result = "";
if (bmi <16)
result = "gầy độ 3"
else if (bmi<17)
result = "gầy độ 2"
else if (bmi <18)
result = "gầy độ 1"
document.getElementById ("result").innerHTML = "Chỉ số BMI của bạn là: " + bmi + ". Bạn " + result
}