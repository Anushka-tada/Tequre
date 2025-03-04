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
        <div className="row d-flex justify-content-center heroSectionContent ">
          <div className="col-lg-8  col-md-10 col-12 p-2">
            <h1>Build AI Cloud with Kubernetes & Open Source</h1>
            <p className="my-4 we-help-para">
              We help build GPU Cloud, modernize applications and infrastructure with our expertise in cloud native
              technologies.    
            </p>
          </div>
        </div>

        <div className="mx-lg-5 mx-0 d-flex justify-content-center">
          <img
            src="https://media-hosting.imagekit.io//66a1b907fd2449ac/new-banner2.png?Expires=1835781552&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cZMWSF1hagdNhTyVHjhCxVPteFnPy~UJX3I70NnajauIhAgHmk3~3zLQGhDZQTZK13iagRfYb47Nnqia2qhg6fjQhJ12XJQDLHyVnbnfHeuh8dBmqaCG777yMMgZAmg8~5v2ibhMGs9-~6qLf~ipI~Q5WTUFGxG5GKE9pH1GsiXV6gncWCwulCLdDn~ptNIc6QHN34lGNIhs8~XQ3Tt~VukCdjxQssVvGCU1EsPFgbFADO6gFBfqctq1lIpBnts6qDYLb6GE1t0QlVNXixRsrnS3jNxlj2OCbJ0SLh3QOwf2AgkQqs5tAgH19Kxy5ieWCrZEHifKCEJFPg~VD1W8ng__"
            className="img-fluid  banner-img"
             
          />
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
