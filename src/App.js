import React from 'react'
import InputSingleLine from '../TwixtUI/react/InputSingleLine'

// Components.
import { ErrorHandler } from '@tw/components'

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
      setValue(e.target.value);
  };

  const handleBlur = () => {
      console.log('Input field lost focus');
  };

  return (
    <>
      <ErrorHandler>
        <h1>Light React App with TwixtUI</h1>
        <div>
          <InputSingleLine
            label="Field Name"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            error={value === '' ? 'Field cannot be empty' : ''}
            warning={value.length > 0 && value.length < 5 ? 'Text is too short' : ''}
          />
        </div>
      </ErrorHandler>
    </>
  )
}

export default App
