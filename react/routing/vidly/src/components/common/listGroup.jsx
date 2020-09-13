import React from 'react';

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className='list-group'>
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? 'list-group-item active clickable'
              : 'list-group-item clickable'
          }>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

// When we need to a default properties
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
