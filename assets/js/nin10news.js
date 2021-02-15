const AES = require("crypto-js/aes");
const {
  enc: { Utf8 },
} = require("crypto-js");

window.nin10news = {};

window.nin10news.decode = (text) => {
  return AES.decrypt(text, "/").toString(Utf8);
};

window.nin10news.encode = (text) => {
  return AES.encrypt(text, "/").toString();
};
