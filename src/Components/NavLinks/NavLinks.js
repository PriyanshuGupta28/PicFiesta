import React, { useState } from "react";
import "./NavLinks.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NAVLINKCURRENT } from "../../Utility/ReduxConstants/NavLinksConstants/NavLinksConstants";
import { Drawer, Button, Select, Radio, Checkbox, Form } from "antd";
import { FILTERQUERY } from "../../Utility/ReduxConstants/SearchConstants/SearchConstants";

const { Option } = Select;

const NavLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);

  // const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  const links = [
    { title: "Home", link: "/" },
    { title: "Photos", link: "/photos" },
    { title: "Illustrations", link: "/illustrations" },
    { title: "Vectors", link: "/vectors" },
    // { title: "Videos", link: "/videos" },
  ];

  const handleClick = (e) => {
    if (e?.link === "/") {
      dispatch({
        type: NAVLINKCURRENT,
        payload: "/all",
      });
    } else {
      dispatch({
        type: NAVLINKCURRENT,
        payload: e?.link,
      });
    }
  };
  const [filters, setFilters] = useState({
    orientation: "all",
    imageType: "all",
    category: "",
    order: "popular",
    editorsChoice: false,
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

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    console.log("Applied Filters:", filters);
    dispatch({ type: FILTERQUERY, payload: filters });
    setDrawerVisible(false);
    // navigate("/all/search");
  };

  return (
    <div className="navlink-root">
      {links?.map((e) => (
        <div className="link" key={e.title}>
          <Link
            key={e?.title}
            to={e?.link}
            onClick={() => handleClick(e)}
            style={{
              fontWeight: e?.link === location?.pathname ? "bold" : "none",
            }}
          >
            {e?.title}
          </Link>
        </div>
      ))}
      <div className="filter" onClick={toggleDrawer}>
        Filter
        <IoSettingsOutline />
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

          <Button type="primary" block onClick={applyFilters}>
            Apply Filters
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default NavLinks;
