var numberOfArithmeticSlices = function (A) {
	let sum = 0,
		dp = Array(A.length).fill(0);

	for (var i = 2; i <= dp.length - 1; i++) {
		if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
			dp[i] = 1 + dp[i - 1];
			sum += dp[i];
		}
	}

	return sum
};
// Its not my solution but now I am loking clear: every dp element showing
// how many arithmetic slices is before index of element.
//  Answer is a sum of dp elements