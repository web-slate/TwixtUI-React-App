import React from 'react';
import { SimpleTable as TwixtSimpleTable } from 'twixt-ui-react'

const fieldConfig = {
  title: 'Fruits List',
  uniqueFieldId: 'id',
  canShowHeader: true,
  canShowFilter: true,
  canRowThisSelectable: true,
  displayFields: [
    { fieldId: 'name', rowStyle: '', cellStyle: 'flex items-center', textStyle: 'text-base font-medium leading-none text-gray-700 mr-2' },
    { fieldId: 'category', rowStyle: 'pl-24', cellStyle: 'flex items-center pl-5', textStyle: 'text-sm leading-none text-gray-600 ml-2' },
    { fieldId: 'dueDate', rowStyle: 'pl-5', cellStyle: 'flex items-center', textStyle: 'text-sm leading-none text-gray-600 ml-2' },
    { fieldId: 'status', rowStyle: 'pl-5', cellStyle: 'flex items-center', textStyle: '' },
  ],
  addLabel: 'Add',
  onAddClick: (id) => {
    console.log('id: ', id)
  },
  actionButtons: [
    {
      label: 'Edit',
      onClick: (id) => {
        console.log('id will be passed');
      },
    }
  ]
}

const fieldData = [
  {
    id: 1, name: (
      <a href="https://www.apple.com/">Apple</a>
    ), category: 'Urgent', dueDate: '04/07', status: 'Due Today at 18:00'
  },
  { id: 2, name: (
    <a href="https://en.wikipedia.org/wiki/Banana">Banana</a>
  ), category: 'Normal', dueDate: '05/07', status: 'Due Tomorrow' },
  { id: 3, name: 'Cherry', category: 'Low', dueDate: '06/07', status: 'Due in 3 days' },
];

const SimpleTable = () => {
  return (
    <TwixtSimpleTable config={fieldConfig} data={fieldData} />
  );
}

export default SimpleTable;
