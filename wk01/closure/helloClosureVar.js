/*----------------------------------------
1. File: helloClosureVar.js
2. 2. How to Run: $node helloClosureVar.js
3. Exprected Result:

 % node helloClosureVar.js
10
10
10
10
10
10
10
10
10
10

4. PN 1033151 (p53) of the printed binding of "MIT xPRO Front-End Dev. w/React"
----------------------------------------*/

const testClosure = () => {
    for (var i=0; i<10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

testClosure();

