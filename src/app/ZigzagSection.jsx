import React from "react";

function ZigzagSection({ data }) {
  return (
    <div className="container  zig-zag-container">
      {data?.map((v, i) => {
        return (
          <div key={i} className={`zigzag-item ${i % 2 === 0 ? "left" : "right"} my-5 d-flex align-items-center`}>
            {i % 2 === 0 ? (
              <>
               <div className="d-flex flex-column item">
               <div className="flex-item img-wrapper">
                  <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img" />
                </div>
                <div className="flex-item text-wrapper">
                  <h3 className="smaller-heading">{v.heading}</h3>
                  <p className="smaller-para">{v.para}</p>
                  <button className="btn btn-danger shadow smaller-btn" style={{ background: "#C0202E" }}>
                    Learn More
                  </button>
                </div>
               </div>
                <div className="flex-item empty-side"></div>
              </>
            ) : (
              <>
                <div className="flex-item empty-side"></div>
               <div className="d-flex item flex-column">
               <div className="flex-item img-wrapper ">
                  <img src={v.img} className="img-fluid  rounded smaller-img" alt="zigzag-img" />
                </div>
               <div className="flex-item text-wrapper">
                  <h3 className="smaller-heading">{v.heading}</h3>
                  <p className="smaller-para">{v.para}</p>
                  <button className="btn btn-danger shadow smaller-btn" style={{ background: "#C0202E" }}>
                    Learn More
                  </button>
                </div>
               
               </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ZigzagSection;




// import React from "react";

// function ZigzagSection({ data }) {
//   return (
//     <div className="container zig-zag-container">
//       {data?.map((v, i) => {
//         return (
//           <div key={i} className="zigzag-item-container position-relative">
//             {i < data.length - 1 && (
//               <div className="road-wrapper">
//                 <svg width="50px" height="200px" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" className="road">
//                   <path
//                     id="Path_31636"
//                     data-name="Path 31636"
//                     d="M77.01,0c7.576,59.164-54.74,197.638-9,426.278,29,144.963-35,343.032-48.214,441.494C-11.99,1063.541,97.51,1207.787,78.01,1375c-15.76,135.143-91.963,369.682-73,582.724,14.5,162.9,91.746,388.339,43,628.653-6.647,32.769-10.037,75.008-11.494,118.435"
//                     transform="translate(-2 0.002)"
//                     fill="none"
//                     stroke="#fff"
//                     stroke-miterlimit="10"
//                     stroke-width="4"
//                     stroke-dasharray="19 19"
//                   ></path>
//                 </svg>
//               </div>
//             )}
//             <div className={`zigzag-item ${i % 2 === 0 ? "left" : "right"} my-5 d-flex align-items-center`}>
//               {i % 2 === 0 ? (
//                 <>
//                   <div className="d-flex flex-column item">
//                     <div className="flex-item img-wrapper">
//                       <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img" />
//                     </div>
//                     <div className="flex-item text-wrapper">
//                       <h3 className="smaller-heading">{v.heading}</h3>
//                       <p className="smaller-para">{v.para}</p>
//                       <button className="btn btn-danger shadow smaller-btn" style={{ background: "#C0202E" }}>
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex-item empty-side"></div>
//                 </>
//               ) : (
//                 <>
//                   <div className="flex-item empty-side"></div>
//                   <div className="d-flex item flex-column">
//                     <div className="flex-item img-wrapper">
//                       <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img" />
//                     </div>
//                     <div className="flex-item text-wrapper">
//                       <h3 className="smaller-heading">{v.heading}</h3>
//                       <p className="smaller-para">{v.para}</p>
//                       <button className="btn btn-danger shadow smaller-btn" style={{ background: "#C0202E" }}>
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ZigzagSection;
