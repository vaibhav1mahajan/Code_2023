public class BS_3 {
    public static void main(String[] args) {
        int[] arr = {2,4,6,8,8,8,11,13};
        System.out.println(lastIndex(arr, 8));
    }
    public static int firstIndex(int[] arr , int target){
        int start = 0;
        int end = arr.length-1;
        int ans = -1;
        while(start<=end){
            int mid = (start+end)/2;
            if(arr[mid]==target){
                ans = mid;
                end = mid-1;
            } else if(arr[mid]<target){
                start = mid +1;
            } else{
                end = mid-1;
            }
        }
        return ans;
    }
    public static int lastIndex(int[] arr , int target){
        int start = 0;
        int end = arr.length-1;
        int ans = -1;
        while(start<=end){
            int mid = (start+end)/2;
            if(arr[mid]==target){
                ans = mid;
               start = mid+1;
            } else if(arr[mid]<target){
                start = mid +1;
            } else{
                end = mid-1;
            }
        }
        return ans;
    }
    public static void simple(){
            
    }
}
