import React from "react";
import { Form, Icon, Input, Button, Tooltip } from "antd";
import "./index.css";

class ContactUsForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { isLoading } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="contact-us-form">
        <Form.Item>
          {getFieldDecorator("mobile", {
            rules: [
              { required: true, message: "Please enter your contact number" },
            ],
          })(
            <Input
              addonBefore={
                <Tooltip title="You Contact Number">
                  <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                </Tooltip>
              }
              type="tel"
              placeholder="Your contact number"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please enter your email" }],
          })(
            <Input
              addonBefore={
                <Tooltip title="You Email Address">
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                </Tooltip>
              }
              type="email"
              placeholder="Your email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("message", {
            rules: [
              { required: true, message: "Please input your requirements!" },
            ],
          })(
            <Input.TextArea
              placeholder="Describe your requirements"
              style={{ height: 150 }}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="contact-us-form-button"
            loading={isLoading}
          >
            Contact Us
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "contact-form" })(ContactUsForm);
