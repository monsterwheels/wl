// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const whitelist = [
      "0x96bdf5e081df55f083E45EDf4aa743FE50BcF4D9","0xb40832805fC01ea06c045B47e675e3940A5bf2B5", // Whitelisted addresses here
      // ...
    ];
  
    const form = document.getElementById("whitelist-form");
    const result = document.getElementById("result");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const address = form.elements["address"].value.trim();
  
      if (whitelist.includes(address)) {
        result.textContent = "Congratulations, you are whitelisted to mint!";
        result.style.color = "green";
      } else {
        result.textContent = "Sorry, you are not whitelisted. There's still a chance to participate in the Public Sale!";
        result.style.color = "red";
      }
  
      result.classList.remove("hidden");
    });
  });