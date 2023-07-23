package DSA.DP;

public class mainKnapsack {
    public static void main(String[] args) {
        int[] item = {1,3,4,5};
        int[] val = {1,4,5,7};
        int w =7;

        System.out.println(recursive(item, val, w, val.length));
        System.out.println(bottomUp(item, val, w));
    }
    public static int recursive(int[] item, int[] val , int w ,int n){
        if(w==0 || n==0){
            return 0;
        }
        if(item[n-1]<=w){
            int a = val[n-1] + recursive(item, val, w-item[n-1], n-1);
            int b =  recursive(item, val, w, n-1);
            return Math.max(a,b);
        } else{
            return recursive(item, val, w, n-1);
        }
    }
    public static int bottomUp(int[] item , int[] val, int w){
        int n = item.length;
        int[][] dp = new int[n+1][w+1];
        for (int i = 0; i < dp.length; i++) {
            dp[i][0] = 0;
        }
        for (int i = 0; i < w+1; i++) {
            dp[0][i] =0;
        }
        for (int i = 1; i < n+1; i++) {
            for (int j = 1; j <w+1; j++) {
                if(item[i-1]<=j){
                    int a = val[i-1] + dp[i-1][j-item[i-1]];
                    int b = dp[i-1][j];
                    dp[i][j] = Math.max(a, b);
                } else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
        return dp[n][w];
    }
        
}
