import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Avatar, Tag, Button, Spin, Row, Col } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./SinglePage.css";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import Seo from "../../Components/Seo/Seo";

const { Meta } = Card;

const SinglePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${pixabayKey}&id=${id}`
      );
      setData(response?.data?.hits?.[0]);
    } catch (err) {
      console.error("Error fetching image data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="spinner" style={{ paddingTop: "5rem" }}>
        <Spin size="large" style={{ display: "block", margin: "2rem auto" }} />
      </div>
    );
  }

  if (!data) {
    return <div>No data available for this image.</div>;
  }

  return (
    <div className="single-page">
      <Seo
        title={`${data.user} | Picfiesta`}
        description={`${
          data?.tags[0] ||
          "High-quality image available for free download on Picfiesta."
        }`}
        keywords={`${
          data?.tags[0] || "free image, Picfiesta, high-quality image"
        }`}
        canonicalUrl="https://www.Picfiesta.com/image/{imageId}"
        ogTitle={`${data.user}  | Picfiesta`}
        ogDescription={
          data?.tags[0] ||
          "Download this stunning image from Picfiesta for free."
        }
        ogImage={data.largeImageURL}
      />

      <Card
        hoverable
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row gutter={16}>
          {/* Image on the left */}
          <Col xs={24} sm={12} md={12} lg={12}>
            <img
              alt={data.tags}
              src={data.largeImageURL}
              className="large-image"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Col>

          {/* Publisher Info on the right */}
          <Col xs={24} sm={12} md={12} lg={12}>
            <Meta
              avatar={
                <Avatar
                  src={data.userImageURL || "https://via.placeholder.com/50"}
                />
              }
              title={data.user}
              description="Photographer"
            />
            <div className="image-stats">
              <div>
                <EyeOutlined /> Views: {data.views}
              </div>
              <div>
                <HeartOutlined /> Likes: {data.likes}
              </div>
              <div>
                <DownloadOutlined /> Downloads: {data.downloads}
              </div>
            </div>

            <div className="tags">
              {data.tags.split(", ").map((tag, index) => (
                <Tag color="blue" key={index}>
                  #{tag}
                </Tag>
              ))}
            </div>

            <Button
              type="primary"
              icon={<DownloadOutlined />}
              href={data.largeImageURL}
              download
              target="_blank"
              block
              style={{ marginTop: "20px" }}
            >
              Download Image
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SinglePage;
