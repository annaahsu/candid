import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Image = ({ src, desc }) => {
  return (
    <div className="img-div">
      <GatsbyImage className="img" image={src} alt={desc} />
    </div>
  );
};

export default Image
