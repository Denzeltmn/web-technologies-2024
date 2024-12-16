var LongestLine = function (strs)
{
    if (strs.length === 0) return "";
    function LongestLine(sub)
    {
        return strs.every(str => str.toLowerCase().includes(sub.toLowerCase()));
    }
    let longest = "";
    for (let length = 2; length <= strs[0].length; length++)
    {
        for (let start = 0; start <= strs[0].length - length; start++)
        {
            let line = strs[0].slice(start, start + length);
            if (LongestLine(line))
            {
                if (line.length > longest.length)
                {
                    longest = line;
                }
            }
        }
    }
    return longest;
};

const strs1 = ["цветок", "поток", "хлопок"];
const strs2 = ["собака", "гоночная машина", "машина"];

console.log(LongestLine(strs1)); // "ок"
console.log(LongestLine(strs2)); // ""


