import React, { useReducer } from 'react';
import uuid from 'uuid';
import DashboardContext from './dashboardContext';
//importing actions
import {addItemToTab, removeItemFromTab, moveItem, addTab, updateItemInTab} from './actions';
import dashboardReducer from './reducer';

const initialState = {
    tabs: [
        {
            id: 'tab-'+uuid(), 
            title: 'Do', 
            items: [
                {id: 'item-'+uuid(), text: 'First task'}
            ]
        },
        {
            id: 'tab-'+uuid(), 
            title: 'Check', 
            items: [
                {id: 'item-'+uuid(),  text: 'Second task'}
            ]
        },
    ]
};

const GlobalState = props => {

  const [tabsState, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    // Add state and functions to the context.
    <DashboardContext.Provider
      value={{
        tabs: tabsState.tabs,
        addItemToTab: addItemToTab(dispatch),
        updateItemInTab: updateItemInTab(dispatch),
        addTab: addTab(dispatch),
        removeItemFromTab: removeItemFromTab(dispatch),
        moveItem: moveItem(dispatch),
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default GlobalState;