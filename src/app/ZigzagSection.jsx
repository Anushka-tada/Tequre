// import React from "react";

// function ZigzagSection({ data }) {
//   return (
//     <div className="container  zig-zag-container">
//       {data?.map((v, i) => {
//         return (
//           <div key={i} className={`zigzag-item ${i % 2 === 0 ? "left" : "right"} my-5 d-flex align-items-center`}>
//             {i % 2 === 0 ? (
//               <>
//                <div className="d-flex flex-column item">
//                <div className="flex-item img-wrapper">
//                   <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img" />
//                 </div>
//                 <div className="flex-item text-wrapper">
//                   <h3 className="smaller-heading">{v.heading}</h3>
//                   <p className="smaller-para">{v.para}</p>
//                   <button className="btn btn-danger shadow smaller-btn" style={{ background: "#C0202E" }}>
//                     Learn More
//                   </button>
//                 </div>
//                </div>
//                 <div className="flex-item empty-side"></div>
//               </>
//             ) : (
//               <>
//                 <div className="flex-item empty-side"></div>
//                <div className="d-flex item flex-column">
//                <div className="flex-item img-wrapper ">
//                   <img src={v.img} className="img-fluid  rounded smaller-img" alt="zigzag-img" />
//                 </div>
//                <div className="flex-item text-wrapper">
//                   <h3 className="smaller-heading">{v.heading}</h3>
//                   <p className="smaller-para">{v.para}</p>
//                   <button className="btn btn-danger shadow smaller-btn" style={{ background: "#C0202E" }}>
//                     Learn More
//                   </button>
//                 </div>
               
//                </div>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ZigzagSection;




import React from "react";
import roadImage from './finalroad.png'; // Adjust the path if necessary

function ZigzagSection({ data }) {
  return (
    <div className="container zig-zag-container">
      <div className="road-wrapper">
        {/* <img src="https://img.freepik.com/premium-vector/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339.jpg?w=360" alt="Road" className="road-image" /> */}
        {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/029/849/702/small/winding-highway-road-from-top-view-flat-illustration-isolated-on-white-background-vector.jpg" alt="Road" className="road-image-2" /> */}
      </div>
      {data?.map((v, i) => (
        <div key={i} className={`zigzag-item ${i % 2 === 0 ? "left" : "right"} my-5 d-flex align-items-center`}>
          {i % 2 === 0 ? (
            <>
              
              <img src="https://img.freepik.com/premium-vector/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339.jpg?w=360" alt="Road" className="road-image" />

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
                      <img src="https://img.freepik.com/premium-vector/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339.jpg?w=360" alt="Road" className="road-image" />

                      <div className="flex-item empty-side"></div>
              <div className="d-flex item flex-column">
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
             
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ZigzagSection;
