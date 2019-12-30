import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const { allContentfulMenu } = useStaticQuery(
    graphql`
      query ALL_CONTENTFUL_MENU {
        allContentfulMenu {
          nodes {
            name
            sections {
              altText
              items {
                name
                description
                price
              }
              image {
                fluid(maxWidth: 1000) {
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  return allContentfulMenu.nodes
}
