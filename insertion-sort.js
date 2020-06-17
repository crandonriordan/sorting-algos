"use strict";

const swap = (arr, firstIndex, lastIndex) => {
  let tmp = arr[firstIndex];
  arr[firstIndex] = arr[lastIndex];
  arr[lastIndex] = tmp;
};

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

    // two loops
    // one will iterate front to back of the arr
    // and for each element preceding we check if it is > the element
    // if so, swap, until the element is right where it belongs
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j >= 1; j--) {
        if (arr[j] < arr[j - 1]) {
          swap(arr, j, j - 1);
        }
      }
    }

    output.innerText = arr;
  });
});
