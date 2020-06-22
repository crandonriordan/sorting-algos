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
    numberPicker.value = "";
    output.innerText = arr;
  });

  sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let newArr = mergesort(arr);

    output.innerText = newArr;
  });

  const mergeSortedArr = (a, b) => {
    const c = [];
    if (a && b === undefined) {
      return a;
    } else if (b && a === undefined) {
      return b;
    } else if (a === undefined && b === undefined) {
      return;
    }

    let aIndex = 0;
    let bIndex = 0;
    let cIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
      if (a[aIndex] < b[bIndex]) {
        c[cIndex++] = a[aIndex++];
      } else {
        c[cIndex++] = b[bIndex++];
      }
    }

    while (aIndex < a.length) {
      c[cIndex++] = a[aIndex++];
    }

    while (bIndex < b.length) {
      c[cIndex++] = b[bIndex++];
    }

    return c;
  };

  const mergesort = (arr) => {
    if (arr.length == 1) {
      return arr;
    } else if (!arr) {
      return;
    }

    let left = arr.slice(0, arr.length / 2);
    let right = arr.slice(arr.length / 2, arr.length);

    left = mergesort(left);
    right = mergesort(right);

    return mergeSortedArr(left, right);
  };
});
