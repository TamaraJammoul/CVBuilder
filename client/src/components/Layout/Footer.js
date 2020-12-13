import React, { useContext } from "react";
import { AuthContext } from "./../../AuthContext";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default function Footer() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <footer className="page-footer font-small footer pt-4 ">
        <div className="container text-center text-md-left ">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                حول ارتقِ
              </h6>
              <p>
                ارتقِ هو موقع الكتروني يمكنك من الحصول على شرح للمواد العلمية
                وإجراء اخبارات فعالة لطلاب الثانوية في الجمهورية العربية السورية
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                تواصل معنا
              </h6>
              <p>
                <i className="fas fa-home mr-3"></i>ارتقِ
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@irtake.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 963-0930737281
              </p>
            </div>
            <div className="col-md-4 col-xl-3 mx-auto mt-3">
              {authContext.auth ? (
                ""
              ) : (
                <ButtonContainer>
                  <Link to="/logininst" style={{ color: "#fff" }}>
                    سجل دخول كمعهد
                  </Link>
                </ButtonContainer>
              )}
            </div>
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2020 Copyright:
                <Link to="https://irtake.com/">
                  <strong> irtake.com</strong>
                </Link>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      classname="text-decoration-none btn-floating btn-sm rgba-white-slight mx-1 "
                      href="https://www.facebook.com/irtakee/"
                    >
                      <i className="fab fa-facebook-f mr-2"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      classname="text-decoration-none btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.linkedin.com/in/feras-taieb-798563197/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
