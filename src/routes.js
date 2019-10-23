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
    app.post('/addresseshistory', function (req, res) {
        veriblock.addressesHistory(req, res)
    })
    app.post('/submittransactions', function (req, res) {
        veriblock.submitTransactions(req, res)
    })
    app.post('/addressessignatureindex', function (req, res) {
        veriblock.addressesSignatureIndex(req, res)
    })
};