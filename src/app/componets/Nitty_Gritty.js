import React from 'react'

function Nitty_Gritty() {
    return (
        <div className="top-to-bottom-color p-4">
        <div className="container  ">
            <div className="row mt-5 mb-5  d-flex justify-content-around">
                {/* Left Div */}
                <div className="col-lg-3 col-12  p-3">
                    <h2 className="fw-bold">We Understand the
                        Nitty-Gritty!</h2>
                    <p className="text-gray mt-4">Gain leverage with our proven artificial intelligence expertise & industry exposure. Working with 100+ clients, we know the criticalities, compliances & the importance of getting things right in the first go.
                        Be it an enterprise with datacenters across the world or a rapidly scaling startup, we got it covered!</p>
                </div>


                {/* Right Div */}
                <div className="col-lg-8 col-12 gap-4 ">
                    <div className="row g-3 gap-4">
                        {/* Row 1 */}
                        <div className="col-md-5 col-12 pb-3 bg-white shadow gx-0 nity-box">
                            <div className="d-flex nity-box-h justify-content-center align-items-center gap-1">
                            <img
                                src="/assets/bank-building.png"
                                alt="Example"
                                className="img-fluid my-2"
                            />
                            <h5 className="my-2 p-2 fw-bold text-light ">Banking and Finance</h5>
                            </div>

                            <p className='p-3'>Customers demand highly available & compliant systems to efficiently handle transactions & payment requests 24/7. →</p>
                        </div>

                        <div className="col-md-5 col-12 pb-3 bg-white shadow gx-0 nity-box">
                        <div className="d-flex nity-box-h justify-content-center align-items-center gap-1">
                            <img
                                src="/assets/connection.png"
                                alt="Example"
                                className="img-fluid my-2"
                            />
                            <h5 className="my-2 p-2 fw-bold text-light">Technology, SaaS & Internet</h5>
                            </div>

                            <p className='p-3'>Focus on integrating AI within your SaaS on the top of the cloud built for AI while we build & manage your GPU server for performance.</p>
                        </div>
                    </div>

                    <div className="row g-3 mt-3 gap-4">
                        {/* Row 2 */}
                        <div className="col-md-5 col-12 pb-3 bg-white shadow gx-0 nity-box">
                            <div className="d-flex nity-box-h justify-content-center align-items-center gap-1">
                            <img
                                src="/assets/automation.png"
                                alt="Example"
                                className="img-fluid my-2"
                            />
                            <h5 className="my-2 p-2 fw-bold text-light">Automotive</h5>
                            </div>

                            <p className='p-3' >Keep up with the AI & machine learning with the rising customer expectations and integrate more technologies while reaching heights of a safer and sustainable future. →</p>
                        </div>

                        <div className="col-md-5 col-12 pb-3 bg-white shadow gx-0 nity-box">
                        <div className="d-flex nity-box-h justify-content-center align-items-center gap-1">
                            <img
                                src="/assets/energy.png"
                                alt="Example"
                                className="img-fluid my-2"
                            />
                            <h5 className="my-2 p-2 fw-bold text-light">Energy, Oil & Gas</h5>
                            </div>

                            <p className='p-3' >Modernize your system to streamline inspections, better resource monitoring, visualize data, and reduce operational costs.</p>
                        </div>
                    </div>

                    <div className="row g-3 mt-3 gap-4">
                        {/* Row 3 */}
                        <div className="col-md-5 col-12 pb-3 bg-white shadow gx-0 nity-box">
                            <div className="d-flex nity-box-h justify-content-center align-items-center gap-1">
                            <img
                                src="/assets/healthcare.png"
                                alt="Example"
                                className="img-fluid my-2"
                            />
                            <h5 className="my-2 p-2 fw-bold text-light">Healthcare</h5>
                            </div>

                            <p className='p-3'>Leverage the power of cloud GPU instances to process patient data at speed to adapt to the rapidly evolving healthcare demands.</p>
                        </div>

                        <div className="col-md-5 col-12 pb-3 bg-white shadow gx-0 nity-box">
                        <div className="d-flex nity-box-h justify-content-center align-items-center gap-1">
                            <img
                                src="/assets/pin.png"
                                alt="Example"
                                className="img-fluid my-2"
                            />
                            <h5 className="my-2 p-2 fw-bold text-light">Travel & Hospitality</h5>
                            </div>

                            <p className='p-3'>Delight your customers with seamless operation & instant updates using cost-effective, flexible, and scalable system.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Nitty_Gritty
