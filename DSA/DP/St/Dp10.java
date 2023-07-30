package DSA.DP.St;

public class Dp10 {
    public static void main(String[] args) {
        
    }
    public static int recursion(int[][] arr, int n , int m,int[][] dp){
        if(n==0 && m==0){
            return arr[0][0];
        }
        if(n<0 || m<0){
            return 10000000;
        }
        if(dp[n][m]!=-1) return dp[n][m];
        int a = arr[n][m]+recursion(arr, n-1, m,dp);
        int b = arr[n][m]+recursion(arr, n, m-1,dp);
        return dp[n][m] = Math.min(a,b);
        }
        public static int tabulation(int[][] arr){
            int n = arr.length;
            int m = arr[0].length;
            int[][] dp = new int[n][m];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    if(i==0 && j==0){
                        dp[i][j] = arr[0][0];
                        continue;
                        
                    }  
                    int a = arr[i][j];
                    int b = arr[i][j];

                    if(i>0){
                       a+= dp[i-1][j]; 
                    } else {
                        a+=10000000;
                    }
                    
                    if(j>0){
                         b+= dp[i][j-1];
                    } else{
                         b+=10000000;
                    }
                    
                    dp[i][j] = Math.min(a,b);
                }
            }
            return dp[n-1][m-1];
        }
        public static int spaceOptimization(int[][] arr){
            int n = arr.length;
            int m = arr[0].length;
            int[][] dp = new int[n][m];
            int[] prev = new int[m];
            int[] curr = new int[m];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    if(i==0 && j==0){
                        curr[j] = arr[0][0];
                        continue;
                        
                    }  
                    int a = arr[i][j];
                    int b = arr[i][j];

                    if(i>0){
                       a+= prev[j]; 
                    } else {
                        a+=10000000;
                    }
                    
                    if(j>0){
                         b+= curr[j-1];
                    } else{
                         b+=10000000;
                    }
                    
                    curr[j] = Math.min(a,b);
                }
                prev = curr;
            }
            return prev[m-1];
        
        }
}
