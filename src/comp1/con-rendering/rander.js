import React, { useState } from 'react';

const Appran = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleButton = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur consequat.
        {isExpanded ? (
          <>
            <br />
            Phasellus viverra, mauris quis consectetur varius, turpis leo sollicitudin risus, eget sagittis erat augue a dui.
          </>
        ) : null}
      </p>
      <button onClick={toggleButton}>
        {isExpanded ? 'View Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Appran;
