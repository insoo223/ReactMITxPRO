/*
1. File: helloasync.js
2. 2. How to Run: $node helloasync.js
3. Exprected Result: 
calling...
what a wonderful world...
still wait...
what a wonderful world...
still wait...
resolved <-- (this will be printed out after two seconds)

4. PN 1033151 (p44) of the printed binding of "MIT xPRO Front-End Dev. w/React"

*/

function resolveAfter2sec() {
	return new Promise (resolve => {
		setTimeout ( () => {
			resolve('resolved');
		}, 2000);
	});
}


async function asyncCall() {
	console.log('calling...');
	const result = await resolveAfter2sec();
	console.log(result);
}

function lulurara()
{
	console.log('what a wonderful world...');
	console.log('still wait...');
	console.log('what a wonderful world...');
	console.log('still wait...');
}
	
asyncCall();
lulurara();
