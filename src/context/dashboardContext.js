import React from 'react';

export default React.createContext({
  tabs: [
    {
        id: 1, 
        title: 'Do', 
        items: [
            {id: 1, text: 'First task'}
        ]
    },
    {
        id: 2, 
        title: 'Check', 
        items: [
            {id: 2, text: 'Second task'}
        ]
    },
  ],
  addTab: (tab) => {},
  addItemToTab: (item, tabId) => {},
  updateItemInTab: (item, tabId) => {},
  removeItemFromTab: (itemId, tabId) => {},
  moveItem: (itemId, source, destination) => {},
});