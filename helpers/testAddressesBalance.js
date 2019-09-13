const axios = require("axios");

function addressesBalance() {
  const proxyUrl = "http://127.0.0.1:10101/addressesbalance";
  const data = {
    addresses: ["V7GKRDmXMFYsyyZo8UvSQWnRQ2FA3A", "VDuSjNZ4xHb7bXTR9Y1Rt8Qe5J5awg"]
  };
  axios
    .post(proxyUrl, data)
    .then(response => {
      console.log(JSON.stringify(response.data))
    })
    .catch(error => {
      console.log(error)
    });
}

addressesBalance();
