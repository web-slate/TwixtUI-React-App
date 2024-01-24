import React from 'react';

const TextArea = ({ value }) => {
  return (
    <textarea className="resize rounded-md">{value}</textarea>
  );
};

export default TextArea;
