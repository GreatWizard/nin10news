const AES = require("crypto-js/aes");
const {
  enc: { Utf8 },
} = require("crypto-js");

nin10news = {};

nin10news.decode = (text) => {
  return AES.decrypt(text, "/").toString(Utf8);
};

nin10news.encode = (text) => {
  return AES.encrypt(text, "/").toString();
};
