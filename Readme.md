/\*
planning for food ordering App
Header
-Logo
-Nav-Items

Body
-Search
-Restro-Container
-Restro-Card

Footer
-Copyright
-Links
-Address
\*/

# props is basically passing arguments to a function - so we pass props(properties to function component)

# React-hooks

- useState()

* its a javashcript utility function which takes two arguments as array and has a default value set according to our wish
* When a react state changes it re-renders the whole component

- useEffect()

* it takes two arguments 1st is callback function and a array, it executed after the component is rendered.

# how react works behind the scene?

- virtual Dom is the javascript representation
- reconcilation algorithm(React Fibre)

* this basically updates the

# why React is fast?

- React efficiently updates Dom by finding difference between the virtual DOM.
-

# react router dom

- in react instead of using anchor tag(a href) use link component from react-router-dom .
- anchor tag refreshes the whole page which makes app slow where else the link only refreshes the component which is in the route.
- this is called client side routing
- a href is server side routing
