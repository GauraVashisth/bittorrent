// DOM(Document Object Model) 
// (standard for how to get, change, add, or delete HTML elements)

/*
1. quick intro to DOM
  js makes the HTML page active and dynamic via the DOM.
  what is DOM/
    * a "PROGRAMMING INTEERFACE" for web documents.
    * DOM is not a progamming language.
    * represents the page so that programs can change the document structure,
      style, and content.
    * the DOM is a tree-like represntation of the web page that gets loaded
      into the browser.
    * the DOM represents the document as "NODE and OBJECTS".
    * w/o it, the js language wouldnt have any model or notion of web pages, 
      HTML documents, SVG documents, and their component parts.
    * web api used to build websites

  accessing the dom:
    when u create a script, whether inline in a <script> element or included in the 
    web page, u can immediately begin using the api for the document or 
    window objects to manipulate the document itself.
    the dom was designed to be independent of any particular programming language,
    making the structurall representation of the document available from a
    single, consistent api.

  DOM contd/ DOM content(often seen in context of "DOMContentLoaded"):
    it represents the web page using a series of objects. the main object is
    the document object, which in turn houses other objects which also 
    house their own objects, and so on.
  
  DOM Tree:
    DOM tree is a tree-like representation of the web page that 
    gets loaded into the browser.

  when a web browser parses an HTML document, it builds a DOM tree and 
  then uses it to display the document.
  lets look at the different objects:
    * The Document Object:
      this is the top most object in the DOM. it has properties and meahods 
      which u can use to get information about the document using a rule known 
      as dot notaton.

difference between an HTMCollection and NodeList:
  * HTML collection:
    1. getElementsByClassName() and getElementsByTagName() meathods
    return a live HTML collection.
    2.  a collection of documen elemennts.
    3. items can be accessed by their name, id, or index number.
    4. it is always a live collection. eg: if u add a <li> element to 
    a list in the DOM, the list in the HTML Collection will also chnage.
  * NodeList:
    1. querySelectAll() meathod returns a static NodeList.
    2. a collection of document nodes (element nodes, attributes nodes,).
    3. items can only be accessed by their index numbers.
    4. most often a static collection. eg: if u add a <li> element to 
    a list in the DOM, the list in NodeList will not chnage.

changing HTML Elements:
Property:                                   Description:
element.innerHTML = new HTML content        Change the inner HTML of an element
element.attribute = new value               Change the attribute value of an element
element.style.property = new style          Change the style of an HTML element
Meathod:                                    Description:
element.setattribute( attribute, value)     Change the attribute value of an HTML element

2. how the DOM represents an HTML document in memory?

3. how to use APIs to create web content and applications*/