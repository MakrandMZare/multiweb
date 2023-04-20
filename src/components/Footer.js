import React from 'react';

const Footer = () => {
  return (
        <div className="main-footer" fixed="bottom" bg="light">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h4>Gopal Studio</h4>
                  <p>Address: New C G Road, Gota, South Bopal</p>
                  <p>Email: gopal@gopalstudio.in </p>
                  <p>Tel: +91 9930102832</p>
              </div>
            </div>
            {/* Footer Bottom */}
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} Gopal Studio - All Rights Reserved.
                </p>
              </div>
          </div>
        </div>
  );
}

export default Footer;
