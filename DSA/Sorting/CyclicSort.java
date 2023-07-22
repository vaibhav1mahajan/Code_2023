package Jacascript.DSA.Sorting;

import java.util.Arrays;

public class CyclicSort{
    public static void main(String[] args) {
        int[] arr = {1};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
    static void sort(int[] arr){
        int i =0;
        while(i<arr.length){
            int correctIndex = arr[i]-1;
            if(i==correctIndex){
                i++;
            } else{
                int temp = arr[correctIndex];
                arr[correctIndex] = arr[i];
                arr[i] = temp;

            }
        }
    }
    
}