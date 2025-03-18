/*----------------------------------------
1. File: helloClosure.js
2. 2. How to Run: $node helloClosure.js
3. Exprected Result:

 % node helloClosure.js
0
1
2
3
4
5
6
7
8
9

4. PN 1033151 (p54) of the printed binding of "MIT xPRO Front-End Dev. w/React"
----------------------------------------*/

const testClosure = () => {
    for (let i=0; i<10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

testClosure();

