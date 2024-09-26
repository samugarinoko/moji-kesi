function addText() {
    // 入力された文字を取得
    const inputValue = document.getElementById('inputText').value;

    // pタグに文字を追加
    const displayText = document.getElementById('displayText');
    displayText.textContent += inputValue + ' ';
}

function clearText() {
    // pタグの内容をクリア
    const displayText = document.getElementById('displayText');
    displayText.textContent = '';
}
