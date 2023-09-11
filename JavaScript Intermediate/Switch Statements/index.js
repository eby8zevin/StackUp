document.getElementById("calculate").addEventListener("click", function () {
  var list = document.getElementById("main-input").value;
  list = list.replaceAll(" ", "");
  list = list.split(",");

  list = list.map((item, index) => {
    return parseInt(item);
  });

  var operator = document.getElementById("operator").value;
});
