public class BS_10 {
    public static void main(String[] args) {
        System.out.println(sqrt(30));
    }
    public static int sqrt(int n){
        int low =1;
        int high = n;
        int ans = 1;
        while(low<=high){
            int mid = (low+high)/2;
            if(mid*mid<=n){
                ans = mid;
                low = mid +1;
            } else{
                high = mid-1;
            }
        }
        return ans;
    }
}
