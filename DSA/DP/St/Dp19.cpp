#include <bits/stdc++.h>
using namespace std;

int knapsack(vector<int> weight, vector<int> val, int n, int maxWeight) 
{
	// Write your code here
	vector<int> prev(maxWeight+1,0);
	for(int i = weight[0];i<maxWeight+1;i++) prev[i] = val[0];
	for(int i =1;i<n;i++){
		for(int j = maxWeight;j>=0;j--){
			int notTake = prev[j];
			int take = -1;
			if(weight[i]<=j) take = val[i] +  prev[j-weight[i]];
			prev[j] = max(notTake, take);
		}
	}
	return prev[maxWeight];

}

int main(){
    cout<<2<<endl;
    return 0;
}