#include <bits/stdc++.h>
using namespace std;
int minSubsetSumDifference(vector<int>& arr, int m)
{
	// Write your code here.
	    int n = arr.size();
    int sum = 0;

    for (int i : arr)
        sum += i;

    int dummy = sum;
    sum = sum / 2;

    std::vector<bool> prev(sum + 1, false);
    std::vector<bool> curr(sum + 1, false);

    prev[0] = curr[0] = true;
    if (arr[0] <= sum)
        prev[arr[0]] = true;

    for (int i = 1; i < n; i++) {
        for (int j = 1; j < sum + 1; j++) {
            bool notPick = prev[j];
            bool pick = false;
            if (arr[i] <= j)
                pick = prev[j - arr[i]];
            curr[j] = pick || notPick;
        }

        prev = curr;
    }

    int minimumDifference = INT_MAX;
    for (int i = sum; i >= 0; i--) {
        if (prev[i])
            minimumDifference = std::min(minimumDifference, dummy - 2 * i);
    }

    return minimumDifference;
}


int main(){
    return 0;
}