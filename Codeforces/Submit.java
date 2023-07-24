import java.util.Scanner;

public class Submit {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        
        while (t-- > 0) {
            int n = scanner.nextInt();
            int[] p = new int[n];
            for (int i = 0; i < n; i++) {
                p[i] = scanner.nextInt();
            }
            
            int len = findLongestNonDecreasingSubarray(p);
            int i = len + 1;
            int j = len;
            
            System.out.println(i + " " + j);
        }
    }
    
    public static int[] findLongestNonDecreasingSubarray(int[] p) {
        int n = p.length;
        int len = 0;
        int maxLength = 0;
        int[] arr = new int[2];
        
        for (int i = 0; i < n - 1; i++) {
            if (p[i] <= p[i + 1]) {
                len++;
            } else {
                arr[1] = i;
                len = 0;
            }
            maxLength = Math.max(maxLength, len);
            arr[0]= maxLength;
        }
        
        return maxLength;
    }
}
