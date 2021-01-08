import React, {Component} from "react";
import Nav from "./Layout/HomeNav";
import section2img from "./../img/homepage.png";
import {Payment} from "@material-ui/icons";
import Footer from "./Layout/Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="" style={{backgroundColor: "#f6f6f8"}}>
        <section className="background">
          <Nav />
          <div class="container">
            <div className="row section1">
              <div className="col-sm-6">
                {" "}
                <h1>Build your CV with us in less than 10min</h1>
              </div>
              <div className="col-sm-6 section1img"></div>
            </div>{" "}
          </div>
        </section>
        <section className="section2">
          <div class="container">
            <div className="row ">
              <div className="col-sm-6">
                <img src={section2img} />
              </div>
              <div className="col-sm-6">
                <h1>
                  Why BuildCV?
                  <br />
                  with us u can build a professional resume to get a good job
                </h1>
              </div>
            </div>{" "}
          </div>
        </section>
        <section className="section3">
          <div class="container" style={{textAlign: "center"}}>
            <div className="row">
              <div className="col-sm-4">
                <div className="card shadow">
                  <div className="card-body">
                    <Payment />
                    <h5 className="card-title mt-3">Pay using MasterCard</h5>
                    <p className="card-text">
                      you can pay for building your cv using MasterCard
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-sm-4">
                <div className="card shadow">
                  <div className="card-body">
                    <Payment />
                    <h5 className="card-title mt-3">Pay using MasterCard</h5>
                    <p className="card-text">
                      you can pay for building your cv using MasterCard
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-sm-4">
                <div className="card shadow">
                  <div className="card-body">
                    <Payment />
                    <h5 className="card-title mt-3">Pay using MasterCard</h5>
                    <p className="card-text">
                      you can pay for building your cv using MasterCard
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
