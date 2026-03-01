// document.getElementById("#btn").addEventListener("click", function (event) {});

// addEventListener("click", function (event) {});

function settleLife(name, isBCS, marriage, patri) {
  if (isBCS) {
    marriage(patri);
  }
}

function boloKobul(patri) {
  console.log("kobul", patri);
}
settleLife("John", true, boloKobul, "nari");
boloKobul("pori");
