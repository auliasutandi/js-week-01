
    let text = "";

    for (let a = 1; a <= 7; a++) {
    for (let d = 0; d < a; d++) {
        text += a + d +" ";
    }
        text += `\n`;
    }

    console.log(text);