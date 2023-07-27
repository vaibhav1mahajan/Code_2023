package DSA.DP.St;

import java.util.Arrays;

public class FrogJUmp {
    public static void main(String[] args) {
        int[] arr = {10,60,25,4,8,74,45};
        int[] dp = new int[arr.length];
        Arrays.fill(dp,-1);
        System.out.println(forgJump(arr, arr.length-1,dp));
    }
    public static int forgJump(int[] arr, int index,int[] dp){
        if(index==0){
            return 0;
        }
        if(dp[index]!=-1) return dp[index];
        int a = Math.abs(arr[index]-arr[index-1]) + forgJump(arr, index-1,dp);
        int b = Integer.MAX_VALUE;
        if(index>1){
            b = Math.abs(arr[index]-arr[index-2]) +  forgJump(arr, index-2,dp);
        }
        return dp[index] = Math.min(a, b);
    }
}
