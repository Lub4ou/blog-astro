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
        Category{
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
