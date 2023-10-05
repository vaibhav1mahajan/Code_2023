public class BS_7 {
    public static void main(String[] args) {
        
    }
    public static int findRotation(int[] arr){
        int low =0;
        int high = arr.length-1;
        int index = 0;
        int ans = Integer.MAX_VALUE;
        while(low<=high){
            int mid = (low+high)/2;
            if(arr[low]<=arr[high]){
                if(arr[low]<ans){
                    index= low;
                    ans = arr[low];
                    break;
                } 
            }
                if(arr[low]<=arr[mid]){
                    if(arr[low]<ans){
                        index = low;
                        ans = arr[low];
                    }
                    low=mid+1;
                } else{
                    if(arr[mid]<ans){
                        index = mid;
                        ans = arr[mid];
                    }
                    high = mid-1;
                }
        //     }
        }
        return index;
    }
}
