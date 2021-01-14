import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
    query repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after){
            edges {
              node {
                ...RepositoryDetails
              }
              cursor
            }
            pageInfo {
              endCursor
              startCursor
              totalCount
              hasNextPage
            }
          }
    }
    ${REPOSITORY_DETAILS}
`;

export const AUTHORIZED_USER = gql `
    query authorizedUser ($first: Int, $after: String, $includeReviews: Boolean = false) {
      authorizedUser {
        id
        username
        reviews (first: $first, after: $after), @include(if: $includeReviews) {
          edges {
            node {
              id
              text
              rating
              createdAt
              repositoryId
              user {
                id
                username
              }
              repository {
                url
              }
            }
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            totalCount
            hasNextPage
          }
        }
      }
    }
`;

export const SINGLE_REPOSITORY = gql`
    query single_repository ($id: ID!, $first: Int, $after: String) {
      repository(id: $id) {
        ...RepositoryDetails
        url
        reviews (first: $first, after: $after) {
          edges {
            node {
              id
              text
              rating
              createdAt
              repositoryId
              user {
                id
                username
              }
              repository {
                ...RepositoryDetails
              }
            }
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            totalCount
            hasNextPage
          }
        }
      }
    }
  ${REPOSITORY_DETAILS}
`;
