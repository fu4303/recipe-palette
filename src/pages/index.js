/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div>Main Page</div>
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(5, 1fr)`,
      }}
    ></div>
  </Layout>
)
