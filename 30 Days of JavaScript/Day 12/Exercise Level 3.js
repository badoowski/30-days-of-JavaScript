// Exercise  Level 3
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

/*
    Question 1: Write a function which cleans text. Clean the following text. After cleaning, count three most 
    frequent words in the string.
*/

// Answer

const cleanedText = sentence.replace(/[^\w\s]/gi, '') 
console.log(cleanedText)

/*
    Question 2: Write a function which find the most frequent words. After cleaning, count three most frequent 
    words in the string.
*/

// Answer

const mostFrequentWords = (sentence, num) => {
    let words = [];
    [...new Set(sentence.match( /\w+/gi))].forEach((word) => {
        words.push({
            'word': word,
            'count': sentence.match(new RegExp(word+'(?=(\\s|\\.|\\,|\\;|\\?))', 'gi'))?.length
        })
    })
    words.sort((a,b) => b.count - a.count);
    for(let i = 0; i < num; i++){
        console.log(words[i])
    }
    return words;   
    
}
mostFrequentWords(cleanedText,1)