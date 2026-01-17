function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

async function runSteps() {
  const a = await stepOne();
  console.log(a);

  const b = await stepTwo();
  console.log(b);
}

runSteps();
