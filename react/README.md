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

- Lifecycle Hooks
