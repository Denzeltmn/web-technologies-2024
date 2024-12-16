function spinWords(str)
{
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++)
    {
        if (words[i].length >= 5)
        {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test
