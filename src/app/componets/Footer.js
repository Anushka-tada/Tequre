import React from "react";

function Footer() {
  return (
    <footer className=" py-4 footer-color">
      <div className="container ">
        {/* Row 1 */}
        <div className="row mb-3 ">
          <div className="col text-center">
            {/* Row with 2 Columns */}
            <div className="row">
              {/* Column 1 */}
              

              {/* Column 2 */}

              {/* <div className="col-md-9 col-12  mx-0 my-auto p-0 row">
                <div className="row col-md-6 col-12">
                  <div className="col-md-6 col-12  p-3 my-auto">
                    <img
                      src="https://www.infracloud.io/assets/img/generic/glassdoor-rating.svg"
                      alt="Sample 1"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-6 col-12 p-3 my-auto">
                    <img
                      src="https://www.infracloud.io/assets/img/generic/cncf-stacked-color.svg"
                      alt="Sample 1"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="row col-md-6 col-12 my-auto">
                  <div className="col-md-3 col-6 p-4 my-auto">
                    <img
                      src="https://www.infracloud.io/assets/img/generic/kubernetes-kcsp-color.svg"
                      alt="Sample 1"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-3 col-6  p-4 my-auto">
                    <img
                      src="https://www.infracloud.io/assets/img/generic/certified-tag-2.svg"
                      alt="Sample 1"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-3 col-6  p-4 my-auto">
                    <img
                      src="https://www.infracloud.io/assets/img/generic/iso.svg"
                      alt="Sample 1"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-3 col-6  p-4 my-auto">
                    <img
                      src="https://www.infracloud.io/assets/img/generic/certified-tag.svg"
                      alt="Sample 1"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div> */}
              <div className="row p-2">
                <div className="col-lg-3 col-md-6 col-12">
               <div className="d-flex">
               <img
                    src="https://tequre.com/wp-content/uploads/2020/04/t-web-logo.png"
                    alt="Logo"
                    // className="img-fluid"
                    style={{height:"50px"}}
                    className=" p-2 px-3 footer-logo"
                  />
               </div>
                  <div className="mb-5 mt-3 text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Product Engineering</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          Cloud Native Product Development
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Cloud Native FaaS
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Monolith to Microservices
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          DevRel as a Service
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Extending Kubernetes Whitepaper
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Row 2 */}
                  <div className="mb-5 text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Platform Engineering</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          Platform Engineering Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Platform Engineering eBook
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Backstage Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Port Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Progressive Delivery
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          CI/CD & Dev Exprience
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Bare Metal Provisioning Consulting
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="mb-5  text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Application Modernization</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          Monolith to Microservices
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Kubernetes Consulting Services
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          GitOps Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          CI/CD & Dev Exprience
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          DevOps Toolchain
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          ArgoCD Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Jenkins Consulting
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Row 2 */}
                  <div className="mb-5  text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Observability & DevSecOps</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          DevSecOps Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Observability Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Grafana Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Prometheus Consulting
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="mb-5  text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Site Reliability Engineering</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          SRE Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Service Mesh Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Cloud Native Networking
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Istio Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Linkerd Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Terraform Consulting
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Backup & Disaster Recovery
                        </a>
                      </li>
                      <li>
                        <a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">
                          Bare Metal Provisioning Consulting
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Row 2 */}
                  <div className="mb-5  text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Consulting Partners</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          GitLab Partner
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          SUSE Rancher Partner
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Tigera Partner
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Solo Partner
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="mb-5  text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Industries</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          Banking and Finance
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Automotive
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Row 2 */}
                  <div className="mb-5 text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Enterprise Support</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          Linkerd Support
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Istio Support
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Argo CD Support
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Prometheus Support
                        </a>
                      </li>
                      <li>
                        <a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">
                          Kasten K10 Support
                        </a>
                      </li>
                      <li>
                        <a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">
                          Thanos Support
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Row 3 */}
                  <div className="mb-5 text-start">
                    {/* Heading */}
                    <h5 className="mb-3 fs-6 text-bold text-light">Solutions</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">
                          Fission Enterprise
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          BotKube Enterprise
                        </a>
                      </li>
                      <li>
                        <a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">
                          Managed Services for Kubernetes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="d-md-flex d-block justify-content-center">
                <p className="mx-2 text-light">© 2024 Tequre - Unleash Growth!</p>
                <p className="mx-2 text-light">Terms</p>
                <p className="mx-2 text-light">Privacy</p>
                <p className="mx-2 text-light">Equal Opportunity</p>
                <p className="mx-2 text-light">Sitemap</p>
                <p className="mx-4 text-light">Global Presence : <span className="mx-2">India</span> <span className="mx-2">USA</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
