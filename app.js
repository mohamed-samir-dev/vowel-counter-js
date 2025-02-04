function isVowel(char) {
  const vowel = ["a", "e", "i", "o", "u"];
  return vowel.includes(char);
}
function checkVowel() {
    let txt = document.getElementById("textarea").value;
    let vowelCount = 0;
    tex = txt.toLowerCase();
    for (let i = 0; i < txt.length; i++) {
        let char = txt.charAt(i);
        if (isVowel(char)) {
            vowelCount++;
        }
    }
    const result = document.getElementById("result");
    result.textContent="Total Vowels:"+ vowelCount;
}
