"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const numberPicker = document.querySelector("#number-picker");
  const numberPickerBtn = document.querySelector("#number-picker-btn");
  const sortBtn = document.querySelector("#sort-btn");
  const output = document.querySelector("#output");
  const arr = [];
  let len = 0;

  numberPickerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    arr[len++] = Number.parseInt(numberPicker.value);
    output.innerText = arr;
  });

  sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // iterate through array N number of times
    // for each iteration find the smallest integer and place it in index from outer loop
    for (let i = 0; i < arr.length; i++) {
      let minElement = Number.MAX_SAFE_INTEGER;
      let minElementIndex = 0;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < minElement) {
          minElement = arr[j];
          minElementIndex = j;
        }
      }
      // swap minElementIndex with i
      let tmp = arr[i];
      arr[i] = minElement;
      arr[minElementIndex] = tmp;
    }

    output.innerText = arr;
  });
});
