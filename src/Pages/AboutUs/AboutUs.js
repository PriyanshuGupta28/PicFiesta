import React from "react";
import priyanshu from "../../Images/priyanshu.jpg";
import ankit from "../../Images/ankit.jpeg";
import { Row, Col, Card, Typography, Divider, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import "./AboutUs.css";
import Seo from "../../Components/Seo/Seo";

const { Title, Text, Link } = Typography;

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: "5rem" }}>
      <Seo
        title="About Us - Picfiesta"
        description="Learn more about Picfiesta. We are dedicated to providing high-quality stock images, illustrations, and backgrounds for your creative needs."
        keywords="about us, Picfiesta team, Picfiesta mission, high-quality images, stock images"
        author="Priyanshu Gupta"
        canonicalUrl="https://picfiesta.vercel.app/about-us"
        ogTitle="About Us - Picfiesta"
        ogDescription="Discover who we are at Picfiesta. Our team is committed to delivering top-notch stock images and creative assets."
        ogImage="https://picfiesta.vercel.app/assets/about-us-og-image.jpg" // Replace with an actual image URL
      />
      <div className="hero-section">
        <Title level={2} className="hero-title">
          About Us
        </Title>
        <Text className="hero-subtitle">
          We are dedicated to providing the best services for your needs.
          Discover more about who we are and what we do.
        </Text>
      </div>

      <Divider />

      <div className="team-section">
        <Title level={3}>Meet the Team</Title>
        <Row gutter={[16, 16]} justify="center">
          {data.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                className="team-card"
                cover={<img alt={member.title} src={member.src} />}
              >
                <Title level={5}>{member.title}</Title>
                <Text>{member?.position}</Text>
                <Divider />
                <Space size="middle" style={{ marginTop: "10px" }}>
                  {member?.website && (
                    <Link href={member?.website} target="_blank">
                      <GlobalOutlined style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                  {member?.github && (
                    <Link href={member?.github} target="_blank">
                      <GithubOutlined style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                  {member?.linkedin && (
                    <Link href={member?.linkedin} target="_blank">
                      <LinkedinOutlined style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                  {member?.twitter && (
                    <Link href={member?.twitter} target="_blank">
                      <TwitterOutlined style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider />
    </div>
  );
};

export default AboutUs;

const data = [
  {
    title: "Priyanshu Gupta",
    src: priyanshu,
    position: "Full Stack Developer",
    website: "https://thepriyanshu.vercel.app",
    github: "https://github.com/PriyanshuGupta28",
    linkedin: "https://www.linkedin.com/in/priyanshu-kumar-581a5a246",
    twitter: "https://x.com/28Priyanshu2001",
  },
  {
    title: "Ankit Sah",
    src: ankit,
    position: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/ankit-sah/",
  },
];
