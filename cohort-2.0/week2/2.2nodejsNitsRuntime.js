// Topic: Node.js and its runtime
/*some jargons:
what is ECMA script?
  ECMAScript is a scripting language specification on which javascript is based.
  https://tc39.es/ecma262/#sec-numbers-and-data
    above website clearly tells the javascript standard
  ECMAScript: the-specification
    ecmascript is a scripting language specification standardized by Ecma International in the ECMA-262 and ISO/IEC 16262 documents.
    it serves the guideline or the 'rules' for scripting language design.
    ecma script versions are essentially updates to the specification, introducing new features and syntaxes. 

what is javascript?
  js is a scripting language that conformsto te ECMAScript specification. its the most widely known and
  used implementation of ECMAScript, like data, var, const, let, function.
  js includes additional features that are not the part of the ECMAScipt specification,
  like DOM manippulation(which is crucial for web development but isnt defined by ECMASipt), setTimeout, fs.readFile

  common js browser engines:
    v8: used by google chrome/chromium, open-source and written c cpp
    spiderMonkey: used by frefox and written in c rust
what is node.js?
  some smart epople took out the v8 engine, added some backend things (filesystem reads) on top
  to create a new runtime to compete with BE languaages like java.
  js was never meant to be run in the backend, eventually became very popular and 
  is a popular choice of runtime on the backend.

what is bun?
  other than the fact that js is single threaded, node.js is slow(multiple reasons for it),
  some smart people said they wanted to re-write the js runtime for the backend and introduced Bun.
  its a significantly faster runtime.
  its written in zig.
*/

/* what can u do w/ node.js?
  1. create clis
  2. create a video player
  3. create  a game
  4. create a *http server*

what is HTTP server?
  // Hyper Text Transfer Protocol
  * protocol that is defined for machines to communicate and its specially for websites, and
  its the most common way for ur website's frontend to talk to its backend

  1. some code that follows the HTTP protocol and is able to communicate with
  clients(browsers/ mobile apps...)
  2. think if it to be similar to call app in your phone which letsu communicate w/ ur friends

  in the end, its the client throwing some information at the server, 
  server doing something with that info and server responding back with the final result.
   1. think of them as functions, where arguments are something the client sends
   2.rather than calling a function using iys anme, the client uses a URL
   3. rather than calling function body, the server does something w/ the request
   4. rather than the function returning a value, server responds w/ somme data


  // HTTP Protocol
  things client needs to worry about while sending the request/HTTP(client side):
    * protocol (http/https)
    * address(url/ ip/ port)
    * route
    *  header, Body, Query parameters
    * meathod
  things server needs to worry about while responding requests/HTTP (srver side)::
    * response header
    * response body
    * status codes
  usually communication happen like this:
  //for client side:
    https://chat.openai.com/backend-api/conversation
   protocol     url                 route
    Header: cookie - 123as@3325D3@!e223
      with header u send ur authentication information(that ure logged in)
      cookie is one of many header i can send
    Body: what is 2+2 (usually in JSON)
      whenever sending a request to backend, u ask it to do something 
      alike functions, body is main sort of argument u send
    Meathod: POST
      meathod specifies what kind of request ure sending
      adding something/put some data on server - POST
      get some data - GET
      update something - PUT
      deleting something - DELETE
      - POSTHANDLer 
      - GETHANDLER
  //for server side:
    Response Header: ---
    Response Body: 2+2 is equal to 4
    Status code: 200
  //common status codes the backend resonds with:
    1. 200 - everything okay
    2. 404 - page/ route not found
    3. 403 - authentication issues
    4. 500 - internal server error
    // why do we need status codes?why cant we just return in the body something like success
    // why do we need body/ headers/ query parameters, why cant just one work?
      these are standard practices, u dont need all of it, but its what
      is mentioned in the spec and hence is good to follow
  // things that happen in ur browser after u fire this request:
  (we'll get to know how to fire request to a backend server later)
    1. browser parses the URL
    2. does a DNS Lookup(converts google.com to an IP)
    3. establishes a connection to the IP (des handshake..)

  //what is DNS resolution:
    URL are just like contacts in ur phone
    in the end, they map to an IP
    if u ever buy a URL of ur own, u'll need to point it to the IP of your server
  
  //things tha happen on ur server after the request is received:
    1. u get the inputs(route body, headers)
    2. u do some login on the input, calculate the output
    3.  u return the output body, headers and status code
*/