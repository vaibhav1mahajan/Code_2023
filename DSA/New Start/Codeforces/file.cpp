#include<bits/stdc++.h>
using namespace std;
void Explainpair(){
    std::stack<int> myStack;

    // Common methods of stack:

    // 1. push(): Adds an element to the top of the stack
    myStack.push(10);
    myStack.push(20);
    myStack.push(30);
   std::stack<int> anotherStack;
    anotherStack.push(100);
    anotherStack.push(200);
    myStack.swap(anotherStack);
    std::cout << "Size of myStack after swap: " << myStack.size()<<anotherStack.top() << std::endl;
}
int main(){
	int t;
	cin>>t;
	while(t-->0){
        Explainpair();
	}
	return 0;

}