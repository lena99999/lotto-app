import gql from "graphql-tag";

export const GET_DRAWS_ALL_FIELDS_QUERY = gql`
  query draws($type: String!, $limit: Int = 1, $date: String) {
     draw(type: $type, limit: $limit, date: $date) {
      backendError
      success
      visibleErrors {
        messages
        idents
      }
      draws {
        additionalNumbers
        date
        gameAmount
        jackpot
        megaPlier
        numbers
        odds {
            description
            descriptionShort
            link
            numberOfWinners
            numbers
            odd
            winningClass
            withOptions
        }
        powerPlay
        shares
        time
      }
    }
  }
`;

export const GET_DRAWS_QUERY = gql`
  query getDraws($date: String, $limit: Int) {
    draw(type: "eurojackpot", limit: $limit, date: $date) {
      draws {
        date
        additionalNumbers
        numbers
      }
    }
  }
`;
 
export const GET_DRAW_DETAILS_QUERY = gql`
  query draws($date: String) {
     draw(type: "eurojackpot", date: $date) {
      draws {
        additionalNumbers
        date
        gameAmount
        jackpot
        megaPlier
        numbers
        odds {
            description
            descriptionShort
            link
            numberOfWinners
            numbers
            odd
            winningClass
            withOptions
        }
        powerPlay
        shares
        time
      }
    }
  }
`;