How do you do auth checks and ensure input from the user is valid?
The ans is middlewares.
The dumb way of doing this ,is to add constraint to your route
Slightly better solution is to wrap our authentication logic inside a function 
We can pass numerous callback function inside a route handler and they may have three arguments (req,res,next) . Next is the argument which calls the next function in the route handler.
If you try to res.send twice inside a single route then it is a problem
app.use function is to call middleware in every route below it.


Input validation
User can send any type of data and our backend server are exposed to internet , so if they send any jibrish data then our server will crash and we don't want it. So for that we need inputp validation

To handle this type of situation , we can use global catches.It is also one type of middleware which take four input instead of three.There is next as argument which is used becuase there may be more global catches.
What it does?
It's work is to handle exception. If there is any exception in any route then control will reach here
