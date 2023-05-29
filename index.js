const username = prompt("What is your name?");
if (username === null || username === "") {
    alert("Hello, noname! How are you?");
  } else {
    alert("Hello, " + username + "! How are you?");
  }