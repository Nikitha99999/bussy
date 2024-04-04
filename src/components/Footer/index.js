import './index.css'

const Footer = () => (
  <div>
    <div className="black-cont">
      <img
        src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1712065141/logo.png_lek4hw.png"
        alt="mag"
      />
      <div className="footer-cont">
        <h1 className="head-pad"> Home</h1>
        <h1 className="head-pad">Fashion</h1>

        <h1 className="head-pad">Technology</h1>
        <h1 className="head-pad">Life</h1>
        <h1 className="head-pad">Environment</h1>
      </div>
      <div className="footer-cont">
        <div className="head-pad">
          <img
            src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952640/svg_4_ssncc3.png"
            alt="images"
            className="foot-image"
          />
        </div>
        <div className="head-pad">
          <img
            src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952640/svg_5_iu5sww.png"
            alt="images"
            className="foot-image"
          />
        </div>

        <div className="head-pad">
          <img
            src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952640/svg_6_ddw8zq.png"
            alt="images"
            className="foot-image"
          />
        </div>

        <div className="head-pad">
          <img
            src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952639/svg_7_hum85u.png"
            alt="images"
            className="foot-image"
          />
        </div>
      </div>
      <div className="mail-cont">
        <h1>
          Copyright © 2023 <span className="col">Magazine</span> - Powered by{' '}
          <span className="col">Rishi Theme</span>
        </h1>
      </div>
    </div>
  </div>
)

export default Footer
