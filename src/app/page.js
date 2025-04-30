"use client";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import ContactSection from "./componets/ContactSection";
import Footer from "./componets/Footer";
import ZigzagSection from "./ZigzagSection";
import { useState } from "react";

export default function Home() {
  const cloudData = [
    {
      img: "/assets/home1.png",
      heading: "Build GPU Cloud",
      para: "Build an AI Cloud with GPUs or other processing units & open source technologies. Our expertise in bare metal provisioning with Tinkerbell, private cloud with OpenStack and cloud native technologies such as Kubernetes, Prometheus, and Kubeflow have enabled organizations to build private/public GPU cloud.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/home2.png",
      heading: "CI/CD for Code, Data & Models",
      para: "Setting up the right source code practices & a way to continuously integrate and deliver code along with data & models is crucial for the success of an AI platform. We have coached on practices that work & built pipelines for organizations to deliver business goals to production seamlessly.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/home3.png",
      heading: "Workflow Orchestration",
      para: "Orchestrating the workflows of data pipelines and executing them at scale is crucial to an AI platform. We build, deploy, and scale workflow orchestration systems on scalable infrastructure to execute them at the speed of business needs.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/home4.png",
      heading: "Model Registry & Metadata Stores",
      para: "A distributed & stable model registry needed to serve the right model when an application is needed is crucial for an AI platform that is global in nature. It is also crucial to capture the right metadata of models in a registry or separate database, depending on business needs.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/home5.png",
      heading: "Feature Stores",
      para: "A feature store that can serve the needs of model training as well as in the prediction request path is needed for the AI platform to deliver value to both sets of customers successfully. We build & deploy these on right infrastructure based on the needs of the business.",
      link: "/ai-cloud",
    },

    {
      img: "/assets/home6.png",
      heading: "Model Serving",
      para: "Serving models to end users in request path, with accuracy & low latency not only improves user experience but also business value. We deploy and configure the serving components to deliver to users.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/home7.png",
      heading: "Model Observability & Feedback Loops",
      para: "Redirecting requests to the right model and observing the accuracy of results & model performance is crucial to ensuring the intended & actual business outcomes are aligned. We use a combination of infra and model observability technologies to achieve this.",
      link: "/ai-cloud",
    },
  ];
  const cloudNativeApsData = [
    {
      img: "/assets/native(1).png",
      heading: "Containerization & Microservices",
      para: "Helping you start your cloud-native journey by adopting containers and if needed moving from monolithic architecture to microservices architecture. We understand the needs of your business and introduce the right architecture, maximizing the returns of effort and minimizing the TCO (Total Cost of Ownership).",
      link: "Learn More ->",
    },
    {
      img: "/assets/native(2).png",
      heading: "CI, CD, GitOps & Progressive Delivery",
      para: "Delivering applications to the end user with right quality and fast is key. From microservice to ML models being deployed to Kubernetes or an edge location. We understand the goals and build the right CI/CD architecture with practices such as GitOps & progressive delivery.",
      link: "ci-cd-consulting",
    },
    {
      img: "/assets/native(3).png",
      heading: "Platform Engineering & IaC",
      para: "Trusted by CNCF as ‘Kubernetes Certified Service Provider’ (KCSP), we help in designing and building a solid platform for your teams. Our professional Kubernetes consulting services include cloud-native architecture consulting, design, and managed services.",
      link: "low-code-platform",
    },
    {
      img: "/assets/native(4).png",
      heading: "Observability & Security Platform",
      para: "A platform scales as good as a system that can observe it. We help build an observability system based on needs of the application along the axis of logs, metrics & traces with right dashboards and alerting system. This layer also allows building solid security on top of observed data.",
      link: "Learn More ->",
    },
    {
      img: "/assets/native(5).png",
      heading: "Networking - Service Mesh, API Gateway",
      para: "Modern applications require a well-designed layer of secure networking that spans within and across clusters of compute. We have implemented Consul, LinkerD, Istio, and commercial distributions of these technologies for customers to build and scale the networking layer.",
      link: "Learn More ->",
    },

    {
      img: "/assets/native(6).png",
      heading: "DevSecOps & Compliance",
      para: "Startups, as well as enterprises, consider us trusted service providers for DevSecOps services and policy enforcement. With deep expertise in projects like Calico, OPA, Falco, etc., we help you with end-to-end cloud-native security services.",
      link: "Learn More ->",
    },
    {
      img: "/assets/native(7).png",
      heading: "Kubernetes Consulting",
      para: "Based on our deep expertise we offer Kubernetes Consulting and implementation services. We achieve this with our OSS tools, Managed Services, technologies from the partner ecosystem, and unparalleled understanding of the enterprise value stream.",
      link: "kubernetes-monitoring-tool",
    },
  ];
  const cloudConsultingData = [
    {
      img: "/assets/1.png",
      heading: "Build GPU Cloud",
      para: "Build an AI Cloud with GPUs or other processing units & open source technologies. Our expertise in bare metal provisioning with Tinkerbell, private cloud with OpenStack and cloud native technologies such as Kubernetes, Prometheus, and Kubeflow have enabled organizations to build private/public GPU cloud.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/2.png",
      heading: "CI/CD for Code, Data & Models",
      para: "Setting up the right source code practices & a way to continuously integrate and deliver code along with data & models is crucial for the success of an AI platform. We have coached on practices that work & built pipelines for organizations to deliver business goals to production seamlessly.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/3.png",
      heading: "Workflow Orchestration",
      para: "Orchestrating the workflows of data pipelines and executing them at scale is crucial to an AI platform. We build, deploy, and scale workflow orchestration systems on scalable infrastructure to execute them at the speed of business needs.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/4.png",
      heading: "Model Registry & Metadata Stores",
      para: "A distributed & stable model registry needed to serve the right model when an application is needed is crucial for an AI platform that is global in nature. It is also crucial to capture the right metadata of models in a registry or separate database, depending on business needs.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/5.png",
      heading: "Feature Stores",
      para: "A feature store that can serve the needs of model training as well as in the prediction request path is needed for the AI platform to deliver value to both sets of customers successfully. We build & deploy these on right infrastructure based on the needs of the business.",
      link: "/ai-cloud",
    },

    {
      img: "/assets/6.png",
      heading: "Model Serving",
      para: "Serving models to end users in request path, with accuracy & low latency not only improves user experience but also business value. We deploy and configure the serving components to deliver to users.",
      link: "/ai-cloud",
    },
    {
      img: "/assets/7.png",
      heading: "Model Observability & Feedback Loops",
      para: "Redirecting requests to the right model and observing the accuracy of results & model performance is crucial to ensuring the intended & actual business outcomes are aligned. We use a combination of infra and model observability technologies to achieve this.",
      link: "/ai-cloud",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("Cloud");
  const [sliderData, setSliderData] = useState(cloudData);
  return (
    <div className="main-div">
      <Navbar />
      <HeroSection />
      {/* We are a company which enables start-up and enterprise section start */}
      <div className="my-5 py-5 companyStripSection p-2">
        <div className="companyStripSection-heading px-4">
          <h3 className="text-center mb-4 company-heading">
            We are a company which enables start-up and enterprise section
          </h3>
        </div>
        <p
          className="text-lg-center mx-lg-5  p-2 a-young-team"
          style={{ textAlign: "justify", color: "#706d6d" }}
        >
          A team of young technology enthusiasts focused to carve out the path
          for delivering high quality software products to solve the complex
          business problems using next generation technologies. Tequre emphases
          on easing out the adoption of next generation technologies like
          blockchain, big data, artificial intelligence and cloud computing. Our
          prime target is to build and offer SaaS services that are modular,
          service-oriented with micro service architecture and provide
          sophisticated solution to the business problems for customers. At
          Tequre, we aim to deliver seamless customer experience, business
          efficiency and actionable insights in booming technology.
        </p>
      </div>
      {/* We are a company which enables start-up and enterprise section end */}
      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex justify-content-center shadow-sm  p-2 navTabMain">
          <div
            onClick={() => {
              setSliderData(cloudData);
              setSelectedTab("Cloud");
            }}
            className={
              "navTab p-2 px-3  " +
              (selectedTab == "Cloud" && " shadow opacity1 selcted-navTabMain")
            }
          >
            Cloud
          </div>
          <div
            onClick={() => {
              setSliderData(cloudNativeApsData);
              setSelectedTab("Cloud Native Aps");
            }}
            className={
              "navTab p-2 px-3  " +
              (selectedTab == "Cloud Native Aps" &&
                " shadow opacity1 selcted-navTabMain")
            }
          >
            Cloud Native Aps
          </div>
          <div
            onClick={() => {
              setSliderData(cloudConsultingData);
              setSelectedTab("Cloud Consulting");
            }}
            className={
              "navTab p-2 px-3  " +
              (selectedTab == "Cloud Consulting" &&
                " shadow opacity1 selcted-navTabMain")
            }
          >
            Cloud Consulting
          </div>
        </div>
      </div>

      <ZigzagSection data={sliderData} />
      <div className="road-end">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2536/2536650.png"
          alt=""
          height={50}
          width={50}
        />
      </div>
      {/* We are a company which enables start-up and enterprise section start */}

      <div className="brand-trust-us my-5 py-5  ">
        <h3 className="text-center mb-3 brand-h"> Brands That Trust Us</h3>
        <p className="text-center mx-lg-5 mb-4 text-uppercase brand-p">
          We are a trusted development partner for Many more companies and
          established brands.
        </p>
        <div className="brand-images d-flex flex-wrap justify-content-center gap-sm-5 gap-0">
          <div className="brand-img">
            <img
              src="https://tequre.com/wp-content/uploads/2020/05/genx.jpg"
              className="img-fluid m-2 shadow rounded"
            />
          </div>

          <div className="brand-img">
            <img
              src="https://tequre.com/wp-content/uploads/2020/05/CastleBridge.jpg"
              className="img-fluid m-2 shadow rounded"
            />
          </div>

          <div className="brand-img">
            <img
              src="https://tequre.com/wp-content/uploads/2020/05/shahi.jpg"
              className="img-fluid m-2 shadow rounded"
            />
          </div>

          <div className="brand-img">
            <img
              src="https://tequre.com/wp-content/uploads/2020/05/azur3media.jpg"
              className="img-fluid m-2 shadow rounded"
            />
          </div>
        </div>
      </div>

      <div
        className=" py-5 companyStripSection navPopBg"
        style={{ marginTop: "-50px" }}
      >
        <div className="container">
          <div className="row gx-5 d-flex justify-content-around nitty-row1">
            <div className="col-lg-5 col-12 ">
              <img className="img-fluid my-3" src="/assets/home8.png" />
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center ">
              <h3 className=" mb-3 nity-grity-h">
                We Understand the Nitty-Gritty!
              </h3>
              <p className="nity-grity-p">
                Gain leverage with our proven artificial intelligence expertise
                & industry exposure. Working with 100+ clients, we know the
                criticalities, compliances & the importance of getting things
                right in the first go.
              </p>
              <p className="mb-5 mb-lg-0 nity-grity-p">
                Be it an enterprise with datacenters across the world or a
                rapidly scaling startup, we got it covered!
              </p>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="row  col-12 m-0 p-0 ">
              {[1, 2, 3, 4]?.map((v, i) => {
                return (
                  <div className={"col-lg-6 col-12 m-0 p-0"}>
                    <div className={"   bg-light  mb-3  bank-box "}>
                      <div className="d-flex justify-content-center mb-3 bank-bg ">
                        
                          <div style={{ opacity: "0.8" }}>
                            <h4 className="mb-0 bank-finance">
                              Banking & Finance
                            </h4>
                          </div>
                        
                      </div>
                      <p className=" p-3 bank-p" style={{ textAlign: "justify" }}>
                        “InfraCloud was quickly able to set up a small team and
                        realize our elasticity vision. Their expertise in
                        working with early-stage features of Kubernetes was
                        second only to their flexibility in quickly adjusting
                        course as we discovered simpler/better tech options
                        along the way. ”
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* testimonial end */}
      {/* <HomeCardGroup/> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
