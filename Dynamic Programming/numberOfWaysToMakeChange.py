#Number of Ways to Make Change
#https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Make%20Change

def numberOfWaysToMakeChange(n, denoms):
    memo = [0]*(n+1)
	memo[0] = 1
	for x in denoms: 
		for y in range(len(memo)): 
			if x<= y: 
				memo[y] += memo[y-x]
	return memo[-1]
