import React, { useState, useEffect } from "react";
import {
  Drawer,
  Form,
  Radio,
  Select,
  Checkbox,
  Button,
  Spin,
  Pagination,
} from "antd";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import { Input } from "antd";
import SingleImage from "../../Components/SingleImage/SingleImage";
import Seo from "../../Components/Seo/Seo";

const { Search } = Input;

const { Option } = Select;

const ExploreByTheme = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(false);
  const [seacrchParams, setSearchParams] = useSearchParams();
  const query = seacrchParams.get("q");
  const [filters, setFilters] = useState({
    orientation: "all",
    imageType: "all",
    category: null,
    order: "popular",
    editorsChoice: false,
    color: "", // Add color filter
  });

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
  });

  const categories = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const applyFilters = () => {
    setDrawerVisible(false);
    setPagination({ ...pagination, current: 1 });
    fetchImages(1);
  };

  const fetchImages = async (page = pagination.current) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: pixabayKey,
          q: query || filters.category || "all" || "",
          category: filters.category || "",
          orientation: filters.orientation !== "all" ? filters.orientation : "",
          image_type: filters.imageType !== "all" ? filters.imageType : "",
          order: filters.order,
          editors_choice: filters.editorsChoice,
          colors: filters.color, // Add color filter to API call
          page,
          per_page: pagination.pageSize,
        },
      });
      setImages(response.data.hits);
      setTotalHits(response.data.totalHits || 0);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Failed to fetch images:", error);
    } finally {
      setLoading(false);
    }
  };

  const onPageChange = (page, pageSize) => {
    setPagination({ current: page, pageSize });
    fetchImages(page);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchParams({ q: value }); // Update search query in the URL
  };

  const onSearch = (value, _e, info) => {
    // const { value } = e.target;
    // setSearch(value);
    setSearchParams({ q: value });
    if (query !== "" && value !== undefined) {
      fetchImages();
    }
  };

  return (
    <div style={{ padding: "1rem", paddingTop: "5rem" }}>
      <Seo
        title="Picfiesta | Explore By Theme - Themed Image Collections"
        description="Dive into themed image collections on Picfiesta. Browse by themes like nature, technology, travel, and more."
        keywords="explore by theme, themed images, Picfiesta themes, image collections"
        canonicalUrl="https://www.Picfiesta.com/explore-by-theme"
        ogTitle="Explore By Theme | Picfiesta"
        ogDescription="Find themed image collections to match your creative needs on Picfiesta."
        ogImage="https://www.Picfiesta.com/assets/og-explore-by-theme.png"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
        ss
      >
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleChange}
          value={query}
          onSearch={onSearch}
        />
        <Button type="primary" size="large" onClick={toggleDrawer}>
          Filters
        </Button>
      </div>

      <Drawer
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <Form layout="vertical">
          {/* Orientation */}
          <Form.Item label="Orientation">
            <Radio.Group
              value={filters.orientation}
              onChange={(e) =>
                handleFilterChange("orientation", e.target.value)
              }
            >
              <Radio value="all">All</Radio>
              <Radio value="horizontal">Horizontal</Radio>
              <Radio value="vertical">Vertical</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Image Type */}
          <Form.Item label="Image Type">
            <Select
              value={filters.imageType}
              onChange={(value) => handleFilterChange("imageType", value)}
            >
              <Option value="all">All</Option>
              <Option value="photo">Photo</Option>
              <Option value="illustration">Illustration</Option>
              <Option value="vector">Vector</Option>
            </Select>
          </Form.Item>

          {/* Category */}
          <Form.Item label="Category">
            <Select
              value={filters.category}
              onChange={(value) => handleFilterChange("category", value)}
              placeholder="Select Category"
              allowClear
              showSearch
              filterOption={(input, option) =>
                (option?.value ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* Order */}
          <Form.Item label="Order">
            <Radio.Group
              value={filters.order}
              onChange={(e) => handleFilterChange("order", e.target.value)}
            >
              <Radio value="popular">Popular</Radio>
              <Radio value="latest">Latest</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Editor's Choice */}
          <Form.Item>
            <Checkbox
              checked={filters.editorsChoice}
              onChange={(e) =>
                handleFilterChange("editorsChoice", e.target.checked)
              }
            >
              Editor's Choice
            </Checkbox>
          </Form.Item>

          {/* Color Filter */}
          <Form.Item label="Color">
            <Select
              value={filters.color}
              onChange={(value) => handleFilterChange("color", value)}
              placeholder="Select Color"
              allowClear
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              optionLabelProp="label"
            >
              {colorOptions.map((color) => (
                <Select.Option
                  key={color.value}
                  value={color.value}
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: color.color,
                          border: "1px solid #ccc",
                        }}
                      ></span>
                      {color.name}
                    </div>
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: color.color,
                        border: "1px solid #ccc",
                      }}
                    ></span>
                    {color.name}
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Button type="primary" block onClick={applyFilters}>
            Apply Filters
          </Button>
        </Form>
      </Drawer>

      {/* Image Gallery with Responsive Masonry */}
      <div style={{ marginTop: "1rem" }}>
        {loading ? (
          <Spin
            size="large"
            style={{ display: "block", margin: "2rem auto" }}
          />
        ) : error ? (
          <div style={{ textAlign: "center", color: "red" }}>
            Error loading images!
          </div>
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}
          >
            <Masonry columnsCount={4} gutter={16}>
              {images.map((image) => (
                <div key={image.id} style={{ marginBottom: "16px" }}>
                  <SingleImage key={images?.id} data={image} />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={totalHits}
        onChange={onPageChange}
        style={{ marginTop: "1rem", textAlign: "center" }}
      />
    </div>
  );
};

export default ExploreByTheme;

const colorOptions = [
  { name: "Grayscale", value: "grayscale", color: "gray" },
  { name: "Transparent", value: "transparent", color: "white" },
  { name: "Red", value: "red", color: "red" },
  { name: "Orange", value: "orange", color: "orange" },
  { name: "Yellow", value: "yellow", color: "yellow" },
  { name: "Green", value: "green", color: "green" },
  { name: "Turquoise", value: "turquoise", color: "turquoise" },
  { name: "Blue", value: "blue", color: "blue" },
  { name: "Lilac", value: "lilac", color: "violet" },
  { name: "Pink", value: "pink", color: "pink" },
  { name: "White", value: "white", color: "white" },
  { name: "Gray", value: "gray", color: "gray" },
  { name: "Black", value: "black", color: "black" },
  { name: "Brown", value: "brown", color: "brown" },
];
