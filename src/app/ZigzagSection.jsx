
// "use client";
// import Link from "next/link";
// import roadImage from './finalroad.png'; // Adjust the path if necessary
// import { useEffect } from 'react';

// function ZigzagSection({ data }) {
//   useEffect(() => {
//     const handleScroll = () => {
//       const roadImages = document.querySelectorAll('.road-image');
//       const locationBoxes = document.querySelectorAll('.location-box');
//       const screenPosition = window.innerHeight / 1.5;

//       roadImages.forEach((roadImage) => {
//         const roadImagePosition = roadImage.getBoundingClientRect().top;
//         if (roadImagePosition < screenPosition) {
//           roadImage.classList.add('animate');
//         }
//       });

//       locationBoxes.forEach((locationBox) => {
//         const locationBoxPosition = locationBox.getBoundingClientRect().top;
//         if (locationBoxPosition < screenPosition) {
//           locationBox.classList.add('animate');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container zig-zag-container">
//       <div className="road-wrapper">
//         {/* <img src="path_to_image" alt="Road" className="road-image" /> */}
//       </div>
//       {data?.map((v, i) => (
//         <div key={i} className={`zigzag-item ${i % 2 === 0 ? "left" : "right"} my-5 d-flex align-items-center justify-content-md-center justify-content-sm-center`}>
//           {i % 2 === 0 ? (
//             <>
//               <img src="https://media-hosting.imagekit.io//682b7fbff44c40ed/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339-removebg-preview.png?Expires=1835781925&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JScZ7AEJZBlMrtebVgXLDUPYa9jnni0lkH8ZYh2clfYUaLJLER8foiVDDlJ9gla5Z4bo5HbEbavOScCFNtluTAzalDQhzYpKFgmu08HQALfob-7nh3khz1qTZr4rj4sY3xxlzG-CgU9jjPf2x~MIRkjvdmJAEexaiz-CWpWs-WNNk4Ukg-3cE-i5LBnA8jA~YZMDT0hex4-j0PfUAgd3iK5GOwA13rpJfQiqxxBBWo3ITmSQlGL8kGXDG3nzWWgWkj9cI60yz9UbATB9ayooOEjHMMYh5XaLjPw5YvQHIfru-38h7mh2gb43TJzDJfXr7LqXqMrJTrj~KrKAgbcg2g__" alt="Road" className="road-image" />
//               <div className="d-flex flex-column item">
//                 <div className="flex-item img-wrapper">
//                   <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img" />
//                 </div>
//                 <div className="flex-item text-wrapper">
//                   <h3 className="smaller-heading">{v.heading}</h3>
//                   <p className="smaller-para">{v.para}</p>
//                   <Link href={v.link}
//                   className="btn fw-bold text-uppercase shadow smaller-btn" style={{ background: "#fdc11f" }} > Learn More
//                    </Link>
//                 </div>
//               </div>
//               <div className="flex-item empty-side"></div>
//             </>
//           ) : (
//             <>
//               <img src="https://media-hosting.imagekit.io//682b7fbff44c40ed/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339-removebg-preview.png?Expires=1835781925&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JScZ7AEJZBlMrtebVgXLDUPYa9jnni0lkH8ZYh2clfYUaLJLER8foiVDDlJ9gla5Z4bo5HbEbavOScCFNtluTAzalDQhzYpKFgmu08HQALfob-7nh3khz1qTZr4rj4sY3xxlzG-CgU9jjPf2x~MIRkjvdmJAEexaiz-CWpWs-WNNk4Ukg-3cE-i5LBnA8jA~YZMDT0hex4-j0PfUAgd3iK5GOwA13rpJfQiqxxBBWo3ITmSQlGL8kGXDG3nzWWgWkj9cI60yz9UbATB9ayooOEjHMMYh5XaLjPw5YvQHIfru-38h7mh2gb43TJzDJfXr7LqXqMrJTrj~KrKAgbcg2g__" alt="Road" className="road-image" />
//               <div className="flex-item empty-side"></div>
//               <div className="d-flex item flex-column">
//                 <div className="flex-item img-wrapper">
//                   <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img" />
//                 </div>
//                 <div className="flex-item text-wrapper">
//                   <h3 className="smaller-heading">{v.heading}</h3>
//                   <p className="smaller-para">{v.para}</p>
//                   <Link  href={v.link}
//                    className="btn  shadow smaller-btn" style={{ background: "#fdc11f" }}> 
//                    Learn More
//                    </Link>
//                 </div>
//               </div>
//             </>
//           )}
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntxEIpaOLeK37orgiW9F5SGQpD2z2HGYN7mfBh1Y3RSYT9NaWRwIr74dVPzOt_QWvkn0&usqp=CAU" alt="location-box" className="location-box" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ZigzagSection;



"use client";
import Link from "next/link";
import roadImage from './finalroad.png'; // Adjust the path if necessary
import { useEffect } from 'react';

function ZigzagSection({ data }) {
  useEffect(() => {
    const handleScroll = () => {
      const roadImages = document.querySelectorAll('.road-image');
      const locationBoxes = document.querySelectorAll('.location-box');
      const screenPosition = window.innerHeight / 1.5;

      roadImages.forEach((roadImage) => {
        const roadImagePosition = roadImage.getBoundingClientRect().top;
        if (roadImagePosition < screenPosition) {
          roadImage.classList.add('animate');
        }
      });

      locationBoxes.forEach((locationBox) => {
        const locationBoxPosition = locationBox.getBoundingClientRect().top;
        if (locationBoxPosition < screenPosition) {
          locationBox.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container zig-zag-container ">
      <div className="road-wrapper">
        {/* <img src="path_to_image" alt="Road" className="road-image" /> */}
      </div>
      {data?.map((v, i) => (
        <div key={i} className={`zigzag-item ${i % 2 === 0 ? "left" : "right"} my-5 px-3 d-flex align-items-center justify-content-md-center justify-content-sm-center`}>
          {i % 2 === 0 ? (
            <>
              <img src="https://media-hosting.imagekit.io//682b7fbff44c40ed/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339-removebg-preview.png?Expires=1835781925&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JScZ7AEJZBlMrtebVgXLDUPYa9jnni0lkH8ZYh2clfYUaLJLER8foiVDDlJ9gla5Z4bo5HbEbavOScCFNtluTAzalDQhzYpKFgmu08HQALfob-7nh3khz1qTZr4rj4sY3xxlzG-CgU9jjPf2x~MIRkjvdmJAEexaiz-CWpWs-WNNk4Ukg-3cE-i5LBnA8jA~YZMDT0hex4-j0PfUAgd3iK5GOwA13rpJfQiqxxBBWo3ITmSQlGL8kGXDG3nzWWgWkj9cI60yz9UbATB9ayooOEjHMMYh5XaLjPw5YvQHIfru-38h7mh2gb43TJzDJfXr7LqXqMrJTrj~KrKAgbcg2g__" alt="Road" className="road-image" />
              <div className="d-flex flex-column item">
                <div className="flex-item img-wrapper">
                  <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img1"  />
                </div>
                <div className="flex-item text-wrapper">
                  <h3 className="smaller-heading">{v.heading}</h3>
                  <p className="smaller-para">{v.para}</p>
                  <Link href={v.link}
                  className="btn fw-bold text-uppercase shadow smaller-btn text-light" style={{ background: "#da896b" }} > Learn More
                   </Link>
                </div>
              </div>
              <div className="flex-item empty-side"></div>
             <div className="outer-location-box">
             <img src="/assets/left-arrow.png" alt="location-box" className="location-box" />
             </div>
            </>
          ) : (
            <>
              <img src="https://media-hosting.imagekit.io//682b7fbff44c40ed/empty-winding-asphalt-road-fragment-with-marking-horizontal-aerial-view-seamless-highway-template-part-city-street-roadway-isolated-white-background_254622-1339-removebg-preview.png?Expires=1835781925&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JScZ7AEJZBlMrtebVgXLDUPYa9jnni0lkH8ZYh2clfYUaLJLER8foiVDDlJ9gla5Z4bo5HbEbavOScCFNtluTAzalDQhzYpKFgmu08HQALfob-7nh3khz1qTZr4rj4sY3xxlzG-CgU9jjPf2x~MIRkjvdmJAEexaiz-CWpWs-WNNk4Ukg-3cE-i5LBnA8jA~YZMDT0hex4-j0PfUAgd3iK5GOwA13rpJfQiqxxBBWo3ITmSQlGL8kGXDG3nzWWgWkj9cI60yz9UbATB9ayooOEjHMMYh5XaLjPw5YvQHIfru-38h7mh2gb43TJzDJfXr7LqXqMrJTrj~KrKAgbcg2g__" alt="Road" className="road-image" />
              <div className="flex-item empty-side"></div>
              <div className="d-flex item flex-column">
                <div className="flex-item img-wrapper">
                  <img src={v.img} className="img-fluid rounded smaller-img" alt="zigzag-img2 " />
                </div>
                <div className="flex-item text-wrapper">
                  <h3 className="smaller-heading">{v.heading}</h3>
                  <p className="smaller-para">{v.para}</p>
                  <Link  href={v.link}
                   className="btn fw-bold text-uppercase shadow smaller-btn text-light" style={{ background: "#da896b" }}> 
                   Learn More
                   </Link>
                </div>
              </div>
              <div className="outer-location-box">
              <img src="/assets/right-arrow.png" alt="location-box" className="location-box" />
              </div>
            </>
          )}
         
        </div>
      ))}
    </div>
  );
}

export default ZigzagSection;
