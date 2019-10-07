const axios = require("axios");

function addressesBalance() {
  const proxyUrl = "https://proxy.vbk.zelcore.io/addressesbalance";
  const data = {
    addresses: ["V7GKRDmXMFYsyyZo8UvSQWnRQ2FA3A"]
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
