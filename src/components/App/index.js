import React, { useState } from "react";
import { Icon, Divider, Button, Tooltip, message } from "antd";
import axios from "axios";
import "./index.css";
import logoImg from "../../assets/images/logo.png";
import ContactUsForm from "../ContactUsForm";
import { getApiEndpointURL } from "../../utils";

const App = () => {
  const [isSending, setIsSending] = useState(false);

  const onContactUsSubmit = ({
    mobile: userMobile,
    email: userEmail,
    message: userMessage,
  }) => {
    setIsSending(true);

    const data = {
      mobile: userMobile,
      email: userEmail,
      message: userMessage,
    };

    axios
      .post(getApiEndpointURL("/api/v1/forms/contactus"), data)
      .then((resp) => {
        console.log(resp);
        message.success(
          "Thanks for contacting us. We will reach you as soon as possible."
        );
        setIsSending(false);
      })
      .catch((err) => {
        console.error(err);
        message.error(err.message || String(err));
        setIsSending(false);
      });
  };

  return (
    <div className="app">
      <div className="hero">
        <div className="curve-container">
          <div className="curve"></div>
        </div>
        <div className="content">
          <div className="header-bar">
            <div className="contact-item">
              <Icon type="phone" style={{ marginRight: 5 }} />
              <div className="contact-list">
                <span>+91 7001871118</span>
                <span>,&nbsp;</span>
                <span>+91 9123796456</span>
              </div>
            </div>
            <div className="contact-item">
              <Icon type="mail" style={{ marginRight: 5 }} />
              <div className="contact-list">
                <span>alihaistore@gmail.com</span>
                <span>,&nbsp;</span>
                <span>hello@rousan.io</span>
              </div>
            </div>
          </div>
          <header className="header">
            <img src={logoImg} alt="Alihai Logo" />
          </header>
          <div className="title-container">
            <h3 className="title">Alihai Store</h3>
            <h4 className="subtitle">
              Fashion is in your hand, we just help you to make it.
            </h4>
          </div>
          <div className="hero-button-container">
            <a
              href="https://www.amazon.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>See our products</span>
              <Icon type="right" style={{ marginLeft: 10 }} />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form-panel">
        <div className="left-panel">
          <h3 style={{ fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
            We accept bulk Orders
          </h3>
          <p>You can order the followings by filling up the contact us form:</p>
          <ul>
            <li>Printed T-Shirts</li>
            <li>Blank T-Shirts</li>
            <li>Customized Collections</li>
            <li>Branded T-Shirts and Jeans</li>
          </ul>
        </div>
        <Divider type="vertical" style={{ height: "auto" }} />
        <div className="right-panel">
          <div className="form-container">
            <ContactUsForm onSubmit={onContactUsSubmit} isLoading={isSending} />
          </div>
        </div>
      </div>
      <footer className="footer">
        <Button.Group>
          <Tooltip title="Connect with Facebook">
            <Button
              type="link"
              href="https://www.facebook.com/alihaistore/"
              target="_blank"
              icon="facebook"
            />
          </Tooltip>
          <Tooltip title="Connect with Instagram">
            <Button
              type="link"
              href="https://www.instagram.com/alihai_store/"
              target="_blank"
              icon="instagram"
            />
          </Tooltip>
          <Tooltip title="Send us mail">
            <Button
              type="link"
              href="mailto:alihaistore@gmail.com,hello@rousan.io"
              icon="mail"
            />
          </Tooltip>
        </Button.Group>
      </footer>
    </div>
  );
};

export default App;
