# Learn ReactJS

- [Components](/components)
- [Composing Components](/composing-components)
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
