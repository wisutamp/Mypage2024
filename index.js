function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'blue';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'brown';
    }
 }
 
 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง สำนักปฎิบัติการ";
        result.style.color = 'blue';
    } else {
        result.textContent = "ลองใหม่^-^";
        result.style.color = 'brown';
    }
 }

 const result = document.getElementById('result3');
    if (result="result='a'") {
        result.textContent = "ถูกต้อง สำนักปฎิบัตการ";
        result.style.color = 'blue';
    } else {
        result.textContent = "ลองใหม่^-^";
        result.style.color = 'brown';
    }