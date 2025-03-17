/*
1. File: helloasync.js
2. 2. How to Run: $node helloasync.js
3. Exprected Result: 

insoo@vintrix ~/github/ReactMITxPRO/wk01/asyncawait
 % node helloasync.js
calling... 
calling...
what a wonderful world...
still wait...
what a wonderful world...
still wait...
resolved1 <-- (these two results will be simultaneously printed out after two seconds)
resolved2

4. PN 1033151 (p44) of the printed binding of "MIT xPRO Front-End Dev. w/React"

*/

function resolveAfter2sec1() {
	return new Promise (resolve => {
		setTimeout ( () => {
			resolve('resolved1');
		}, 2000);
	});
}

function resolveAfter2sec2() {
	return new Promise (resolve => {
		setTimeout ( () => {
			resolve('resolved2');
		}, 2000);
	});
}

async function asyncCall1() {
	console.log('calling...');
	const result = await resolveAfter2sec1();
	console.log(result);
}

async function asyncCall2() {
	console.log('calling...');
	const result = await resolveAfter2sec2();
	console.log(result);
}

function lulurara()
{
	console.log('what a wonderful world...');
	console.log('still wait...');
	console.log('what a wonderful world...');
	console.log('still wait...');
}
	
asyncCall1();
asyncCall2();
lulurara();
