import axios from "axios";
import React from "react";
import {
  DownloadOutlined,
  EyeOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";
import "./SingleImage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleImage = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navlink = useSelector((state) => state.navLinks?.currentLink);
  console.log(navlink, "SingleImage");
  const handleNavigation = (id) => {
    const searchPath = "/search";
    if (
      location.pathname === "/photos" ||
      location.pathname === "/illustrations" ||
      location.pathname === "/vectors" ||
      location.pathname === "/videos"
    ) {
      navigate(`${location.pathname}/${id}`);
    } else if (
      location.pathname === "/photos/search" ||
      location.pathname === "/illustrations/search" ||
      location.pathname === "/vectors/search" ||
      location.pathname === "/videos/search" ||
      location.pathname === "/all/search"
    ) {
      console.log(`${navlink}${searchPath}/${id}`);
      navigate(`${navlink}${searchPath}/${id}`);
    } else {
      navigate(`/all/${id}`);
    }
  };

  const onDownload = (url, imageName) => {
    axios
      .get(url, { responseType: "blob" })
      .then((response) => {
        const blob = response.data;
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = imageName || "image_picfiesta.png";

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <div>
      <Image
        width={"100%"}
        src={data?.largeImageURL}
        loading="lazy"
        preview={{
          toolbarRender: (
            _,
            {
              transform: { scale },
              actions: {
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomOut,
                onZoomIn,
              },
            }
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <DownloadOutlined
                onClick={() =>
                  onDownload(data?.largeImageURL, "image_picfiesta")
                }
              />
              <SwapOutlined rotate={90} onClick={onFlipY} />
              <SwapOutlined onClick={onFlipX} />
              <RotateLeftOutlined onClick={onRotateLeft} />
              <RotateRightOutlined onClick={onRotateRight} />
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              <EyeOutlined
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation(data?.id)}
              />
            </Space>
          ),
        }}
      />
    </div>
  );
};

export default SingleImage;
