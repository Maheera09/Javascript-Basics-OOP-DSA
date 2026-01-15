// Create a function login(username, password):

/* Rules:
If username or password is missing, empty, or only spaces → return "Invalid input"
Correct credentials are:
username: "admin"
password: "1234"
If credentials match → return "Login successful"
Else → return "Wrong credentials" */

function login(username, password) {
  if (
    !username ||
    !password ||
    username.trim() === "" ||
    password.trim() === ""
  ) {
    console.log("Invalid Input.");
    return;
  }

  if (username === "admin" && password === "1234") {
    console.log("Login Successful!");
  } else {
    console.log("Wrong credentials ;(");
  }
}
login();
login("", "1234");
login("    ", "1234");
login("admin", "0000");
