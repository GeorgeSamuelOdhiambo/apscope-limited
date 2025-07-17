// // src/components/Values.js
// import React from 'react';
// import { values } from '../data';

// const Values = () => {
//   return (
//     <section className="values">
//       <div className="container">
//         <div className="section-header">
//           <h2>Our Core Values</h2>
//           <p>The principles that guide everything we do</p>
//         </div>
        
//         <div className="values-grid">
//           {values.map((value, index) => (
//             <div className="value-card" key={index}>
//               <div className="value-icon">
//                 <i className={`fas ${value.icon}`}></i>
//               </div>
//               <h3>{value.title}</h3>
//               <p>{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Values;


// src/components/Values.js
import React from 'react';
import { values } from '../data';

const Values = () => {
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p className="subtitle">The fundamental principles that guide our decisions and actions</p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;