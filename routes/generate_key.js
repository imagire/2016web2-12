var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* 暗号化 */
router.get('/:encrypt', function(req, res, next) {
    res.send(req.params.encrypt);
    return;

  var password = '12345678901234567890123456789012';// 暗号化のキー

  var encrypt = req.params.encrypt;// URLから元の文字列を取得
  if(encrypt !== undefined)
  {
    // 暗号化
    var cipher = crypto.createCipher('aes192', password);
    cipher.update(encrypt, 'utf8', 'hex');
    var cipheredText = cipher.final('hex');
    res.send(cipheredText);
    return;
  }
});

module.exports = router;
