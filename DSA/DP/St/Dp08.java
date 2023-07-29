package DSA.DP.St;

import java.util.Arrays;

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

    public static int tabulation(int n, int m){
        int[][] dp = new int[n][m];
        Arrays.fill(dp[0],1);
        for(int i =0;i<n;i++){
            for(int j=0;j<m;j++){
                if(j==0 && i==0){
                    dp[i][j] = 1;
                } 
                int a =0;
                int b =0;
                if(i>0){
                    a = dp[i-1][j];
                }
                if(j>0){
                    b = dp[i][j-1];
                }
                dp[i][j] = a+b;
            }
        }
        return dp[n-1][m-1];
    }
    public static int spaceOptimization(int n , int m){
        int[] prev = new int[m];
        int[] curr = new int[m];
        for (int i = 0; i < curr.length; i++) {
            prev[i] = 1;
        }
        for(int i =1;i<n;i++){
            for(int j =0;j<m;j++){
                int a =0;
                if(j>0) a = curr[j-1];
                int b = prev[j];
                curr[j] =a+b;
            }
            prev =curr;
        }
         return prev[m-1];
    }
}
