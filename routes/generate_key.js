var express = require('express');
var router = express.Router();

/* �Í��� */
router.get('/', function(req, res, next) {
  var encrypt = req.query.encrypt;// URL���猳�̕�������擾
  if(encrypt !== undefined)
  {
    // �Í���
    var cipher = crypto.createCipher('aes192', password);
    cipher.update(encrypt, 'utf8', 'hex');
    var cipheredText = cipher.final('hex');
    res.send(cipheredText);
    return;
  }
});

module.exports = router;
