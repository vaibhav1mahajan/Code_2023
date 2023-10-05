public class BS_6 {
    public static void main(String[] args) {
        
    }
    public static int minInRotatedArray(int[] arr){
        int n = arr.length;
        if(n==1){
            return arr[0];
        }
        if(n==2){
            return arr[0]>arr[1] ? arr[1] : arr[0];
        }
        int low =0;
        int high = n-1;
        while(low<=high){
            int mid = (low+high)/2;
            if(mid<n-1 && arr[mid]>arr[mid+1]){
                return arr[mid+1];
            } else if(mid>0 && arr[mid-1]>arr[mid]){
                return arr[mid];
            } else if(arr[mid]>=arr[low]){
                low=mid+1;
            }else{
                high = mid-1;
            }

        }
        return 0;
    }
    public static int minArr(int[] arr){
        int low = 0;
        int high = arr.length-1;
        int ans = Integer.MAX_VALUE;
        while(low<=high){
            int mid = (low+high)/2;
            if(arr[low]<=arr[mid]){
                ans = Math.min(ans,arr[low]);
                low=mid+1;
            } else{
                    ans = Math.min(ans, arr[mid]);
                    high=mid-1;
            }
        }
        return ans;
    }
}
