# Notes

## Case Where Positive Integer Greater Than Array Length
Firstly, no mentioned was made of the case where the positive integer is larger than the length of the array. 

Since `array.length >= positive integer` is not explicitly specified as a requirement, I have written code to change the positive integer to be equal to `array.length` in these cases, with a warning message emitted to the console.


## Interpretation of Requirements
To my reading, there was a degree of ambiguity in the instructions. In a real-world setting I would have asked for clarification. In this case however I have made an assumption, which is explained below. To quote: 

> Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder. 

> Example pseudo-code: 
groupArrayElements([1, 2, 3, 4, 5], 3); 
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ] 

>___________

Although the arithmetic remainder of 5 / 3 is 2, this does not conform to the example given.

I have therefore taken remainder to mean "the remaining elements not yet grouped, once `positive integer - 1` elements of even length have already been added to the output array.

This can produce multiple possible solutions. I have therefore also taken, from the example given, that - where the size of the original array cannot be divided equally by N - the aim is to:

-  _choose a length for the initial even divisions that produces (in the output array) the least difference between the lengths of the initial, even length arrays, and the last array containing remaining elements. _ 

Since this definition would produce the example given, this is the definition I have worked to.
