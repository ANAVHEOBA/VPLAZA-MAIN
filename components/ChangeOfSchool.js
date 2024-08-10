import React, { useState } from 'react';

const ChangeOfSchool = () => {
  const [selectedSchool, setSelectedSchool] = useState('');

  const handleSelect = (event) => {
    setSelectedSchool(event.target.value);
  };

  return (
    <div>
      <h1>Change of School</h1>
      <select value={selectedSchool} onChange={handleSelect}>
        <option value="">Please Select</option>
        <option value="University Of Benin">University Of Benin</option>
        <option value="University Of Calabar">University Of Calabar</option>
        <option value="Benson Idahosa University">Benson Idahosa University</option>
        <option value="University Of Lagos">University Of Lagos</option>
        <option value="University Of Port Harcourt">University Of Port Harcourt</option>
      </select>
      <p>Selected School: {selectedSchool}</p>
    </div>
  );
};

export default ChangeOfSchool;
