public class BS_1 {
        public static void main(String[] args) {
            System.out.println(1);
        }    

        public static int binarySearch(int[] arr,int target){
            int low = 0;
            int high = arr.length-1;
            while(low<=high){
                int mid = low + (high-low)/2;
                if(arr[mid]==target){
                    return mid;
                } else if(arr[mid]>target){
                    high = mid-1;
                } else{
                    low = mid+1;
                }
            }
            return -1;
        }
}