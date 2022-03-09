#Min Number of Coins For Change
#https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change

def minNumberOfCoinsForChange(n, denoms):
    memo = [float("inf")]*(n+1)
	memo[0] = 0
	for x in denoms: 
		for i in range(len(memo)):
			if x <= i:
				memo[i] = min(memo[i],memo[i -x]+1)
		print(memo)
    return memo[n] if memo[n] != float('inf') else -1
