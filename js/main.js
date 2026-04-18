let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "√") {
      string = Math.sqrt(parseFloat(string)).toString();
      input.value = string;
    } else if (e.target.innerHTML == "x²") {
      string = (parseFloat(string) ** 2).toString();
      input.value = string;
    } else if (e.target.innerHTML == "1/x") {
      if (string === "" || string === "0") {
        input.value = "Error";
        string = "";
      } else {
        string = (1 / parseFloat(string)).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "π") {
      string += Math.PI.toString();
      input.value = string;
    } else if (e.target.innerHTML == "e") {
      string += Math.E.toString();
      input.value = string;
    } else if (e.target.innerHTML == "mod") {
      string += "%";
      input.value = string;
    } else if (e.target.innerHTML == "exp") {
      if (string === "") {
        string = Math.E.toString();
      } else {
        string = Math.exp(parseFloat(string)).toString();
      }
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
