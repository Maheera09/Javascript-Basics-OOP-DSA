function operation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation Completed.");
    }, 2000);
  });
}

operation()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//-------------------------------------

function operation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation 2 Completed.");
    }, 2000);
  });
}

async function run() {
  const res = await operation2(); //
  console.log(res);
}

run();

//------------------------------------

function operation3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation 3 Completed.");
    }, 2000);
  });
}

async function run3() {
  try {
    const res = await operation3();
    console.log(res);
  } catch (err) {
    console.log("The error is", err);
  }
}
run3();

//------------------------------------

function operation4(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operation 4 Completed.");
      } else {
        reject("Operation 4 Failed.");
      }
    }, 2000);
  });
}

async function run4() {
  try {
    const res = await operation4(true);
    console.log(res);
  } catch (err) {
    console.log("The error is:", err);
  }
}

run4();
