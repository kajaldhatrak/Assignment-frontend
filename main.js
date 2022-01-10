let modelBtn1 = document.querySelector("#myBtn-1");
let modelBg1 = document.querySelector(".modal-bg1");

let modelBtn2 = document.querySelector("#myBtn-2");
let modelBg2 = document.querySelector(".modal-bg2");

let modelBtn3 = document.querySelector("#myBtn-3");
let modelBg3 = document.querySelector(".modal-bg3");

let modalClose1 = document.querySelector(".close-1");
let modalClose2 = document.querySelector(".close-2");
let modalClose3 = document.querySelector(".close-3");

modelBtn1.addEventListener("click", function () {
  modelBg1.classList.add("bg-active");
});

modelBtn2.addEventListener("click", function () {
  modelBg2.classList.add("bg-active");
});

modelBtn3.addEventListener("click", function () {
  modelBg3.classList.add("bg-active");
});

modalClose1.addEventListener("click", function () {
  modelBg1.classList.remove("bg-active");
});

modalClose2.addEventListener("click", function () {
  modelBg2.classList.remove("bg-active");
});

modalClose3.addEventListener("click", function () {
  modelBg3.classList.remove("bg-active");
});
