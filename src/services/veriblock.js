const log = require('../lib/log');
const config = require('config');
const axios = require("axios");

function getInfo(res) {
    const max = 1000000;
    const min = 1;

    const apiUrl = config.apiUrl;
    const data = {
        jsonrpc: "2.0",
        method: "getinfo",
        params: {},
        id: 1
    };
    const axiosConfig = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-VBK-RPC-PASSWORD": config.server.password
        },
    };
    axios
        .post(apiUrl, data, axiosConfig)
        .then(response => {
            // console.log(response.data)
            return res.json(response.data)
        })
        .catch(error => {
            const errMessage = {
                status: "error",
                data: {
                    message: "An error has been encountered while processing request."
                }
            }
            log.error(error);
            return res.json(errMessage)
        });
}

function addressesBalance(req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        const processedBody = JSON.parse(body)
        const obtainedAddresses = processedBody.addresses; //"params":{addresses:[V7GKRDmXMFYsyyZo8UvSQWnRQ2FA3A,VDuSjNZ4xHb7bXTR9Y1Rt8Qe5J5awg]}
        const max = 1000000;
        const min = 1;

        const apiUrl = config.apiUrl;
        const data = {
            jsonRpc: "2.0",
            method: "getbalance",
            params: { addresses: obtainedAddresses },
            id: Math.floor(Math.random() * (max - min + 1)) + min
        };
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-VBK-RPC-PASSWORD": config.server.password
            },
        };
        axios
            .post(apiUrl, data, axiosConfig)
            .then(response => {
                // console.log(response)
                return res.json(response.data)
            })
            .catch(error => {
                const errMessage = {
                    status: "error",
                    data: {
                        message: "An error has been encountered while processing request."
                    }
                }
                log.error(error);
                return res.json(errMessage)
            });
    });
}

function addressesHistory(req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        const processedBody = JSON.parse(body)
        const obtainedAddresses = processedBody.addresses; //"params":{addresses:[V7GKRDmXMFYsyyZo8UvSQWnRQ2FA3A,VDuSjNZ4xHb7bXTR9Y1Rt8Qe5J5awg]}
        const max = 1000000;
        const min = 1;

        const apiUrl = config.apiUrl;
        const data = {
            jsonRpc: "2.0",
            method: "gethistory",
            params: { addresses: obtainedAddresses },
            id: Math.floor(Math.random() * (max - min + 1)) + min
        };
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-VBK-RPC-PASSWORD": config.server.password
            },
        };
        axios
            .post(apiUrl, data, axiosConfig)
            .then(response => {
                // console.log(response)
                return res.json(response.data)
            })
            .catch(error => {
                const errMessage = {
                    status: "error",
                    data: {
                        message: "An error has been encountered while processing request."
                    }
                }
                log.error(error);
                return res.json(errMessage)
            });
    });
}

function submitTransactions(req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        const processedBody = JSON.parse(body)
        const obtainedTransactions = processedBody.transactions;
        const max = 1000000;
        const min = 1;

        const apiUrl = config.apiUrl;
        const data = {
            jsonRpc: "2.0",
            method: "submittransactions",
            params: { transactions: [obtainedTransactions] },
            id: Math.floor(Math.random() * (max - min + 1)) + min
        };
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-VBK-RPC-PASSWORD": config.server.password
            },
        };
        console.log(data);
        axios
            .post(apiUrl, data, axiosConfig)
            .then(response => {
                // console.log(response)
                return res.json(response.data)
            })
            .catch(error => {
                const errMessage = {
                    status: "error",
                    data: {
                        message: "An error has been encountered while processing request."
                    }
                }
                log.error(error);
                return res.json(errMessage)
            });
    });
}

function addressesSignatureIndex(req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        const processedBody = JSON.parse(body)
        const obtainedAddresses = processedBody.addresses; //"params":{addresses:[V7GKRDmXMFYsyyZo8UvSQWnRQ2FA3A,VDuSjNZ4xHb7bXTR9Y1Rt8Qe5J5awg]}
        const max = 1000000;
        const min = 1;

        const apiUrl = config.apiUrl;
        const data = {
            jsonRpc: "2.0",
            method: "getsignatureindex",
            params: { addresses: obtainedAddresses },
            id: Math.floor(Math.random() * (max - min + 1)) + min
        };
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-VBK-RPC-PASSWORD": config.server.password
            },
        };
        console.log(data);
        axios
            .post(apiUrl, data, axiosConfig)
            .then(response => {
                // console.log(response)
                return res.json(response.data)
            })
            .catch(error => {
                const errMessage = {
                    status: "error",
                    data: {
                        message: "An error has been encountered while processing request."
                    }
                }
                log.error(error);
                return res.json(errMessage)
            });
    });
}

module.exports = {
    getInfo,
    addressesBalance,
    addressesHistory,
    submitTransactions,
    addressesSignatureIndex
}