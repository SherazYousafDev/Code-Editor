let htmlinput = document.querySelector(".html-editor textarea");
let cssinput = document.querySelector(".css-editor textarea");
let jsinput = document.querySelector(".js-editor textarea");
let outputContainer = document.querySelector(".output-container");
let saveBtn = document.querySelector(".save");
let output = document.querySelector("#output");
let fullScreen = document.querySelector(".full-screen");
let copyBtn = document.querySelectorAll(".copy");

//
saveBtn.addEventListener("click", () => {
  // For HTML Output:
  output.contentDocument.body.innerHTML = htmlinput.value;

  // For CSS Output:
  output.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;

  // For JavaScript Output:
  output.contentWindow.eval(jsinput.value);
});

//
fullScreen.addEventListener("click", () => {
  outputContainer.classList.toggle("active");

  if (outputContainer.classList.contains("active")) {
    fullScreen.style.transform = "rotate(180deg)";
  } else {
    fullScreen.style.transform = "rotate(0deg)";
  }
});

// Copy Button

copyBtn.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("copy1")) {
      navigator.clipboard.writeText(htmlinput.value);
    } else if (e.classList.contains("copy2")) {
      navigator.clipboard.writeText(cssinput.value);
    } else {
      navigator.clipboard.writeText(jsinput.value);
    }
  });
});
