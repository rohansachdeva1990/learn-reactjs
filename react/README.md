# Learn ReactJS

- [Components](./components)
- [Composing Components](./composing-components)
- [Pagination, Filtering and Sorting](/pagination-filtering-sorting)
- [Routing](/routing)
- [Forms](/forms)
- [Calling Backend Services](/calling-backend-services)
- [Authentication and Authorization](/authentication-authorization)
- [Deployment](/deployment)
- [Hooks](/hooks)
- [Context](/context)

## Components

- React.Fragment: For adjacent elements in a component
- '{}' - To write some expression within JSX
- JSX is finally converted into React.createElement(... )
- JSX expression can be returned, saved and passed in to a function, they are just like any other JS expression
- Styles can be applied via - className: add standard css class names - style attribute on JSX - save style in class or inline - `javascript <span style={this.styles} className='badge badge-primary m-2'>`
- Whenever a map() method is used to render a list of items, for each iteam don't forget to set key item
  - The key needs to be unique in that list
- Conditional Rendering
  - JSX does not have if and else like Angular, its not a templating engine
  - Using
    - conditional rendering
    - or logical AND-ing, where the last operand will be returned, if all evaluated truthy
- Handling Events

  - All react elements has properties based on standard DOM events
  - Bind event handlers

    - Using arrow functions (Because 'this' is inherited by default)
    - Binding the handler again in the constructor

    ```javascript

        constructor(){
            super();
            // handleClick is the instance method
            this.handleClick = this.handleClick.bind(this)
        }

    ```

- Updating the state

  - In React, we cannot change the value of the property (internal state) directly
  - We call, this.setState(), which makes react aware of state changes
  - What happens when state changes?
    - When a state changed, detected via setState(...), react will schedule a call to render method
    - At some point in future, render method will be called.
    - React compares the Virtual DOM and the real DOM.
      - Only updates the elements that were actually changed and nothing else is incremented.

- Passing event arguments
  - Instead of passing method reference, we pass an arrow function with defined arguments

## Composing Components

- Pass Data

  - Pass in additional attributes to a component to initialize it with custom configuration
  - Every react component has a property called 'props'.
    - All attributes of a component except 'key' will be a part of props.
    - key is a special attribute to uniquely identify the component
  - Passing Children

    - A special prop that we use to pass something between opening and closing tag of an element

    ```javascript
      <AComponent>
        {//We want to pass something extra within this component}
      </AComponent>

      render() {
          return (
            <div>
              {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value}>
                  <h4>Counter #{counter.id}</h4>
                </Counter>
              ))}
            </div>
        );
      }

      // In component
      render() {
        return (
          <div>
            {this.props.children}
          </div>
        );
     }
    ```

  - What is the difference between props and state?

    - props
      - includes data that we give to a component
      - props is readonly; we cannot change the props value
    - state
      - includes data that is local or private to that components
      - state is invisible to other components
    - If we need to change the value given as props, then we need to store it in the state and then manipulate it

- Raise and Handle Events

  > The component that ows a piece of the state, should be the one modifying it.

  - For eg, Table having N rows. We add a delete button on each row. Now for deleting a row we provide a prop onDelete for each row and that onDelete callback is delegated to the owning entity which handles the state update.
  - Updating the state
    - In react, we do not update the state directly.
    - we cannot pass 'key' property to a component.
  - Single source of truth
    - when our component state is dependent on props, then we should remove that local state and give control to the parent component

- Multiple Components in Sync

  - Lifting state to higher components when we need to share properties amongs sibling components

- Functional Components

  - These are dumb or presentational components
  - We just pass necessary props to them and get transport input from them to upper layers in the component tree

- Lifecycle Hooks

  - There are mainly 3 phases in a React components life

    - Mounting

      - constructor;

        - set the state based on the props received from the outside
        - props should be all set in the super class constructor
        - Called once

      - render

        - When a component is rendered all its children are rendered recursively

      - componentDidMount
        - Here the component has already been mounted
        - Called after the component is rendered in the DOM
        - Perfect place to make ajax call to get data from the server

    - Updating

      - render

        - Happens when state or props of a component changes. So whenever we call a this.setState(...), the owning componet render is called and all it children render is also called recursively.
        - Rendering entire component tree does not mean entire DOM is updated.
        - When update the component a react element is created/updated that is updating the virtual DOM, react will look at the virtual DOM and compare it with old virtual DOM.
        - Then react will only change the elements that were actually updated in the real DOM

      - componentDidUpdate
        - Used for optimization;
        - compare prev props/state with current and if different then do something which takes time

    - Unmounting
      - componentWillUnmount
        - Called when component is actualy removed from the virtual DOM

    > this.setState() cannot be called in the constructor

## Pagination, Filtering & Sorting

- Pagination
  - Lodash for range functionality
- Filtering
  - Using defaultProps, when we don't want to set certain component attributes
- Sorting
  - Use lodash for sorting
  - Raising an event from children to parent

## Routing

- Redirect
- Not Found (404) Pages
- Nested Routing

- Browser Router, passes history object from the browser to the react components.

  - Can be done, by wrapping the App in the BrowserReactor

  ```javascript
  <div className='content'>
    <Route path='/products' component={Products} />
    <Route path='/posts' component={Posts} />
    <Route path='/admin' component={Dashboard} />
    <Route path='/' exact component={Home} />
  </div>
  ```

  - To switch between path
    - Use 'exact'
    - Use 'Switch'
      - Always order to your route from most specific to most generic
  - Link
    - We should avoid reload in single page apps (SPA)
    - check Navbar

- Route
  - https://reactrouter.com/web/example/basic
  - Route component passes 3 additonal props to a encapsulated component
    - history
    - location
    - match
  - Passing Props
    - Besides of passing props from Route, if we need to pass additional props, we use render function
    ```javascript
    // the props from route using
    <div className='content'>
      <Switch>
        <Route
          path='/products'
          render={props => <Products sortBy='newest' {...props} />}
        />
        <Route path='/posts' component={Posts} />
        <Route path='/admin' component={Dashboard} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
    ```
  - Route Parameters
    - When we want to pass parameter in the URL
    - Optional
      ```javascript
      <Route path='/posts/:year?/:month?' component={Posts} />
      ```
      - Should be avoid generally
  - Query String
    - Optional params should be part of query string
    - check posts.jsx
  - Redirect
    - When we want to redirect a user to different URL
  - Programmatic Navigation
    - we use 'history' to navigate through pages
    ```javascript
    // If we want to go to previous page
    this.props.history.replace('/products');
    // OR if we don't want to go previous page
    // Normally, used in login page
    // this.props.history.replace('/products');
    ```
  - Nested Routing
    - check admin

## Forms

- To get value from DOM, use React.createRef() and add ref to the input element
  - and to use the value, this.yourRef.current.value
- Always try to minimize access to DOM

  - Only, when
    - using third part
    - Setting focus on input fileds

  ```javascript
      username = React.createRef();

  componentDidMount() {
    this.username.current.focus();
  }

  // To avoid the page to reload on submission
  handleSubmit = e => {
    e.preventDefault();

    // Call the server, save the changes and redirect to app
    const username = this.username.current.value;
    console.log('submitted: ', username);
  };
  ```

- Controlled vs uncontrolled elements
- Always initialize your form properties state to empty() or some values from the server

- Validation rule library - joi!

  ```javascript
  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      console.log(item.message);
      errors[item.path[0]] = item.message;
    }

    console.log(errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    // Here we have used the computed property, so whatever the value of name, will now become the
    // the lvalue in object definition
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  ```
