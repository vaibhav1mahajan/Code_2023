#include <bits/stdc++.h>
using namespace std;
#define all(v) v.begin(), v.end()
#define int long long

typedef long long ll;
typedef unsigned long long ull;


void solve() {
	int n;
	cin>>n;
	int count =0;
	int maxi =1;
	for(int i =1;i< sqrt(n);i++){
		if(n%i==0){
            count++;
            maxi = max(count,maxi);
        } else{
            count=0;
        }
	}

		cout<<maxi<<endl;

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



