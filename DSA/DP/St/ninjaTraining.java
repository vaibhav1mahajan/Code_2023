package DSA.DP.St;
 
public class ninjaTraining {

    public static void main(String[] args) {
        // System.out.println(0%3);
        int[][] arr = {
            {10,40,70},
            {20,50,80},
            {30,60,90}
        };
        System.out.println(recursion(arr, 2, 0));
    }
    public static int recursion(int[][] arr, int index, int training ){
        if(arr.length==1){
            return Math.max(arr[0][0],Math.max(arr[0][1],arr[0][2]));
        }
        if(index==0){
          return  Math.max(arr[index][(training+1)%3],arr[index][(training+2)%3]);
        }
        int a = arr[index][(training+1)%3] + recursion(arr, index-1, (training+1)%3);
        int b = arr[index][(training+1)%3] + recursion(arr, index-1, (training+2)%3);
        int c = Integer.MIN_VALUE;
        if(index==arr.length-1){
            c = arr[index][training] + recursion(arr, index-1, training);
        }
    

        return Math.max(a,Math.max(b,c));
    }
}