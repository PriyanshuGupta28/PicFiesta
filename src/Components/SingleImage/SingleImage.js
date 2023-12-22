import axios from "axios";
import React from "react";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Badge, Image, Space } from "antd";
import "./SingleImage.css";

const SingleImage = ({ data }) => {
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

  console.log(data, "SingleImage");
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
            </Space>
          ),
        }}
      />
    </div>
  );
};

export default SingleImage;
