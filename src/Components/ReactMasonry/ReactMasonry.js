import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SingleImage from "../SingleImage/SingleImage";
import "./ReactMasonry.scss";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const ReactMasonry = ({ data, loading, error }) => {
  return (
    <div className="masonry-root">
      <div className="masonry-container ">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
          <Masonry columnsCount={4} gutter={16}>
            {data.map((e) => (
              <SingleImage key={e?.id} data={e} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {loading ? <Loader /> : null}
        {error ? <Error /> : null}
      </div>
    </div>
  );
};

export default ReactMasonry;
