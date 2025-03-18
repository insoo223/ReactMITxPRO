/*----------------------------------------
1. File: hellowrdcnt.js
2. 2. How to Run: $node hellowrdcnt.js
3. Exprected Result:

 % node hellowrdcnt.js
unsorted obj
sorted obj

4. PN 1033151 (p69) of the printed binding of "MIT xPRO Front-End Dev. w/React"
----------------------------------------*/

const text = 'In early 2005 Rodolphe Barrangou and Philippe Horvath were staring at some very odd bits of repeating genetic code on a computer screen in France. The sequences came from Streptococcus thermophilus, a bacterium that, like other bacteria, often skirmishes with viruses. Rumour had it that these sequences of DNA might help bacteria gain the upper hand in the fight. If they did, the researchers wanted to know all about it. S. thermophilus is one of the microbes used to make yogurt. Stopping it from falling prey to viruses would save Danisco, the foodmaker they both worked for at the time, millions of euros. They compared the strange sequences from varying strains of S. thermophilus which were resistant to different viruses. In every case, the bits of DNA between the repeated sequences were identical to DNA from the virus to which that strain of bacterium was resistant. The researchers then took bits of DNA from a specific virus and stuck them in between the repeats in a non-resistant strain of S. thermophilus. Remarkably, the strain became resistant. It seemed as if bacteria which survived a viral attack kept chunks of the attacking virus\'s DNA in their own genomes. These functioned as a rogues\' gallery in preparation for future fisticuffs: if the same piece of DNA were seen again, the cell would know it was under attack.'

const words = (msg) => {
    msg = msg.split(" ");
    msg = msg.map (item => item.replace(',', ''));
    msg = msg.map (item => item.replace('.', ''));
    return (msg)
}

const freq = (wds) => {
    let strCntWds = {};
    wds.map(item => strCntWds[item] ? strCntWds[item]++ : strCntWds[item]=1);
    return(strCntWds);
}

let splittedText = words(text);
let wdFreq = {};
wdFreq = freq(splittedText);
const alphaFreq = Object.keys(wdFreq).sort().reduce((acc, key) => {
    acc[key] = wdFreq[key];
    return (acc);
    }, {});
console.log(wdFreq);
console.log(alphaFreq);

