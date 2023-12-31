package DSA.DP;
import java.util.Arrays;

public class mainLCS {
    public static void main(String[] args) {
        String str = "abcdf";
        String s = "abcdaf";
        System.out.println(PrintLCS(str, s));
    }
    public static int bottomUp(String str, String s){
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
        return dp[n][m];
        
    }
    public static String PrintLCS(String str,String s){
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
        StringBuilder ans = new StringBuilder();
        int i =n;
        int j =m;
        while(i>0 && j>0){
            if(str.charAt(i-1)==s.charAt(j-1)){
                ans.append(str.charAt(i-1));
                i--;
                j--;
            } else{
                if(dp[i-1][j]>dp[i][j-1]){
                    i--;
                } else{
                    j--;
                }
            }
        }
        return ans.reverse().toString();
    }
}

