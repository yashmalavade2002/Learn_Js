let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {  // ✅ Use string literals
        currMode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});
