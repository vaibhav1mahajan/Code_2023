package DSA.DP;

import java.util.Arrays;

public class variationOfLCS {
    public static void main(String[] args) {
        
    }
    public static int[][] table(String str, String s){
        int n = str.length();
        int m = s.length();
        int[][]  dp = new int[n+1][m+1];
        Arrays.fill(dp[0],0);
        for(int i =0;i<n+1;i++){
            dp[i][0] =0;
        }
        for(int i =1;i<n+1;i++){
            for(int j =1;j<m+1;j++){
                if(str.charAt(i-1)==s.charAt(j-1)){
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp;
    }
    public static int LongestCommonSubstring(String str, String s){
        int n = str.length();
        int m = s.length();
        int[][] dp = new int[n+1][m+1];
        for(int i =0;i<n+1;i++){
            dp[i][0] =0;
        }
        for(int j =0;j<m+1;j++){
            dp[0][j] =0;
        }
        int max1 = -1;
        for(int i =1;i<n+1;i++){
            for(int j =1;j<m+1;j++){
                if(str.charAt(i-1)==s.charAt(j-1)){
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else{
                    dp[i][j] =0;
                }
                max1 = Math.max(max1,dp[i][j]);
            }
        }
        return max1;
    }

    public static int ShortestCommonSuperString(String str,String s){
        int n = str.length();
        int m = s.length();
        int[][] dp = table(str, s);
        return n+m-dp[n][m];
    }
    public static int MinNumberOfDeletionAndInsertion(String str , String s){
        int n = str.length();
        int m = s.length();
        int[][] dp = table(str, s);
        int deletion = n-dp[n][m];
        int insertion = m-dp[n][m];
        return insertion + deletion;
    }

    public static int LongestPalindromicSubsequence(String str){
        int n = str.length();
        StringBuilder s = new StringBuilder(str);
        s= s.reverse();
        int dp[][] = table(str, s.toString());
        return dp[n][n];
    }
        public static int MinNumberOfDeletionToMakePalindrome(String str){
        int n = str.length();
        StringBuilder s = new StringBuilder(str);
        s= s.reverse();
        int dp[][] = table(str, s.toString());
        return n-dp[n][n];
    }
}
