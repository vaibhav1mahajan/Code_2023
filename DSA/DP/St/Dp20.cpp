#include <bits/stdc++.h>
using namespace std;

int tabulation(vector<int> &arr , int k){
    int n = arr.size();
    vector<vector<int>> dp(n,vector<int>(k+1,0));
    for(int i =0;i<=k;i++){
        if(i % arr[0]==0) dp[0][i] = i/arr[0];
        else dp[0][i] = 1e9;
    }
    for(int i =1;i<n;i++){
        for(int j=0;j<k+1;j++){
            int notTake = dp[i-1][j];
            int take = INT_MAX;
            if(arr[i]<=j) take = 1 + dp[i][j-arr[i]];
            dp[i][j] = min(take, notTake);
        }
    }
    return dp[n-1][k];
}

int main(){
    return 0;
}