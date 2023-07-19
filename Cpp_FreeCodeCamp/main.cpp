#include<iostream>
#include<string>
// using namespace std;

int main(){
    int a {20};
    int age;
    std::string name;
    std::cout<<a<< std::endl;
    std::cout<<"Please enter your name and age"<<std::endl;
    // std::clog<<"Some error might have in this program";
    // std::cin>>name>>age;
    std::getline(std::cin,name);
    std::cin>>age;
    std::cout<< name<<std::endl;
    std::cout<<age<<std::endl;
    return 0;
} 