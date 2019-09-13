const veriblock = require('./services/veriblock');

module.exports = (app) => {
    // GET methods
    app.get('/', (req, res) => {
        veriblock.getInfo(res);
    });
    // POST methods route
    app.post('/addressesbalance', function (req, res) {
        veriblock.addressesBalance(req, res)
    })
    // User second activation enabling request
    app.post('/addresseshistory', function (req, res) {
        veriblock.addressesHistory(req, res)
    })
};