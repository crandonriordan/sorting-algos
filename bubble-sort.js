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
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    let tmp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = tmp;
                }
            }
        }

        output.innerText = arr;
    })
});
