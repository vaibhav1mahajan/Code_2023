package DSA.DP.St;

public class Dp12 {

    public static void main(String[] args) {
        
    }
    public static int getMaxPathSum(int[][] matrix) {
		// Write your code here
		int n = matrix.length;
		int m = matrix[0].length;
		int[][] dp = new int[n][m];
		for(int i =0;i<m;i++){
			dp[0][i] = matrix[0][i];
		}
		for(int i =1;i<n;i++){
			for(int j =0;j<m;j++){
				int a = matrix[i][j] + dp[i-1][j];
				int b = Integer.MIN_VALUE;
				if(j-1>=0){
					b = matrix[i][j] + dp[i-1][j-1];
				}
				int c = Integer.MIN_VALUE;
				if(j+1<m){
					c = matrix[i][j] + dp[i-1][j+1];
				}
				dp[i][j] = Math.max(a,Math.max(b,c));
			}
		}
		int max = dp[n-1][0];
		for(int i =1;i<m;i++){
			max = Math.max(max,dp[n-1][i]);
		}
		return max;
	} 
}