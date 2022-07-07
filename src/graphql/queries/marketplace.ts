export const getMarketPlace = `query marketplace($subdomain: String!) {
  marketplace(subdomain: $subdomain) {
    configAddress
    subdomain
    name
    description
    logoUrl
    bannerUrl
    ownerAddress
    auctionHouseAddress
    storeAddress
    auctionHouse {
      auctionHouseTreasury
      address
      treasuryMint
      auctionHouseTreasury
      treasuryWithdrawalDestination
      feeWithdrawalDestination
      authority
      creator
      bump
      treasuryBump
      feePayerBump
      sellerFeeBasisPoints
      requiresSignOff
      canChangeSalePrice
      auctionHouseFeeAccount
      stats{
        floor
      }
    }
    creators {
      storeConfigAddress
      creatorAddress
      twitterHandle
      nftCount
    }
    stats {
      nfts
    }
  }
}`;
