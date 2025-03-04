import React from "react";
import banner from "../banner.jpeg"

function HeroSection() {
  const cartItem = [
    {
      title: "Responsible use of AI",
      subTitle:
        "Whereas AI has a massive disruptive power for every industry – it is extremely critical to use it responsibly. We ensure the ethical and responsible use of AI in our product framework. ",
    },
    {
      title: "Leveraging the power of AI",
      subTitle:
        "The application of AI should not only be limited to the leading players in the industry. Rather everyone should benefit from this advancement. We ensure access to technology for all players in the industry ",
    },
    {
      title: "Inclusive AI",
      subTitle:
        "Again, AI should not only be limited to a handful of candidates – for example, white-collar employees. We need to expand it to other sectors -e.g. blue collar and grey collar as well. Our multimodal technology is built to address all types of stakeholders. ",
    },
  ];
  return (
    <div className="container marginNavTop">
      <div className=" ">
        <div className="row d-flex justify-content-center heroSectionContent">
          <div className="col-lg-8  col-md-10 col-12 p-2">
            <h1>Build AI Cloud with Kubernetes & Open Source</h1>
            <p className="my-4 we-help-para">
              We help build GPU Cloud, modernize applications and infrastructure with our expertise in cloud native
              technologies.     technologies........
            </p>
          </div>
        </div>

        <div className="mx-lg-5 mx-0">
          <img
            src="https://media-hosting.imagekit.io//884da26ac9cb4ee3/new-banner.jpg?Expires=1835704110&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2L94B8FBFmrMFLDq3xLcqj5rOALQOTcHOi~kfB6BHcgKnfKPM2-EVhvgnzfHZ2N9kc1BAICAdbf56x7KiKeVAScQRzOe3BDCkG1KNQsqw6niKBdKjLrF4skxOCx5qJ9QlKa7RlkGjgzVyQXrBWAYfkJMYKDi2dX4CNfeI6Tm4vC75bHov5WXzHy4nsLRg7pDJoHhjVX8kOpY9VQQfgyuQZJxESnfvboUXuE7QEwGmcewkdYKeGQHA2PB4nFRU8PHi8CSCelvgFNc2QMUa5xcvU2mnHYFUfkNtgi89v7Op1WyWeKN5TmOKpUjhaSIVLLzJlgicZgoJqvKCKU5Ek7yqg__"
            className="img-fluid  banner-img"
             
          />
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
