import {gql} from "apollo-boost";

export const CATEGORIES = gql`
  {
    categories
  }
`;

export const GET_JOKE = gql`
    query getJoke($category: String! = "random") {
        joke(category: $category) {
            category
            text
         }
     }
`;
