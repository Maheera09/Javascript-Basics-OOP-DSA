function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Fetch successful");
      } else {
        reject("Fetch failed");
      }
    }, 1000);
  });
}

fetchData(true)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
