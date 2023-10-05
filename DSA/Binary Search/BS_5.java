public class BS_5 {
    public static void main(String[] args) {
        int arr[] = {7,8,9,1,2,3,4,5,6};
        System.out.println(rotatedSearchI(arr, 1));
    }
    public static boolean rotatedSearchI(int[] arr, int target){
        int low = 0;
        int high = arr.length-1;
        while(low<=high){
            int mid = (low+high)/2;
            if(arr[mid]==target){
                return true;
            } 
            if(arr[mid]==arr[low] && arr[high]==arr[mid]){
                low++;
                high--;
                continue;
            }
            if(arr[mid]>=arr[low]){
                if(target>=arr[low] && target<=arr[mid]){
                    high = mid-1;
                }else{
                    low = mid+1;
                }
            } else{
                if(target>=arr[mid] && target<=arr[high]){
                    low= mid+1;
                } else{
                    high = mid -1;
                }
            }
        }
        return false;
    }
}
