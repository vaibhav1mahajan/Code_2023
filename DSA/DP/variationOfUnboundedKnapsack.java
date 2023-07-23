package DSA.DP;

public class variationOfUnboundedKnapsack {
    public static void main(String[] args) {
        
    }
    public static boolean subsetSum(int[] arr , int k){
        int n = arr.length;
        boolean[][] dp = new boolean[n+1][k+1];
        for(int i=0;i<k+1;i++){
            dp[0][i] = false;
        } 
        for(int i =0;i<n+1;i++){
            dp[i][0] = true;
        }
        for(int i=1;i<n+1;i++){
            for(int j=1;j<k+1;j++){
                if(arr[i-1]<=j){
                    dp[i][j] = dp[i-1][j] || dp[i-1][k-arr[i-1]];
                } else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
        return dp[n][k];
    }
}
