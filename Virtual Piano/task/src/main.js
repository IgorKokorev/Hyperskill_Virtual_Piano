document.addEventListener("keydown", (event) => {
    const keysArr = document.querySelectorAll("kbd");
    const contentArr = [];
    keysArr.forEach(e => contentArr.push(e.textContent));
    contentArr.includes(event.key.toUpperCase()) ?
        contentArr.forEach(e => {
            if(event.key.toUpperCase() === `${e}`) {
                let audio = new Audio(`./sounds/${e}.mp3`);
                audio.play();
            }
        })
        : console.log("Warning");
})