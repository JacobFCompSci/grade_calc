// CS10 Grade Calculator

document.getElementById("calc").addEventListener("click", calcPercent);

function calcPercent() {
  let mod1 = +document.getElementById("css1").value;
  let mod2 = +document.getElementById("sp1").value;
  let mod3 = +document.getElementById("sp2").value;
  let mod4 = +document.getElementById("css2").value;
  let proj = +document.getElementById("proA").value;

  let total = mod1 + mod2 + mod3 + mod4 + proj;

  let final = (total / 500) * 100;

  document.getElementById("result").innerHTML = final;
}
