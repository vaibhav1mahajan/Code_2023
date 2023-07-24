import java.util.*;
import java.io.*;
public class MainSolution  {
    static FastReader in=new FastReader();
    static final Random random=new Random();
    static long mod=1000000007L;
    static HashMap<String,Integer>map=new HashMap<>();

    public static void main(String args[]) throws IOException {
        int t=in.nextInt();
        StringBuilder res=new StringBuilder();
        while(t-->0)
        {
            int n = in.nextInt();
            int[] arr = new int[n];
            for(int i =0;i<n;i++){
                arr[i] = in.nextInt();
            }
            StringBuilder ans = new StringBuilder();  
            ans.append(1);
            int b = arr[0];
            boolean state = true;
            for(int i=1;i<n;i++){
                if(arr[i]>=b && state){
                    ans.append(1);
                    arr[i] =b;
                } else if((arr[i]<b && arr[i]<=arr[0] && state) || i==1){
                    ans.append(1);
                    state = false;
                     b = arr[i];
                } else if(!state && arr[i]>=b  && arr[i]<=arr[0]){
                    ans.append(1);
                    b = arr[i];
                } else{
                    ans.append(0);
                    // if(!state){
                    //     b=arr[i];
                    // }
                }
            }
            res.append(ans + "\n");
        }
        print(res);  
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




