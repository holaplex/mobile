export const nftListingsQuery = `query listings {
  listings {
    endsAt
    ended   
    nfts {
     name
      address
      image
      offers{
        price
      }
    }
    bids {
      lastBidAmount
    }
  }
}`;

export const getNftDetails = `query nft($address: String!) {
  nft(address: $address) {
    address
    name
    sellerFeeBasisPoints
    mintAddress
    primarySaleHappened
    description
    category
    parser
    image
    creators {
      address
      profile{
        profileImageUrl
      }
    }
    attributes {
      value
    }
    owner {
      profile {
        profileImageUrl
      }
    }
    activities {
      price
    }
    listings {
      price
    }
    purchases {
      price
      buyer
      seller
    }
    offers {
      price
    }
    files {
      uri
      metadataAddress
    }
  }
}
`;


export const getNftsLists = `query GetNfts($creators: [PublicKey!]!, $owners: [PublicKey!], $auctionHouses: [PublicKey!], $listed: Boolean, $offerers: [PublicKey!], $limit: Int!, $offset: Int!) {
  nfts(creators: $creators, owners: $owners, auctionHouses: $auctionHouses, listed: $listed, offerers: $offerers, limit: $limit, offset: $offset) {
    address
    name
    description
    
    image
    owner {
      address
      associatedTokenAccountAddress
      __typename
    }
    creators {
      address
      verified
      twitterHandle
      profile {
        handle
        profileImageUrl
        bannerImageUrl
        __typename
      }
      __typename
    }
    offers {
      address
      price
      __typename
    }
    listings {
      address
      auctionHouse
      price
      __typename
    }
    __typename
  }
}
`;



export const featuredBuyNowListingsDocument = `
query featuredBuyNowListings($limit: Int!,$offset: Int!) {
  featuredListings(limit: $limit, offset: $offset) {
    address
    metadata
    nft {
      address
      name
      sellerFeeBasisPoints
      mintAddress
      description
      image
      primarySaleHappened
      creators {
        address
        share
        verified
      }
      owner {
        address
        associatedTokenAccountAddress
      }
      purchases {
        address
        buyer
        auctionHouse
        price
        createdAt
      }
      listings {
        address
        tradeState
        seller
        metadata
        auctionHouse
        price
        tradeStateBump
        createdAt
        canceledAt
      }
      offers {
        address
        tradeState
        buyer
        metadata
        auctionHouse
        price
        tradeStateBump
        tokenAccount
        createdAt
        canceledAt
      }
    }
  }
}

`;
