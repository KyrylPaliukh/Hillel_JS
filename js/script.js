function analyzeText(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g);

  const uniqueWordsSet = new Set(words);

  return {
    uniqueWordsCount: uniqueWordsSet.size,
    uniqueWords: Array.from(uniqueWordsSet),
  };
}
const text = 'Hello, JavaScript!!! test - text.! hello';
const analysisResult = analyzeText(text);
console.log(analysisResult.uniqueWordsCount);
console.log(analysisResult.uniqueWords);
