document.getElementById("button").addEventListener("click", function () {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let sequence = [];

  try {
    if (input < 0) {
      throw new Error("Input cannot be negative");
    } else if (input === "") {
      throw new Error("Input cannot be empty");
    } else if (isNaN(input)) {
      throw new Error("Input must be a number");
    } else {
    }
    output.innerHTML = sequence.join(", ");
  } catch (error) {
    output.innerHTML = error;
  } finally {
    alert(
      `The ${input}th number in the fibonacci sequence is ${
        sequence[input - 1]
      }`
    );
  }
});
