var express = require('express');
var router = express.Router();

/* ˆÃ†‰» */
router.get('/', function(req, res, next) {
  var encrypt = req.query.encrypt;// URL‚©‚çŒ³‚Ì•¶š—ñ‚ğæ“¾
  if(encrypt !== undefined)
  {
    // ˆÃ†‰»
    var cipher = crypto.createCipher('aes192', password);
    cipher.update(encrypt, 'utf8', 'hex');
    var cipheredText = cipher.final('hex');
    res.send(cipheredText);
    return;
  }
});

module.exports = router;
