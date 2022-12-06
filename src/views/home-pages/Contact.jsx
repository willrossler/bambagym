import React, { Fragment } from "react";
import TopNavFour from "../../components/header/TopNavFour";
import HeroBannerThree from "../../components/hero-banner/HeroBannerThree";
import FooterFour from "../../components/footer/FooterFour";
import userpic from "../../assets/images/img/abbe.jpg";
import { borderRadius } from "@mui/system";
import TrainerCard from "../../components/hero-banner/TrainerCard";
import TrainerCardMobile from "../../components/hero-banner/TrainerCardMobile";
const Training = () => {
  return (
    <Fragment>
      {(() => {
        if (window.innerWidth > 1024) {
          return (
            <div className=" main-page-wrapper">
              <TopNavFour />
              <HeroBannerThree />
              <div className="mt-100 lg-mt-70 mb-160">
                <div className="container">
                  {/* todo */}
                  <div className="row gx-xxl-5">
                    <div className="col-lg-4   order-lg-first">
                      <h1>
                        Location <hr className="textHr" />
                      </h1>

                      <p>Bamba</p>
                      <p style={{ opacity: "50%" }}>Lützengatan 10</p>
                      <p style={{ opacity: "50%" }}>11520 Stockholm</p>
                      <p style={{ opacity: "50%" }}>Sweden</p>
                      <p>info@bamba.se</p>
                      <p>www.bamba.se</p>
                      <p>Instagram @bambagym</p>
                      {/* /.form-style-one */}
                    </div>
                    <div className="col-lg-8 d-flex order-lg-last pb-50">
                      <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                        <div className="mapouter">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7292.882391085675!2d90.37429724010617!3d23.944834037065423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652150281517!5m2!1sen!2sbd"
                            style={{
                              border: 0,
                              borderRadius: 0,
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                      {/* /.map-area-one */}
                    </div>
                  </div>
                  <div className="row mt-80">
                    <h2>
                      PERSONAL TRAINERS
                      <hr className="textHr" />
                    </h2>
                    <div className="d-flex justify-content-center">
                      <div className="col-sm-6 col-lg-3 p-2 mt-30 flex-row ">
                        <TrainerCard />
                      </div>
                      <div className="col-sm-6 col-lg-3 p-2 mt-30 flex-row ">
                        <TrainerCard />
                      </div>
                      <div className="col-sm-6 col-lg-3 p-2 mt-30 flex-row ">
                        <TrainerCard />
                      </div>
                      <div className="col-sm-6 col-lg-3 p-2 mt-30 flex-row ">
                        <TrainerCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-style-four theme-basic-footer">
                <div className="container">
                  <FooterFour />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className=" main-page-wrapper">
              <TopNavFour />

              <div className="mt-100 lg-mt-70 mb-160">
                <div className="container">
                  <div className="row gx-xxl-5">
                    <h2 style={{ fontSize: "36px" }}>
                      LOCATION <hr className="mobileTextHr" />{" "}
                    </h2>

                    <div className="col-lg-8 d-flex order-lg-last pb-50">
                      <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                        <div className="mapouter">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7292.882391085675!2d90.37429724010617!3d23.944834037065423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652150281517!5m2!1sen!2sbd"
                            style={{
                              border: 0,
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                      {/* /.map-area-one */}
                    </div>
                    <div
                      className="col-lg-4   order-lg-first"
                      style={{ marginBottom: "40px" }}
                    >
                      <p>Bamba</p>
                      <p style={{ opacity: "50%" }}>Lützengatan 10</p>
                      <p style={{ opacity: "50%" }}>11520 Stockholm</p>
                      <p style={{ opacity: "50%" }}>Sweden</p>
                      <p>info@bamba.se</p>
                      <p>www.bamba.se</p>
                      <p>Instagram @bambagym</p>
                      {/* /.form-style-one */}
                    </div>
                  </div>
                  <h2 style={{ fontSize: "36px" }}>
                    PERSONAL TRAINERS <hr className="mobileTextHr" />{" "}
                  </h2>
                </div>
              </div>
              <div className="d-flex flex-row px-3 gap-3">
                <TrainerCardMobile />
                <TrainerCardMobile />
              </div>
              <div className="d-flex flex-row px-3 gap-3">
                <TrainerCardMobile />
                <TrainerCardMobile />
              </div>

              <div className="footer-style-four theme-basic-footer">
                <div className="container">
                  <FooterFour />
                </div>
              </div>
            </div>
          );
        }
      })()}
    </Fragment>
  );
};

export default Training;
