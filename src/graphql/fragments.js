import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
    fragment RepositoryDetails on Repository {
        id
        ownerAvatarUrl
        description
        fullName
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        ownerName
        name
    }
`;
export const REPOSITORY_REVIEWS = gql`
    fragment RepositoryReviews on Repository {
        reviews {
            edges {
              node {
                id
                text
                rating
                createdAt
                user {
                  id
                  username
                }
              }
            }
        }
    }
`;