import React from "react";
import banner from "../banner.jpeg";

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
    <div class="position-relative outer-div">
  <div class="homepage pt-5 d-flex  justify-content-center  gap-0 px-lg-5 px-xl-5 px-md-3 px-2">
    <div class="home-text ps-xl-4 ps-lg-4 ps-md-4 ps-0">
      <h1 class="heading">BUILD AI CLOUD WITH </h1>
      <span class="head2">KUBERNETES & OPEN SOURCE</span>
      <p class="para mt-3  me-xl-5 me-lg-5 me-md-5 me-sm-4 me-0">
        we help build gpu cloud, modernize applications and infrastructure
        with our expertise in cloud native technologies
      </p>
    </div>
    <div class="hero-image">
      <img src="/assets/heroimage.png" alt="Hero" class="img" />
    </div>
  </div>

  <div class="circle-container position-absolute">
    {/* Content of your website */}
  </div>
</div>

  );
}

export default HeroSection;
