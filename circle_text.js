'use strict'

const text = document.querySelector('.logo_text p');
text.innerHTML = text.innerText.split("")
    .map((char, i) =>`<span style="transform:rotate(${i*7.4}deg)">${char}</span>`).join("")