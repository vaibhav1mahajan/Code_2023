#include <bits/stdc++.h>
using namespace std;
#define all(v) v.begin(), v.end()
#define int long long

typedef long long ll;
typedef unsigned long long ull;

int f(int arr[] , int n,int k, vector<vector<int>> dp,int j){
	if(n<=0 || k==0){
		int maxi = arr[0];
		for(int i =0;i<j;i++){
			maxi = max(maxi,arr[i]);
		}
		return maxi;
	}
	if(dp[n][k]!=-1) return dp[n][k];
	int maxi = -1;
	if(arr[n]>=arr[n-1]){
		for(int i =1;i<=min(k,abs(arr[n]-arr[n-1])+1);i++){
			arr[n-1] +=i;
			int temp = f(arr,n-1,k-i,dp,j);
			arr[n-1]-=i;
			maxi = max(maxi,temp);
		}
	} 
		maxi = max(f(arr,n-1,k,dp,j),maxi);
	
	return dp[n][k] = maxi;
}
int tabulation(int arr[], int n , int k, int maxi){
	vector<vector<int>> dp(n+1,vector<int>(k+1,-1));
	for(int i=0;i<n+1;i++){
		arr[0][i] = maxi;
	}
	for(int i =0;i<k+1;i++){
		arr[0][i] = maxi;
	}
	for(int i =1;i<n+1;i++){
		for(int j =1;j<k+1;j++){
			if(arr[i]>=arr[i-1]){
		for(int ind =1;ind<=min(j,abs(arr[n]-arr[n-1])+1);ind++){
			arr[i-1] +=i;
			int temp = dp[i-1][j-ind];
			arr[n-1]-=i;
			maxi2 = max(maxi2,temp);
		}
	} 
		dp[i][j] = max(dp[i-1][j],maxi2);
		}
	}
	return dp[n][k]
}

void solve() {
	int n;
	cin>>n;
	int k ;
	cin>>k;
	int arr[n];
	int maxi = arr[0];
	for(int i =0;i<n;i++){
		cin>>arr[i];
		maxi  = max(maxi,arr[i]);
	}
	// vector<vector<int>> dp(n+1,vector<int>(k+1,-1));
	// int a = f(arr,n-1,k,dp,n);
	int b = tabulation(arr,n,k,maxi)
	cout<<b<<endl;

}


 

int32_t main() {
 
    std::ios::sync_with_stdio(false);
    cin.tie(NULL);

    #ifndef ONLINE_JUDGE

	freopen("input.txt", "r", stdin);

	freopen("output.txt", "w", stdout);

	#endif
 
    int t ;
    cin>>t;
    while(t--)
   solve();    
    return 0;
}



