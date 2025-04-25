1. Line 12 will print 3 because var is function-scoped, so the loop variable i is still accessible outside the for loop.
2. It will print 150 which is the last value calculated in the loop — because var is function-scoped, so discountedPrice is still accessible outside the loop.
3. It will also print 150, same reason: finalPrice was declared with var, so it's accessible throughout the function and holds the last computed value.
4. The function will return [50, 100, 150] — each price is cut in half (due to a 0.5 discount), rounded to two decimals, and added to the discounted array. 
5. We get a ReferenceError for line 12 because i is block scoped and it goes out of scope when the program reaches line 12.
6. Causes a ReferenceError — discountedPrice is declared with let inside the for loop, so it's block-scoped and not accessible outside the loop.
7. Prints 150 — finalPrice is declared with let in the function scope, so it's accessible throughout the function.
8. The function will return [50, 100, 150] — it calculates the discounted prices (50% off) for each item in the prices array and returns the resulting array. No errors occur.
9. Causes a ReferenceError — i is declared with let inside the for loop, so it's block-scoped and not accessible outside the loop. 
10. It will print the value 3 because length is a constant holding the length of the prices array, which is accessible throughout the function. No error occurs.
11. Same as the other function, it will return [50, 100, 150] — it calculates the discounted prices (50% off) for each item in the prices array and returns the resulting array.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting();
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. Arithmetic
    A. '3' + 2 = '32' The + operator with a string converts the number to a string and concatenates. 
    B. '3' - 2 = 1 The - operator converts the string '3' to a number and performs subtraction: 3 - 2 = 1.
    C. 3 + null = 3 null is converted to 0 in numeric operations: 3 + 0 = 3.
    D. '3' + null = '3null' The + operator with a string concatenates values: '3' + 'null' = '3null'.
    E. true + 3 = 4 true is converted to 1 in numeric operations: 1 + 3 = 4.
    F. false + null = 0 false becomes 0, null becomes 0: 0 + 0 = 0.
    G. '3' + undefined = '3undefined' undefined is converted to a string, so it concatenates: '3' + 'undefined' = '3undefined'
    H. '3' - undefined = 'NaN '3' is converted to number 3, but undefined can't be converted to a number, so the result is NaN.

14. Comparison
    A. '2' > 1 true, '2' is converted to number 2: 2 > 1 = true.
    B. '2' < '12' false, Both are strings, so comparison is lexicographical: '2' comes after '1'
    C. 2 == '2' true, Loose equality (==) allows type coercion: '2' becomes 2
    D. 2 === '2' false,  Strict equality (===) checks both value and type: number is not equal to string.
    E. true == 2 false, true becomes 1, so 1 == 2 is false
    F. true === Boolean(2) true, Boolean(2) returns true, and strict equality checks both are true.

15. == is loose equality, compares values after type conversion if needed , === is strict equality, compares both type and value.
   





    
    
    
    
    