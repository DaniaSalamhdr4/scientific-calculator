function factorial(n) {
  if (n < 0) return "Error";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let isSecondFunc = false;
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "2ⁿᵈ") {
      isSecondFunc = !isSecondFunc;
      if (isSecondFunc) {
        e.target.style.backgroundColor = "#f39c12";
      } else {
        e.target.style.backgroundColor = ""; // العودة للون الأصلي
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "sin") {
      let degrees = parseFloat(string);
      let radians = degrees * (Math.PI / 180);
      string = Math.sin(radians).toFixed(10);
      string = parseFloat(string).toString();
      input.value = string;
    } else if (e.target.innerHTML == "cos") {
      let degrees = parseFloat(string);
      let radians = degrees * (Math.PI / 180);
      string = Math.cos(radians).toFixed(10);
      string = parseFloat(string).toString();
      input.value = string;
    } else if (e.target.innerHTML == "tan") {
      let degrees = parseFloat(string);
      if (Math.abs(degrees % 180) === 90) {
        input.value = "Error";
        string = "";
      } else {
        let radians = degrees * (Math.PI / 180);
        string = parseFloat(Math.tan(radians).toFixed(10)).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "cot") {
      let degrees = parseFloat(string);
      let radians = degrees * (Math.PI / 180);
      let tanValue = Math.tan(radians);
      if (Math.abs(tanValue) < 0.0000000001) {
        input.value = "Error";
        string = "";
      } else {
        string = (1 / tanValue).toFixed(10);
        string = parseFloat(string).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "CE") {
      let lastOperatorIndex = Math.max(
        string.lastIndexOf("+"),
        string.lastIndexOf("-"),
        string.lastIndexOf("*"),
        string.lastIndexOf("/"),
      );

      if (lastOperatorIndex !== -1) {
        string = string.substring(0, lastOperatorIndex + 1);
      } else {
        string = "";
      }
      input.value = string;
    } else if (e.target.innerHTML == "√") {
      string = Math.sqrt(parseFloat(string)).toString();
      input.value = string;
    }
    // else if (e.target.innerHTML == "x²") {
    //   string = (parseFloat(string) ** 2).toString();
    //   input.value = string;
    // }
    else if (e.target.innerHTML == "x²") {
      if (isSecondFunc) {
        string = Math.pow(parseFloat(string), 3).toString();
      } else {
        string = Math.pow(parseFloat(string), 2).toString();
      }
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
    } else if (e.target.innerHTML == "|x|") {
      if (string !== "") {
        string = Math.abs(parseFloat(string)).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "n!") {
      if (string !== "") {
        let num = parseFloat(string);
        if (Number.isInteger(num)) {
          string = factorial(num).toString();
          input.value = string;
        } else {
          input.value = "Integer Only";
          string = "";
        }
      }
    } else if (e.target.innerHTML == "xʸ") {
      string += "**";
      input.value = string;
    } else if (e.target.innerHTML == "10ˣ") {
      string += "10**";
      input.value = string;
    } else if (e.target.innerHTML == "ln") {
      if (string !== "") {
        string = Math.log(parseFloat(string)).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "log") {
      if (string !== "") {
        string = Math.log10(parseFloat(string)).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "rand") {
      string = Math.random().toString();
      input.value = string;
    } else if (e.target.innerHTML == "deg") {
      if (string !== "") {
        string = (parseFloat(string) * (180 / Math.PI)).toString();
        input.value = string;
      }
    } else if (e.target.innerHTML == "dms") {
      if (string !== "") {
        let deg = parseFloat(string);
        let d = Math.floor(deg);
        let minFloat = (deg - d) * 60;
        let m = Math.floor(minFloat);
        let s = Math.round((minFloat - m) * 60);

        string = `${d}°${m}'${s}"`;
        input.value = string;
      }
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
