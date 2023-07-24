import java.util.*;
import java.io.*;
public class Main  {
    static FastReader in=new FastReader();
    static final Random random=new Random();
    static long mod=1000000007L;
    static HashMap<String,Integer>map=new HashMap<>();

    public static void main(String args[]) throws IOException {
        int t=in.nextInt();
        StringBuilder res=new StringBuilder();
        while(t-->0)
        {
            solve(res);
        }
        print(res);  
    }
    
   public static void solve(StringBuilder res){
    int min1 = 10000000;
	// bool flag = false;
    int n = in.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
        arr[i] = in.nextInt();
    }

    boolean flag = false;
	for(int i=1;i<n;i++){
		int a = arr[i-1]-arr[i];
		if(a>0){
			res.append(0 + "\n");
            flag = true;
			break;
		} else{
            a= Math.abs(a);
            min1 = Math.min(a, min1);
        }
		
	}
	if(!flag){
		res.append(min1/2 + "\n");
	}
    print(res);

   }
public static int binarySearchUpper(int[] arr,int n,int target){
    int start =0;
    int end = n-1;
    int ans =-1;
    while(start<=end){
        int mid = start + (end-start)/2;
        if(arr[mid]>target){
            mid = end-1;
        } else if(arr[mid]>target){
            start = start+1;
        } else{
            ans = mid;
            start = start+1;
        }
    }
    return ans;
}

public static int binarySearchLower(int[] arr,int n,int target){
    int start =0;
    int end = n-1;
    int ans =-1;
    while(start<=end){
        int mid = start + (end-start)/2;
        if(arr[mid]>target){
            mid = end-1;
        } else if(arr[mid]>target){
            start = start+1;
        } else{
            ans = mid;
            end = end-1;
        }
    }
    return ans;
}
    
   
   
    
    static int max(int a, int b)
    {
        if(a<b)
        	return b;
        return a;
    }
    
     
    static void ruffleSort(int[] a) {
        int n=a.length;
        for (int i=0; i<n; i++) {
            int oi=random.nextInt(n), temp=a[oi];
            a[oi]=a[i]; a[i]=temp;
        }
        Arrays.sort(a);
    }

    static < E > void print(E res)
    {
        System.out.println(res);
    }


    static  int gcd(int a,int b)
    {
        if(b==0)
        {
            return a;
        }
        return gcd(b,a%b);
    }
    
    static int lcm(int a, int b)
    {
        return (a / gcd(a, b)) * b;
    }

    
    static int abs(int a)
    {
        if(a<0)
            return -1*a;
        return a;
    }

    static class FastReader
    {
        BufferedReader br;
        StringTokenizer st;

        public FastReader()
        {
            br = new BufferedReader(new
                    InputStreamReader(System.in));
        }

        String next()
        {
            while (st == null || !st.hasMoreElements())
            {
                try
                {
                    st = new StringTokenizer(br.readLine());
                }
                catch (IOException  e)
                {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }
        int nextInt()
        {
            return Integer.parseInt(next());
        }

        long nextLong()
        {
            return Long.parseLong(next());
        }

        double nextDouble()
        {
            return Double.parseDouble(next());
        }
        String nextLine()
        {
            String str = "";
            try
            {
                str = br.readLine();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
            return str;
        }

        int [] readintarray(int n) {
            int res [] = new int [n];
            for(int i = 0; i<n; i++)res[i] = nextInt();
            return res;
        }
        long [] readlongarray(int n) {
            long res [] = new long [n];
            for(int i = 0; i<n; i++)res[i] = nextLong();
            return res;
        }
    }

}




