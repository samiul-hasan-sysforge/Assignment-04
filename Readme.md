1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Ans:- getElementById gives one HTML element with a specific id. getElementsByClassName gives one or more elements by class name. querySelector and querySelectorAll find elements using CSS selector, where querySelector gives only first match and querySelectorAll gives all match.

2. How do you create and insert a new element into the DOM?
    Ans:- First, create a new element using document.createElement(). Then, insert it into the DOM using methods appendChild().

    Simple way to do it:
    * Create element → <div>
    * Add content/text if i want → div.innerText = "Hello"
    * Insert into page → parentElement.appendChild(div)
    So the steps are: create -> set content/attributes -> insert into DOM.

3. What is Event Bubbling? And how does it work?
    Ans:- Event Bubbling is when event on element goes up to parent. If i click button inside div, button gets event first, then div, then body. It goes from child to parent unless it stop with event.stopPropagation().

4. What is Event Delegation in JavaScript? Why is it useful?
    Ans:- Event Delegation is when i put one event on parent element to handle events for its children. It is useful because we don’t need event on every child, and it works for new elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?
    Ans:- preventDefault() stops the browser’s normal action, like opening a link or submitting a form. stopPropagation() stops the event from going up the DOM, so parent elements don’t get the event.