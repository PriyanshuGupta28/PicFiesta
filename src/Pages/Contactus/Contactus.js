import React from "react";
import { Form, Input, Button, Row, Col, Typography, Space, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./Contactus.css";
import Seo from "../../Components/Seo/Seo";

const { Title, Text, Link } = Typography;

const ContactUs = () => {
  const handleFormSubmit = (values) => {
    const { name, email, message } = values;
    const mailtoLink = `mailto:28priyanshu2001@gmail.com.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-us-container" style={{ padding: "5rem" }}>
      <Seo
        title="Contact Us - Picfiesta"
        description="Get in touch with us at Picfiesta. We'd love to hear from you! Reach out for support, inquiries, or collaboration opportunities."
        keywords="contact us, Picfiesta contact, Picfiesta support, customer support, Picfiesta inquiries"
        author="Priyanshu Gupta"
        canonicalUrl="https://picfiesta.com/contact-us"
        ogTitle="Contact Us - Picfiesta"
        ogDescription="Reach out to Picfiesta for support, inquiries, or collaboration opportunities. We'd love to hear from you!"
        ogImage="https://picfiesta.com/assets/contact-us-og-image.jpg" // Replace with an actual image URL
      />
      <Title level={2} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Contact Us
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {/* Contact Info Section */}
        <Col xs={24} md={10}>
          <Card className="contact-info-card" style={{ borderRadius: "8px" }}>
            <Space direction="vertical" size="large">
              <div>
                <MailOutlined
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
                <Link href="mailto:28priyanshu2001@gmail.com">
                  28priyanshu2001@gmail.com
                </Link>
              </div>
              <div>
                <PhoneOutlined
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
                <Text>+91 1234567890</Text>
              </div>
              <div>
                <EnvironmentOutlined
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
                <Text>Gujarat, India</Text>
              </div>
            </Space>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col xs={24} md={12}>
          <Card className="contact-form-card" style={{ borderRadius: "8px" }}>
            <Form layout="vertical" onFinish={handleFormSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
