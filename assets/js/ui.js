require("./nin10news");

const waiters = {};

waitBefore = (name, funcName, data, timeout = 250) => {
  if (!waiters[name]) {
    waiters[name] = 0;
  }
  clearTimeout(waiters[name]);
  console.log(data);
  waiters[name] = setTimeout(function () {
    window[funcName](data);
  }, timeout);
};

onDecoderChange = (value) => {
  const decoded = nin10news.decode(value.trim());
  const resultURL = document.getElementById("result-decoder-url");
  const labelURL = document.getElementById("label-decoder-url");
  const resultOther = document.getElementById("result-decoder-other");
  const labelOther = document.getElementById("label-decoder-other");
  if (decoded.startsWith("http://") || decoded.startsWith("https://")) {
    resultURL.href = decoded;
    resultURL.text = decoded;
    resultURL.classList.remove("hide");
    labelURL.classList.remove("hide");
    resultURL.click();
  } else {
    resultURL.href = "#";
    resultURL.text = "";
    resultURL.classList.add("hide");
    labelURL.classList.add("hide");
    if (decoded !== undefined && decoded !== "") {
      resultOther.innerText = decoded;
      resultOther.classList.remove("hide");
      labelOther.classList.remove("hide");
    } else {
      resultOther.innerText = "";
      resultOther.classList.add("hide");
      labelOther.classList.add("hide");
    }
  }
};

onEncoderChange = (value) => {
  const result = document.getElementById("result-encoder");
  const label = document.getElementById("label-encoder");
  const encoded =
    value.trim() !== undefined && value.trim() !== ""
      ? nin10news.encode(value.trim())
      : undefined;
  if (encoded !== undefined && encoded !== "") {
    result.innerText = encoded;
    result.classList.remove("hide");
    label.classList.remove("hide");
  } else {
    result.innerText = "";
    result.classList.add("hide");
    label.classList.add("hide");
  }
};
