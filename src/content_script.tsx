chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

const tbody = document.querySelector(
  "#mw-content-text > div.mw-parser-output > table:nth-child(112) > tbody > tr:nth-child(1)"
)?.parentElement!;

const children = Array.from(tbody.children).slice();
tbody.replaceChildren("");
Array.from(children)
  .filter((element, idx) => {
    if (idx === 0) {
      return true;
    }
    return element.textContent!.indexOf("GENESIS") >= 0;
  })
  .forEach((element) => {
    console.log(element.textContent);
    tbody.appendChild(element);
  });
tbody.appendChild(document.createElement("div"));
