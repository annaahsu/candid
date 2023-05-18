import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Img from "../components/image"

const Room = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.image)
  return (
    <main className="room">
      <Img src={image} desc={data.mdx.frontmatter.image_alt} />
      <div className="words">
        <h1>{data.mdx.frontmatter.title}</h1>
        {children}
        <Link to="/">Go home</Link>
      </div>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        image_alt
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <title>hi</title>;

export default Room;
