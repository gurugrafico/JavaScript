const vowels = ['a', 'e', 'i', 'o', 'u'];

let words = ['oak', 'sycamore', 'birch', 'sequoia'];

for (let w = 0; w < words.length; w += 1) {
  let word = words[w];  // Corregido aquí
  let count = 0;
  for (let v = 0; v < vowels.length; v += 1) {
    let vowel = vowels[v];
    if (word.includes(vowel)) {  // Corregido aquí
      count += 1;
    }
  }
  console.log(`"${word}" contains ${count} vowels.`);
}