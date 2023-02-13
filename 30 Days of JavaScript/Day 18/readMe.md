What was learn on Feb. 12, 2023:

    A. Promise: A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's 
                eventual success value or failure reason.

    B. States of Promise:   (i)   pending: initial state, neither fulfilled nor rejected.
                            (ii)  fulfilled: meaning that the operation completed successfully.
                            (iii) rejected: meaning that the operation failed.

    C. Promise Methods: (i)   .then()  -----
                                            |-->  Both return promise and can be chained
                        (ii)  .catch() -----


    D. Promise Constructor: A promise is created using the Promise constructor. We can create a new promise using the key word `new` 
                            followed by the word `Promise` and followed by a parenthesis. Inside the parenthesis, it takes a `callback` function. The promise callback function has two parameters which are the _`resolve`_ and _`reject`_ functions.

    E. Fetch API: Fetch API provides an interface for fetching resources (including across the network).

    F. Aysnc and Awaits: The word _async_ in front of a function means that function will return a promise. The above square function 
                         instead of a value it returns a promise. To access the value from the promise, we will use the keyword _await_.