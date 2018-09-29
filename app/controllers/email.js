let email = require('emailjs/email');
let pass = require('../config.js').emailPass;
let recaptcha = require('../models/recaptchaModel').recaptcha;
let server = email.server.connect({
  user: 'reestr@da-strateg.ru',
  password: pass,
  host: 'smtp.beget.com',
  ssl: true
});

exports.sendEmail = function (req, res) {
  recaptcha.verify(req, function (error) {
    if (!error) {
      console.log('капча пройдена');
      server.send({
        text: req.body.message + ' Контакты: ' + req.body.from,
        from: 'resstr',
        to: 'v.lasarenko@da-strateg.ru',
        subject: 'Реестр. Форма обратной связи.'
      }, function (err, message) {
        console.log(err || message);
      });
    }
    else
      console.log('ошибка капчи');

    res.redirect('/main');
  });
};