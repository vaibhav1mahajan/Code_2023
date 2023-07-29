package DSA.DP.St;

import java.util.Arrays;

public class Dp14 {
    public static void main(String[] args) {
        
    }
    public static boolean tabulation(int[] arr , int target){
        boolean[] curr = new boolean[target+1];
        boolean[] prev = new boolean[target+1];
        for(int i =0;i<target;i++) prev[i] =false;
        prev[0] =true;
        if(arr[0]<=target) prev[arr[0]] = true;
        for(int i =1;i<arr.length;i++){
            for(int j =1;j<target+1;j++){
                if(arr[i]<=j){
                    curr[j] = prev[j] || prev[j-arr[i]];
                } else {
                    curr[j] = prev[j];
                }
            }
            prev =curr;
        }
        return prev[target];
    }
    public static boolean f(int[] arr , int k){
        int n = arr.length;
        boolean[][] dp = new boolean[n+1][k+1];
        Arrays.fill(dp[0],false);
        for(int i =0;i<n+1;i++){
            dp[i][0] = true;
        }
        for(int i=1;i<n+1;i++){
            for(int j =1;j<k+1;j++){
                if(arr[i-1]<=j){
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i-1]];
                } else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
        return dp[n][k];
    }
}
