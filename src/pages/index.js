import * as React from "react";
import { graphql } from "gatsby";
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
        <p>Shot on iPhone.</p>
      </div>
      <div className="img-grid">
        {data.allImageSharp.nodes.map((node) => (
          <Img src={node.gatsbyImageData} desc="" />
        ))}
      </div>
    </main>
  );
};

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        gatsbyImageData
      }
    }
  }
`;

export const Head = () => <title>Candid</title>;

export default IndexPage;
