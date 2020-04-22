import React from "react";
import ContentLoader from "react-content-loader";

const PDFLoader = ({ width, height, speed }) => (
  <ContentLoader
    viewBox={`0 0 ${width} ${height}`}
    height={height}
    width={width}
    speed={speed}
  >
    <rect x="0" y="57" rx="4" ry="4" width="417" height="29" />
    <rect x="0" y="105" rx="4" ry="4" width="67" height="15" />
    <rect x="127" y="105" rx="4" ry="4" width="147" height="15" />
    <circle cx="739" cy="109" r="9" />
    <circle cx="765" cy="109" r="9" />
    <rect x="0" y="133" rx="4" ry="4" width={width} height="9" />
    <rect x="0" y="149" rx="4" ry="4" width={width / 4} height="8" />
    <rect x="0" y="170" rx="4" ry="4" width={width} height="10" />
    <rect x="0" y="185" rx="4" ry="4" width={width} height="10" />
    <rect x="0" y="199" rx="4" ry="4" width={width / 4} height="10" />
    <rect x="0" y="219" rx="5" ry="5" width={width} height="200" />
    <rect x="0" y="460" rx="4" ry="4" width={width} height="20" />
    <rect x="0" y="474" rx="4" ry="4" width={width / 4} height="20" />
    <rect x="0" y="500" rx="5" ry="5" width={width} height="200" />
  </ContentLoader>
);

PDFLoader.metadata = {
  name: "Myodesign PDF",
  github: "hatchli",
  description: "Myodesign PDF",
  filename: "Myodesign PDF",
};

export const Error = () => (
  <ContentLoader
    speed={0}
    width={800}
    height={475}
    viewBox="0 0 800 475"
    backgroundColor="#e89445"
    foregroundColor="#ecebeb"
  >
    <circle cx="398" cy="170" r="17" />
    <rect x="379" y="19" rx="2" ry="2" width="36" height="128" />
  </ContentLoader>
);
export default PDFLoader;
