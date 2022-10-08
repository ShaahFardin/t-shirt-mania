import React from 'react';
import Mother from '../Mother/Mother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
      <div>
        <h2>Father</h2>
        <p>House {house}</p>
        <section className="flex">
          <Mother house={house}></Mother>
          <Myself house={house}></Myself>
          <Sister house={house}></Sister>
        </section>
      </div>
    );
};

export default Father;