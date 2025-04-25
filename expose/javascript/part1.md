1. values added: 20 
2. final result: 20
3. Because var is function scoped and not block scoped like other variables and it can lead to confusion and potentially bugs. 
4. values added: 20
5. It returns a reference error because result is defined in the if statement and is block scope so when it get to line 13 it goes out of scope.
6. I got a TypeError because const result = 0 makes result immutable, so reassigning it with result = num1 + num2 is not allowed.
7. Same thing as above. In fact it doesn't get to run line 7 because there's an error on line 4.