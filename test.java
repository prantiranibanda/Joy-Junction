public class test{
    public static void main(String args[]){
        int k=111;
        for(int i=0; i<10; i++){
            if((i%2) != 0){
                k = k-9;
            }
            else{
                k = k-11;
            }
            for(int j=0; j<10; j++){
                if((i%2) == 0){
                    System.out.print(k);
                    k--;
                }
                else{
                    System.out.print(k);
                    k++;
                }
            }
            System.out.println();
        }
    }
}