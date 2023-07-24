#include <bits/stdc++.h>
using namespace std;
#define all(v) v.begin(), v.end()
#define int long long

typedef long long ll;
typedef unsigned long long ull;


void solve() {
	int n;
	cin>>n;
	 int arr[n];
	for(int i =0;i<n;i++){
		cin>>arr[i];
	}
	int hello = INT_MAX;
	bool flag = false;
	for(int i=1;i<n;i++){
		int a = arr[i-1]-arr[i];
		if(a>0){
			cout<<0<<endl;
			flag = true;
			break;
		}else{
				a = a*(-1);
			hello = min(hello,a);
		} 

		
	}
	if(!flag){
		int b;
		if(hello%2==0){
			b = hello/2 +1;
		} else{
			 b = (hello+1)/2;
		}
		
		cout<<b<<endl;
	}

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



