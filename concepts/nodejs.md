### HTTPS Response Codes
1. Information Responses -> 100 to 199
2. Successful Responses -> 200 to 299
3. Redirects -> 300 to 399
4. Client erros -> 400 to 499
5. Server errors -> 500 to 599

Commont HTTPS status codes  
200 -> Everything is Ok  
201 -> New resource was created.   Usually in Apis during POST/PUT request.  
204 -> Server has fullfilled the request and does not need to return any information.  

304 -> If the browser cache has not been modified it will return 304 otherwise will return 200.  

400 -> The server cannot understand the request. Usually due to missing data, domai validation and invalid formatting.  
401 -> Authentication problem.  
403 -> permission problem.  
404 -> Resource cannot be found on the server.  
409 -> conflict with the current state of the resouce. Usually during simultaneous updates, or versions that conflict with one another.  
410 -> Resource requested is no longer available and will not be available again.

500 -> server error.