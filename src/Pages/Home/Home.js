import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Button, Image, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fecthData = async () => {
    try {
      const data = await axios.get(
        "https://pixabay.com/api/?key=41123393-d488d28859f6869a5072a3240&q=yellow+flowers&image_type=photo$&per_page=50"
      );
      setData(data?.data?.hits);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

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
      {data?.map((e) => (
        <div>
          <Image
            width={200}
            src={e?.largeImageURL}
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
                      onDownload(e?.largeImageURL, "image_picfiesta")
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
          <Button type="primary" onClick={() => navigate(`./home/${e?.id}`)}>
            More Info
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Home;
