const 明日 = new Date();
明日.setDate(明日.getDate() + 1);

const 日 = 明日.getDay();
let テキスト = "";

if (日 === 1) {
  テキスト = "besok senin :(";
} else if (日 === 6 || 日 === 0) {
  テキスト = "besok weekend :)";
} else {
  テキスト = "masih :(";
}

document.getElementById("text").textContent = テキスト;
document.querySelector('meta[property="og:description"]').setAttribute("content", テキスト);