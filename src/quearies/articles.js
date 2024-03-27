import GraphQL from "../scripts/graphql.js";

export const articlesList = await GraphQL.query(`
query {
  posts(sort: "id:desc") {
    data {
      id
      attributes {
        slug
        name
        content
        date
        categories{
          data{
            attributes{
              name
            }
          }
        }
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
`);
