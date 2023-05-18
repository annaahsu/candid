import * as React from "react";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Img from "../components/image";
import "../styles/style.scss";

const IndexPage = ({ data }) => {
  return (
    <main>
      <div>
        <h1>Candid</h1>
        <blockquote>
          Nostalgia is a file that removes the rough edges from the good old
          days.
          <span>&ndash; Doug Larson</span>
        </blockquote>
        <p>
          Even the most mundane of days can look special from a different
          perspective. From a new direction to brighter colors, let me share
          with you how I see the world. Sometimes, even how the world sees me.
        </p>
        <p>Shot on iPhone by <a href="https://annahsu.dev">me</a>.</p>
      </div>
      <div className="img-grid">
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.image)
          return (
            <Link to={node.frontmatter.slug} key={node.id}>
              <div className="img-div" title={node.frontmatter.title}>
                <Img src={image} desc={node.frontmatter.image_alt} />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          image_alt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export const Head = () => <title>Candid</title>;

export default IndexPage;
