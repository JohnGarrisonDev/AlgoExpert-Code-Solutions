# Max Subset Sum No Adjacent
#https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent
def maxSubsetSumNoAdjacent(array):
	curMax = 0
	prev1 = None
    if len(array)==0:
		return 0
	if len(array)==1: 
		return array[0]
	prev1 = array[0]
	prev2 = max(array[1],array[0])
	for x in range(2,len(array)):
		curMax = max(prev2,prev1+array[x])
		prev1 = prev2
		prev2 = curMax
			
    return prev2
