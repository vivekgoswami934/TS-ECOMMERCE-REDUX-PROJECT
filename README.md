##

1. Set up routing
2. Set up Chakra UI
3. Define the common types
4. Set up Redux architecture

5. To setup homepage and render products in the UI
6. To create authenticated routes, with login page

7. Filtering
8. Edit Product

activePage
perPage = 2
totalProducts

activePage -> Product 1 Index, Product 2 Index
1 -> 0,1
2 -> 3,4
3 -> 5,6
4 -> 7,8
5 -> 9,10

can you come up with any expression that satisfies the above condition.

index >= 2 _ (activePage - 1) && index < 2 _ activePage
