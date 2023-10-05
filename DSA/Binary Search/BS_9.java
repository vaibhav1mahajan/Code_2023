import java.util.ArrayList;

public class BS_9 {
    public static void main(String[] args) {
        
    }
    public static int findPeak(ArrayList<Integer> arr){
        int n = arr.size();
        if(n==1) return arr.get(0);
        if(arr.get(0)>arr.get(1)) return 0;
        if(arr.get(n-1)>arr.get(n-2)) return n-1;
        int low = 1;
        int high = n-2;
        while(low<=high){
            int mid = (low+high)/2;
            if(arr.get(mid)>arr.get(mid+1) && arr.get(mid)>arr.get(mid-1)){
                return mid;
            }
            if(arr.get(mid)>arr.get(mid-1)){
                low=mid+1;
            } else{
                high = mid-1;
            }
        }
        return -1;
    }
}
