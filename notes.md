I learned how to properly connect my vs code development to github. This makes it easy to make changes and be able to reverse those changes especially after big changes. 
----------------------------------
The <link> element in HTML is used to define relationships between the current document and external resources. 
Its primary use is to link external resources like stylesheets (CSS), icon files (favicon), and even RSS feeds to the HTML document.

Rel attribute: The rel attribute specifies the relationship between the current document and the linked resource. 
For example, if you're linking a stylesheet, you use rel="stylesheet" to indicate that this is a stylesheet link.

Type attribute: The type attribute specifies the type of the linked resource. 
For stylesheets, it's usually set to text/css. For icons, it might be image/x-icon.

Href attribute: The href attribute points to the location (URL) of the external resource you want to link.

Media attribute: The media attribute allows you to specify which media/device the linked resource should be applied to, especially for stylesheets. 
Common values are screen, print, or all.

-------------------------------------------

The <div> element is a block-level container in HTML that is used to group and structure content. 
It doesn't have any inherent visual or semantic meaning on its own, 
but it serves as a generic container for organizing and styling content within a web page.

Grouping Content: <div> is often used to group together sections of content or elements on a web page. 
It allows you to apply common styling or layout to a set of related elements.

Styling and Layout: Web developers use <div> elements in conjunction with CSS to apply styling and layout to groups of content. 
For example, you can apply background colors, borders, and positioning to a <div> and its contents.

JavaScript and Interactivity: <div> elements are often targeted for interactivity and scripting using JavaScript. 
Developers can add event handlers and manipulate the content within a <div> dynamically.

Semantic HTML: While <div> is not a semantic HTML element, 
it's often used alongside semantic elements (e.g., <header>, <section>, <article>) to structure content and improve accessibility.

Role in Document Structure: The <div> element helps in organizing and structuring the document's content. 
It's commonly used in layout structures such as columns or grids.

-------------------------------------------

The #title selector targets an HTML element with a specific id attribute value of "title."
It uses an ID selector (#) to select a single element on the page with the matching id.
It has a higher specificity than class selectors (.classname) and element selectors (e.g., div), 
which means it takes precedence when conflicting styles are applied to the same element.
It's typically used to style a unique element on the page. 
In your HTML code, you would have an element like <div id="title">...</div>.

The .grid selector targets HTML elements with a specific class attribute value of "grid."
It uses a class selector (.) to select one or more elements that share the same class.
It has a lower specificity than ID selectors but higher than element selectors.
It's commonly used to style multiple elements with a shared class. 
In your HTML code, you might have several elements like <div class="grid">...</div>.

--------------------------------------------------

Padding is the space between the content of an element and its inner border. 
It defines the spacing within the element itself.
Padding is applied to the inside of an element, affecting the content area.
Padding creates space around the content, separating the content from the element's borders.
If you add padding to a <div>, it will create space between the text or content inside the <div> and the inner border of the <div>.

Margin is the space outside of an element, defining the spacing between the element and its neighboring elements.
Margin is applied to the outside of an element, affecting the space around the element.
Margin creates space around the element, separating it from neighboring elements, creating gaps or spacing between elements.
If you add margin to a <div>, it will create space around the entire <div, affecting its position relative to neighboring elements.

---------------------------------------------------------

Display Property: Understand that the display property with a value of flex is used to create a flex container. 
Elements inside this container become flex items and can be aligned and distributed within the container.

Flex Container: Recognize the HTML element that is designated as the flex container. 
It is typically an element that contains other elements (flex items).

Flex Items: Identify the HTML elements that are considered flex items. 
These elements are children of the flex container and are aligned and distributed within the container.

Flex Direction: Know how the flex-direction property determines the main axis 
(horizontal or vertical) along which flex items are laid out. 
The possible values are row, row-reverse, column, and column-reverse.

Justify Content: Understand the justify-content property, which controls the alignment of flex items along the main axis. 
It has values like flex-start, flex-end, center, space-between, and space-around.

Align Items: Be familiar with the align-items property, 
which controls the alignment of flex items along the cross axis (perpendicular to the main axis). 
Values include flex-start, flex-end, center, and others.

Flex Wrap: Know about the flex-wrap property, 
which determines whether flex items should wrap to the next line if they don't fit within the container. 
Values are nowrap, wrap, and wrap-reverse.

Align Content: Understand the align-content property, 
which controls the alignment of lines of flex items in a multi-line flex container.

Flex Grow, Shrink, and Basis: Familiarize yourself with the concepts of flex-grow, flex-shrink, and flex-basis. 
These properties control how flex items grow, shrink, and establish their initial size.

Nesting Flex Containers: Be aware that you can nest flex containers within other flex containers to create complex layouts.

----------------------------------------------------------

CSS Box Model: Understand that the CSS padding property is part of the CSS Box Model. 
It defines the spacing between an element's content and its inner border.

Value Explanation: Know the value used in the padding property. 
Padding values can be specified in different ways, 
including in pixels (e.g., 10px), percentages (e.g., 5%), or other units (e.g., em, rem). 
The specific value used in the CSS code matters.

Effect on Element: Explain the effect of the padding on the element it's applied to. 
Padding creates space around the content of the element, separating the content from the element's inner border.

Directionality: Recognize that padding can be specified for each side of an element 
(e.g., padding-left, padding-right, padding-top, padding-bottom) or as a shorthand property (e.g., padding: 10px 20px; 
for top/bottom and left/right).

Computation: Be aware that the computed value of padding may be influenced by other CSS properties, 
such as box-sizing. If box-sizing is set to border-box, 
padding may affect the element's dimensions differently than if it's set to content-box.

Usage: Understand the common use cases for applying padding. 
It is often used to create spacing, improve readability, or enhance the aesthetics of an element.

-----------------------------------
Arrow Function Syntax: Know the syntax of arrow functions. 
Arrow functions are written as (parameters) => { function body } or (parameter) => expression. 
They are a concise way to write functions in JavaScript.

Lexical this Binding: Understand that arrow functions have a lexical this binding, 
meaning they inherit the this value from their surrounding code. They do not have their own this context.

Parameters: Be familiar with how parameters are passed to arrow functions and how you can have multiple parameters.

Function Body: Understand the role of the function body. 
It can consist of multiple statements or a single expression. 
If it's a single expression, you can omit the braces {}.

Return Value: Know that arrow functions automatically return the result of the expression when no {} are used. 
If {} are used, you need to explicitly return a value.

-----------------------------------------------

Array map Method: Understand that the map method is used to iterate over each element of an array 
and create a new array with the results of applying a given function to each element.

Callback Function: Be familiar with the callback function used with the map method. 
The function is applied to each element of the array and returns a value for the new array.

Returned Array: Know that the result of the map method is a new array, 
which can contain transformed values based on the callback function's logic.

Iteration: Understand that the map method iterates over every element of the array, 
and the callback function is applied to each element in order.

Common Use Cases: Study common use cases for the map method, such as transforming data, formatting data for rendering, 
or extracting specific properties from an array of objects.

Array Transformation: Recognize that the map method is often used to transform one array into another 
by applying a function to each element.

--------------------------------------------------------------------

DOM Manipulation: Understand how to access and manipulate HTML elements in the DOM using JavaScript. 
The getElementById method is used to retrieve an element with a specific id attribute.

Event Listeners: Be familiar with how event listeners work. 
The addEventListener method is used to attach event handlers to HTML elements. 
It takes two main parameters: the event type (e.g., "click") and the function to be executed when the event occurs.

Callback Function: Know how to define and use callback functions. 
The function provided to addEventListener will be executed when the specified event is triggered on the selected element.

Event Handling: Understand the concept of event handling. 
When the specified event (e.g., "click") occurs on the selected element, the provided function is called.

Output: To answer the question, analyze the provided code snippet to determine what the output or result of the code will be. 
This may involve understanding what happens when the specified element with the given id is clicked and what action is taken.

HTML Structure: Consider the structure of the HTML document in which the element with the specified id exists. 
The output may depend on the surrounding HTML elements and their attributes.

Error Handling: Be aware of potential errors or issues that can arise when using getElementById and addEventListener, 
such as handling cases when the element with the specified id does not exist.

Event Types: Understand the various event types (e.g., click, mouseover, keypress) and how they can be used with event listeners.

------------------------------------------------------

DOM Selection: Understand that the # symbol is used to select an element in the Document Object Model (DOM) by its id attribute. 
When you use a # selector, it's typically used to target a specific element on a web page.

Querying by ID: Be aware that the code line you're asked about likely uses 
a method like document.querySelector or document.getElementById with the # selector. 
These methods are used to retrieve an element by its id.

Element Retrieval: Understand that the line of JavaScript code is used to retrieve the HTML element with the specified id attribute. 
This element can be a specific element on the page with a unique id.

Possible Actions: To answer the question effectively, you need to consider the context in which this line of code is used. 
It may be used for various purposes, such as accessing, manipulating, or interacting with the selected element.

DOM Manipulation: Be familiar with common actions you can perform on the selected element, such as changing its 
content, style, or behavior.

Error Handling: Consider potential issues, such as what happens if the specified id does not exist in the DOM 
or if multiple elements have the same id.

------------------------------------------

The DOM Represents Web Documents: The DOM is a programming interface for web documents. 
It represents the structure and content of a web page in a hierarchical manner, 
allowing programs to interact with the page's elements.

The DOM is Language-Independent: The DOM is not tied to a specific programming language. 
While it is commonly used with JavaScript, it can be used with other languages like Python and Java.

The DOM Is a Tree Structure: The DOM represents the document as a tree structure. 
Each element, attribute, and piece of text in the HTML document is a node in the tree. 
The top node is the "document" object.

The DOM Is Dynamic: The DOM is dynamic and can be modified. 
You can use JavaScript to add, remove, or change elements and content in the DOM. 
These changes are immediately reflected in the web page.

The DOM Allows Interaction: Web developers can use the DOM to interact with web pages. 
This includes accessing and manipulating elements, responding to user events, and changing the content and style of a page.

The DOM Represents HTML and XML Documents: 
While the DOM is most commonly associated with HTML documents, it can also be used with XML documents. 
The DOM for XML is similar to the DOM for HTML.

The DOM Represents a Page's State: 
The DOM represents the current state of a web page, including any changes made by JavaScript or user interactions. 
This allows for real-time updates and interactivity.

The DOM Provides a Consistent API: 
Web browsers provide a standardized API (Application Programming Interface) for working with the DOM. 
This API is available to developers through JavaScript.

The DOM Can Be Traversed: 
You can traverse the DOM tree, moving from one element to another, accessing parent, child, and sibling elements, 
which makes it possible to navigate and manipulate the structure.

The DOM Is Affected by CSS: 
The presentation of the web page, including styles and layout, can be accessed and manipulated through the DOM. 
This allows for dynamic changes in the appearance of a page.

The DOM Can Be Accessed and Manipulated by JavaScript: JavaScript is commonly used to access and manipulate the DOM. 
It provides methods and properties for working with DOM elements.

The DOM Provides a Structured Representation: The DOM organizes elements in a structured manner, 
making it possible to target specific elements and content for manipulation or extraction.

-------------------------------------------

Default Display Value: 
By default, the HTML <span> element has a display property value of inline. 
This means that it is displayed inline with the surrounding content, 
and it does not create a line break before or after the element.

Inline Elements: 
Understanding the inline value is essential. 
Inline elements flow within the content of a block-level element or other inline elements. 
They only take up as much width as necessary 
and do not create new lines in the document flow.

Block-Level Elements: 
Be aware that block-level elements, such as <div>, 
have a default display value of block. 
Block-level elements create a new block formatting context and typically start on a new line,
taking up the full width available.

CSS Properties: 
Recognize that you can change the display property value for HTML elements using CSS. 
This allows you to alter how elements are rendered in the web page.

Other Display Values: 
While the default display property value of <span> is inline, 
you can change it to other values, such as block, inline-block, 
none, or more, to control its layout and behavior.

-------------------------------------
change backround color for all div objects, put in css file linked to html doc
div {
  background-color: blue;
}

-------------------------------------
hyperlinked image
<a href="https://example.com">
  <img src="image.jpg" alt="Description of the image">
</a>

----------------------------------------

CSS box model layers:

Content: This is the innermost layer, where the actual content of the element, 
such as text or images, is placed. It is defined by the width and height properties.

Padding: The padding is the space between the content and the border. It is controlled by the padding properties (e.g., padding-top, padding-right, padding-bottom, and padding-left). Padding provides spacing between the content and the border.

Border: The border surrounds the padding and content. It is defined by properties such as border-width, border-style, and border-color. Borders can be solid lines, dashed, dotted, or other styles.

Margin: The margin is the outermost layer and provides space between the border of the element and neighboring elements. It is controlled by the margin properties (e.g., margin-top, margin-right, margin-bottom, and margin-left). Margins separate one element from another.

----------------------------------------
target specific words to change color
<p id="text">This is a <span class="highlight">word</span> in a sentence.</p>

.highlight {
  color: green;
}

----------------------------

Identify the Loop: 
Determine which part of the code is inside the loop. 
Look for the for loop or any other type of loop (e.g., while, do-while) in the code.

Identify the Iteration Variables: 
If it's a for loop, identify the initialization, condition, 
and update expressions within the parentheses of the for statement. 
These expressions control how many times the loop iterates.

Analyze the Loop Body: 
Examine the code within the loop (the loop body). 
This is the part of the code that will be executed repeatedly.

Trace the Iterations: 
Mentally trace through the iterations of the loop. 
Understand how the loop variable(s) change with each iteration and 
how that affects the code's behavior.

Console.log Statements: 
Identify any console.log statements inside the loop. 
These statements will output values to the browser's console during each iteration.

Consider Conditional Statements: 
Be aware of any conditional statements (e.g., if statements) inside the loop. 
These statements can influence the code's flow and the values that get logged.

------------------------------
<p id="byu">This is the element you want to change.</p>
var element = document.getElementById("byu");
element.style.color = "green";

----------------------------

Paragraph: <p> 

Ordered List: <ol>

Unordered List: <ul> 

Second Level Heading: <h2> 

First Level Heading: <h1> 

Third Level Heading: <h3> 

---------------------------------------

html header
<!DOCTYPE html>

--------------------------------------------

if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}

for (initialization; condition; iteration) {
  // Code to repeat as long as the condition is true
}

while (condition) {
  // Code to repeat as long as the condition is true
}

switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break;
  case value2:
    // Code to execute if expression matches value2
    break;
  default:
    // Code to execute if no cases match
}

---------------------------------
var myObject = {
    property1: 'value1',
    property2: 'value2',
    // Add more properties as needed
};

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

------------------------------------

var person = {
    firstName: 'John',
    lastName: 'Doe'
};

// Add a new property using dot notation
person.age = 30;
---------------------------------

add java file
<script src="myScript.js"></script>

--------------------------------------
// Function to search and replace text in the entire document
function findAndReplaceText(searchText, replacementText) {
    // Get all text nodes in the document
    const textNodes = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    // Loop through each text node
    while (textNodes.nextNode()) {
        const textNode = textNodes.currentNode;
        const text = textNode.textContent;

        // Check if the text node contains the searchText
        if (text.includes(searchText)) {
            // Replace the searchText with replacementText
            textNode.textContent = text.replace(searchText, replacementText);
        }
    }
}
---------------------------------------
JSON is a text-based format: 
JSON data is represented as a string, making it easy to transmit and store data.

JSON is used for data exchange: 
JSON is often used to exchange data between a server 
and a web application or between different parts of an application.

JSON is language-independent: 
JSON can be used with many programming languages, not just JavaScript.

JSON is structured as key-value pairs: 
JSON data is organized into key-value pairs, making it a useful format for structured data.

JSON supports arrays: 
JSON allows you to represent ordered lists of values.

-----------------------------------
chmod: Used to change file permissions in Unix-like operating systems.

pwd: Displays the present working directory, 
showing the directory where you are currently located in the filesystem.

cd: Changes the current directory, allowing you to navigate the file system.

ls: Lists the files and directories in the current directory or a specified location.

vim: A text editor in Unix-like systems that allows you to create and edit text files.

nano: Another text editor in Unix-like systems, which is more user-friendly for beginners.

mkdir: Creates a new directory or folder.

mv: Moves (or renames) files or directories.

rm: Removes (deletes) files or directories. Use with caution, 
as it permanently deletes files.

man: Opens the manual or documentation for a specified command, 
providing information on how to use it.

ssh: Secure Shell, used to access and manage remote systems securely via the command line.

ps: Displays information about currently running processes, 
useful for monitoring and managing system processes.

wget: A command-line utility for downloading files from the internet.

sudo: 
Stands for "superuser do" and is used to execute commands with superuser privileges, 
often requiring a password.
--------------------------------------

The console command that creates a remote shell session is ssh (Secure Shell). 
ssh is used to establish a secure and encrypted connection to a remote server or computer, 
allowing you to access and manage the remote system's shell or command prompt. 
With ssh, you can log in to a remote machine and work on it 
as if you were physically present at the remote location. 
This is a common method for remote server administration and secure remote access.

----------------------------------------

When the -la parameter is specified for the ls console command:

-l: This flag stands for "long format" and displays detailed information 
about files and directories, including file permissions, owner, group, file size, 
modification date, and the file or directory name.

-a: This flag stands for "all" and includes hidden files and 
directories in the listing. Hidden files and directories in Unix-like systems 
typically start with a dot (e.g., .hiddenfile).

---------------------------------------

sub.sub.root.TLD

---------------

a web certificate, specifically an SSL/TLS certificate, is necessary to use HTTPS

-------------------

An A record cannot directly point to another A record

----------------------
Port 443 is reserved for the HTTPS (Hypertext Transfer Protocol Secure) protocol. 
HTTPS is used for secure and encrypted communication over the web, 
and it is commonly used for secure web browsing and transmitting sensitive data.

Port 80 is reserved for the HTTP (Hypertext Transfer Protocol) protocol. 
HTTP is used for standard, unencrypted web communication and is the default port for 
web traffic.

Port 22 is reserved for the SSH (Secure Shell) protocol. 
SSH is used for secure remote access and administration of servers and network devices.
----------------------
Promises

Promise States: 
Understand the three states of a Promise: "pending," "fulfilled," and "rejected." 
Promises transition from "pending" to either "fulfilled" or "rejected" when they settle.

Creating Promises: 
Know how to create a new Promise using the Promise constructor. 
Promises typically take a callback function with resolve and reject parameters.

Chaining Promises: 
Learn how to chain Promises using methods like .then(), .catch(), and .finally(). 
Promises can be sequenced to execute asynchronous tasks in a specific order.

Error Handling: 
Understand how to handle errors and exceptions in Promises using the .catch() method. 
This is crucial for handling rejected Promises.

Asynchronous Operations: 
Be aware that Promises are used to manage asynchronous operations, 
such as network requests, file I/O, and timers.
 Promises simplify working with these tasks.

Promise.all(): 
Learn how to use Promise.all() to wait for multiple Promises to resolve. 
It returns a Promise that fulfills when all of the input Promises fulfill or rejects 
if any of them reject.

Async/Await: 
Know how to work with the async and await keywords, 
which provide a more readable and synchronous-like way of dealing with Promises.

