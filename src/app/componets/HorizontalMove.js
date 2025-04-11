// import React from 'react'

// function HorizontalMove() {
//     return (
//         <div className="">
//             <div className=" container p-3 ">

//                 <h3 className="mb-4 fs-4 text-center">Trusted by leading companies</h3>
//                 <div className="row">
//                     {/* Image 1 */}
//                     <div className="col-lg-2 col-md-4 col-6 mb-3 d-flex justify-content-center">
//                         <img
//                             src="https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-01.svg"
//                             alt="Placeholder 1"
//                             className="img-fluid"
//                         />
//                     </div>
//                     {/* Image 2 */}
//                     <div className="col-lg-2 col-md-4 col-6 mb-3 d-flex justify-content-center">
//                         <img
//                             src="https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-02.svg"
//                             alt="Placeholder 2"
//                             className="img-fluid"
//                         />
//                     </div>
                   
//                     {/* Image 3 */}
//                     <div className="col-lg-2 col-md-4 col-6 mb-3 d-flex justify-content-center">
//                         <img
//                             src="https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-03.svg"
//                             alt="Placeholder 3"
//                             className="img-fluid "
//                         />
//                     </div>
//                     {/* Image 4 */}
//                     <div className="col-lg-2 col-md-4 col-6 mb-3 d-flex justify-content-center">
//                         <img
//                             src="https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-04.svg"
//                             alt="Placeholder 4"
//                             className="img-fluid "
//                         />
//                     </div>
//                     {/* Image 5 */}
//                     <div className="col-lg-2 col-md-4 col-6 mb-3 d-flex justify-content-center">
//                         <img
//                             src="https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-05.svg"
//                             alt="Placeholder 5"
//                             className="img-fluid "
//                         />
//                     </div>
//                     {/* Image 6 */}
//                     <div className="col-lg-2 col-md-4 col-6 mb-3 d-flex justify-content-center">
//                         <img
//                             src="https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-06.svg"
//                             alt="Placeholder 6"
//                             className="img-fluid "
//                         />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HorizontalMove


import React, { useState, useEffect } from 'react';

function HorizontalMove() {
  const [visibleSection, setVisibleSection] = useState(0); // State to track which section is visible

  const sections = [
    ["https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-01.svg",
     "https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-02.svg"],
    ["https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-03.svg",
     "https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-04.svg"],
    ["https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-05.svg",
     "https://www.infracloud.io/assets/img/grey-customers-logo/logos-for-trusted-by-leading-companies-section-06.svg"]
  ];

  useEffect(() => {
    // Automatically scroll to the next section every 3 seconds
    const interval = setInterval(() => {
      setVisibleSection((prevSection) => (prevSection + 1) % sections.length); // Cycle through sections
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sections.length]);

  return (
    <div className="container p-3">
      <h3 className="mb-4 fs-4 text-center">Trusted by leading companies</h3>
      <div className="row d-flex justify-content-center">
        {/* Dynamically display the current section */}
        {sections[visibleSection].map((src, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-6 mb-3 d-flex justify-content-center">
            <img src={src} alt={`Placeholder ${index + 1}`} className=" company-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalMove;

