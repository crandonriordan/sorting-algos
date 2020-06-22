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

    alert(partition([5,1,2], 0, 2));

    output.innerText;
  });

  

  const partition = (arr, start, end) => {
    debugger;
    let j = end;
    let pivot = arr[start];
    for(let i = start + 1; i < end; i++) {
      if(j < i) {
        break;
      }

      if(arr[i] > pivot && arr[j] <= pivot) {
        swap(arr, i, j--);
      }

      if(arr[i] > pivot && arr[j] > pivot) {
        i--;
        j--;
      }
    }

    swap(arr, start, j);

    return j;
  }

  const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
});
