package DSA.Recurssion;

import java.util.Arrays;

public class allProgram {
    public static void main(String[] args) {
        System.out.println(sum(5));
        int[] arr = {1,2,3,4,5,0,-9,65};
        QuickSort(arr, 0, arr.length-1);
        System.out.println(Arrays.toString(arr));
        
    }
    public static int sum(int n){
        if(n==1){
            return 1;
        }
        return n + sum(n-1);
    }
    public static boolean isPalin(String s ,int index){
        if(index>=s.length()/2){
            return true;
        }
        return s.charAt(index)==s.charAt(s.length()-index-1) && isPalin(s,index+1); 
    }
    public static void QuickSort(int[] arr, int low , int high){
        if(low>=high){
            return;
        }
        int pivot  = high;
        int i = low;
        int j = high;
        while(i<j){
            while(arr[pivot]>arr[i]){
                i++;
            }
            while(arr[pivot]<arr[i]){
                j--;
            }
            if(i<j){
                int temp = arr[i];
                arr[i]  = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        QuickSort(arr, low, j);
        QuickSort(arr, i, high);
        return;     
    }
}
