package DSA.DP.St;

import java.util.ArrayList;

public class Dp09 {
    public static void main(String[] args) {

    }
    public static int tabulation(int n , int m , ArrayList<ArrayList<Integer>> mat){
        int[][] dp = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (mat.get(i).get(j) == -1) dp[i][j] = 0;
                else if (i == 0 && j == 0) dp[i][j] = 1;
                else {
                    int a = 0;
                    int b = 0;
                    if (i > 0) a = dp[i - 1][j];
                    if (j > 0) b = dp[i][j - 1];
                    dp[i][j] = (a + b) % mod;
                }
            }
        }
        return dp[n - 1][m - 1];
    }
    static int mod = 1000000007; 

}
