import React from 'react';
import { SimpleTable as TwixtSimpleTable } from 'TwixtUI/react'

const fieldConfig = {
  uniqueFieldId: 'id',
  displayFields: [
    { fieldId: 'name', rowStyle: '', cellStyle: 'flex items-center', textStyle: 'text-base font-medium leading-none text-gray-700 mr-2' },
    { fieldId: 'category', rowStyle: 'pl-24', cellStyle: 'flex items-center pl-5', textStyle: 'text-sm leading-none text-gray-600 ml-2' },
    { fieldId: 'dueDate', rowStyle: 'pl-5', cellStyle: 'flex items-center', textStyle: 'text-sm leading-none text-gray-600 ml-2' },
    { fieldId: 'status', rowStyle: 'pl-5', cellStyle: 'flex items-center', textStyle: '' },
    // { fieldId: '_view', rowStyle: 'pl-4', cellStyle: 'flex items-center', textStyle: '' },
  ],
  viewLabel: 'View',
  addLabel: 'Add',
  onViewClick: (id) => {
    console.log('id: ', id)
  },
  onAddClick: (id) => {
    console.log('id: ', id)
  }
}

const fieldData = [
  { id: 1, name: 'Apple', category: 'Urgent', dueDate: '04/07', status: 'Due Today at 18:00' },
  { id: 2, name: 'Banana', category: 'Normal', dueDate: '05/07', status: 'Due Tomorrow' },
  { id: 3, name: 'Cherry', category: 'Low', dueDate: '06/07', status: 'Due in 3 days' },
];

const SimpleTable = () => {
  return (
    <p>simpi</p>
  );
}

export default SimpleTable;
