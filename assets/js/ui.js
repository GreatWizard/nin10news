require("./nin10news");

window.onDecoderChange = (value) => {
  const result = document.getElementById("result-decoder");
  const decoded = window.nin10news.decode(value.trim());
  if (decoded !== undefined && decoded !== "") {
    result.href = decoded;
    result.text = decoded;
    result.click();
  } else {
    result.href = "#";
    result.text = "";
  }
};

window.onEncoderChange = (value) => {
  const result = document.getElementById("result-encoder");
  const encoded = window.nin10news.encode(value.trim());
  if (encoded !== undefined && encoded !== "") {
    result.innerText = encoded;
  } else {
    result.innerText = "";
  }
};
