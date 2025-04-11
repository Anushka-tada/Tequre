"use client"

import React from "react";

import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import HorizontalMove from "../componets/HorizontalMove";
import WeOpenSource from "../componets/WeOpenSource";


const ProductEngineering = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 py-1"></div>
      <div className="section1">
        <div className="">
          <div className="container mb-5">
            <div className=" row ">
              <div className="mt-5 col-md-6 col-12 ">
                <h2 className="mb-3 fw-bold">
                  Innovating Excellence in Product Engineering
                </h2>
                <p className="mb-4 text-gray medium-text">
                  "Our trusted product engineering services help you design and
                  deliver innovative products quickly and efficiently, ensuring
                  high performance and lasting value.
                </p>
                <button
                  className="btn px-4 py-2 text-light"
                  style={{ background: "#C0202E", border: "none" }}
                >
                  Talk to Expert
                </button>
              </div>

              <div className="col-md-6 col-12 ">
                <img
                  src="https://www.infracloud.io/assets/img/product-engineering/svg/illustration-product.svg"
                  alt="Logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <HorizontalMove />
      </div>

      <div className="section3 d-flex flex-column align-items-center my-5 px-3  py-5">
        <h2> Product Engineering From the Experts </h2>
        <p>  Our cloud native product development experts help you with end-to-end product development & support.</p>
        <div className="product-cards d-flex gap-3 flex-wrap my-5 justify-content-center">
          <div className="product-card d-flex flex-column gap-3 shadow align-items-start p-4 ">
            <img src="https://www.infracloud.io/assets/img/lps/devops-consulting/svg/training-icon.svg" />
            <h5>On-demand Engineers</h5>
            <p> Get cloud native product engineers on demand. No more waiting to expand your team. </p>
          </div>

          <div className="product-card d-flex flex-column gap-3 shadow align-items-start p-4">
            <img src="https://www.infracloud.io/assets/img/lps/devops-consulting/svg/developers-icon.svg" />
            <h5>Cloud Native Expertise</h5>
            <p>Get cloud native engineers with expertise in Go, Python, Kubernetes, and other cloud native tech.</p>
          </div>

          <div className="product-card d-flex flex-column gap-3 shadow align-items-start p-4">
            <img src="https://www.infracloud.io/assets/img/lps/devops-consulting/svg/training-icon.svg" />
            <h5>Additional Bandwidth</h5>
            <p>Get additional engineering bandwidth for rapid prototyping and cloud native product development</p>
          </div>

          <div className="product-card d-flex flex-column gap-3 shadow align-items-start p-4">
            <img src="https://www.infracloud.io/assets/img/lps/devops-consulting/svg/expertise-icon.svg" />
            <h5>Outsourced MVP</h5>
            <p> Not sure about the idea? Build the MVP of your product with InfraCloud’s cloud native domain knowledge.</p>
          </div>

          <div className="product-card d-flex flex-column gap-3 shadow align-items-start p-4">
            <img src="https://www.infracloud.io/assets/img/lps/devops-consulting/svg/certified-icon.svg" />
            <h5>Product Support</h5>
            <p>Get world class APAC and EMEA cloud native support for your cloud product with us.</p>
          </div>

          <div className="product-card d-flex flex-column gap-3 shadow align-items-start p-4">
            <img src="https://www.infracloud.io/assets/img/home/ab-images/expand-easily.svg" />
            <h5>Cost Saving</h5>
            <p> Save on cost with optimized cloud native solutions that help you ship products faster. </p>
          </div>
        </div>
      </div>


      <div className="section4 d-flex flex-column align-items-center my-5 px-3 py-5">
         <h1>Accelerate your Product Development Journey </h1>
         <p>We help companies build products in the following areas:</p>
         <div className="d-flex gap-3 flex-wrap m-5 justify-content-center">
          <div className="area d-flex flex-column gap-3 shadow align-items-center p-4">
              <img src="https://www.infracloud.io/assets/img/product-engineering/cloud-native-icon.svg"/>
              <h5>Cloud Native</h5>
          </div>
          <div className="area d-flex flex-column gap-3 shadow align-items-center p-4">
              <img src="https://www.infracloud.io/assets/img/product-engineering/security-icon.svg"/>
              <h5>Software Security</h5>
          </div>
          <div className="area d-flex flex-column gap-3 shadow align-items-center p-4">
              <img src="https://www.infracloud.io/assets/img/product-engineering/devops-icon.svg"/>
              <h5>DevOps/DevSecOps</h5>
          </div>
          <div className="area d-flex flex-column gap-3 shadow align-items-center p-4">
              <img src="https://www.infracloud.io/assets/img/product-engineering/cloud-infrastructure-icon.svg"/>
              <h5>Cloud Infrastructure</h5>
          </div>
         </div>
      </div>

      {/* ===================================================================================================================================== */}
      <WeOpenSource />
      {/* ======================================================================================================================================== */}

      {/* =================================================================================================================================== */}

      <div className="mt-5 top-to-bottom-color">
        <div className=" container mt-5 mb-5">
          <div className=" text-center">
            <h3 className="fw-bold py-2">Product Engineering Resources</h3>
          </div>

          <div className="row  p-3 d-flex justify-content-evenly mt-5 ">
            {/* Child Div 1 */}
            <div className=" col-md-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/blog/blog-updated-creatives/index-image/announcing-bot-framework-sdk-for-go-1200x628.png"
                  alt="Example Image"
                  className="img-fluid mb-3"
                />
              </div>

              <div className="position-relative mt-3 py-3">
                <span
                  className="fs-6 position-absolute bottom-100 px-4 py-2 rounded"
                  style={{
                    backgroundColor: "lavender",
                    color: "blue",
                  }}
                >
                  Blog
                </span>

                {/* Heading */}
                <h5 className="mb-2 ">Announcing Bot Framework SDK for Go </h5>
              </div>
            </div>

            {/* Child Div 2 */}
            <div className="col-md-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/customers/building-a-cloud-native-software-defined-storage-platform.png"
                  alt="Example Image"
                  className="img-fluid mb-3"
                />
              </div>

              <div className="position-relative mt-3 py-3">
                <span
                  className="fs-6 position-absolute bottom-100 px-4 py-2 rounded"
                  style={{
                    backgroundColor: "lavender",
                    color: "blue",
                  }}
                >
                  Case Study
                </span>

                {/* Heading */}
                <h5 className="mb-2 ">
                  Building a Cloud Native Software Defined Storage Platform
                </h5>
              </div>
            </div>

            {/* Child Div 3 */}
            <div className="col-md-3 col-12 hover-effect hover-shadow">
              {/* Image */}
              <div>
                <img
                  src="https://www.infracloud.io/assets/img/devtalk-details/tinkerbell-automated-baremetal-provisioning-engine.png"
                  alt="Example Image"
                  className="img-fluid mb-3"
                />
              </div>

              <div className="position-relative mt-3 py-3">
                <span
                  className="fs-6 position-absolute bottom-100 px-4 py-2 rounded"
                  style={{
                    backgroundColor: "lavender",
                    color: "blue",
                  }}
                >
                  Tech Talk
                </span>

                {/* Heading */}
                <h5 className="mb-2 ">
                  Tinkerbell: An Automated Bare Metal Provisioning Engine
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================================================================ */}

      <Footer />
    </>
  );
};

export default ProductEngineering;
