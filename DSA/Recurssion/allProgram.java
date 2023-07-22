package DSA.Recurssion;

public class allProgram {
    public static void main(String[] args) {
        System.out.println(sum(5));
        
        
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
}
