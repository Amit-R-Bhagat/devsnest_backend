// import url from "url";

const myUrl = new URL(
  "https://github.com:2000/Amit-R-Bhagat?city=nagpur&status=active"
);

// Serialize URL
console.log(myUrl);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialize query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", 123);
console.log(myUrl.searchParams);
