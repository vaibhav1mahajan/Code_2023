package DSA.DP.St;

public class Dp08 {
    public static void main(String[] args) {
        
    }
    	public static int recursion(int m,int n,int[][] dp){
	if(n==1 && m==1){
		return 1;
	}
	if(n<=0 || m<=0){
		return 0;
	}
	if(dp[m][n]!=-1) return dp[m][n];
	return dp[m][n] = recursion(m-1,n,dp) + recursion(m,n-1,dp);
    }

}
