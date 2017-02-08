function countLetters(sentence){
  var result = {};
  for (var letter of sentence){
    if (/\S/.test(letter)) {
      if (!result[letter]) {
        result[letter] = 0;
      }
      result[letter] += 1;
    }}
  return result;
}

console.log(countLetters("lighthouse in the house"));
