1. The bug is that num1 and num2 are being read from input fields as strings, not numbers.
So in let result = num1 + num2 it concatenates them like "2" + "3" = "23" instead of doing math.
3. We need to convert the values to numbers before adding them.
