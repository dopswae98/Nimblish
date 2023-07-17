import React from "react";

const Whoweare = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="d-flex h-100 align-items-center justify-content-center">
              <h3 className="fw-bold text1 py-4 position-relative">
                <span
                  className="position-absolute bg1"
                  style={{ height: 5, width: 65, top: 0 }}
                ></span>
                Who we are
              </h3>
            </div>
          </div>
          <div className="col-md-8">
            <div className="position-relative d-flexs justify-content-centers align-items-center">
              <div className="row">
                <div className="position-relative">
                  <div
                    className="be1 position-absolute"
                    style={{
                      borderLeft: "4px dotted orange",
                      borderBottom: "4px dotted orange",
                      height: 80,
                      width: 80,
                      bottom: -30,
                      left: 110,
                    }}
                  ></div>
                  <div
                    className="be2 position-absolute"
                    style={{
                      borderLeft: "4px dotted orange",
                      borderBottom: "4px dotted orange",
                      height: 70,
                      width: 70,
                      bottom: -20,
                      left: 120,
                    }}
                  ></div>
                  <div
                    className="be3 position-absolute"
                    style={{
                      borderRight: "4px dotted orange",
                      borderTop: "4px dotted orange",
                      height: 80,
                      width: 80,
                      top: -30,
                      right: 110,
                    }}
                  ></div>
                  <div
                    className="be4 position-absolute"
                    style={{
                      borderRight: "4px dotted orange",
                      borderTop: "4px dotted orange",
                      height: 70,
                      width: 70,
                      top: -20,
                      right: 120,
                    }}
                  ></div>

                  <div className="col-md-8 mx-auto">
                    <div className="mission bg-white rounded text-center py-3 shadow1">
                      <p className="text-uppercase">our mission</p>
                      <p>
                        To provide a platform where users can si,ultaneously
                        learn and earn.
                      </p>
                      <p className="text-uppercase">our vision</p>
                      <p>
                        We envision a world where free time and relaxation
                        arefully optimised through trivial to benefit everyone
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
