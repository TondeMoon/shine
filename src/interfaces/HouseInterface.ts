export interface HouseInterface {
  house: {
    hot: boolean
    nearbyHouses: object[]
    status: string
    _id: string
    totalParts: number
    name: string
    description: string
    currency: {
      _id: string
      key: string
      name: string
      symbol: string
      createdAt: string
      updatedAt: string
    }
    price: number
    wholeHomePrice: number
    closingDeal: number
    serviceFee: number
    totalShareOwnership: number
    wholeHomeValue: number
    propertyTaxes: number
    cleaningFee: number
    propertyManagement: number
    maintenance: number
    utilities: number
    owneroManagementFee: number
    insurance: number
    repairsReserve: number
    monthlyContribution: number
    annualTotal: number
    livingSquare?: number
    bedroomsCount?: number
    roomsCount?: number
    bathroomsCount?: number
    plotSquare?: number | string
    area?: number
    square?: number
    country: {
      _id: string
      name: string
      key: string
      createdAt: string
      updatedAt: string
    }
    address?: string
    realEstateStatus: {
      _id: string
      name: string
      description: string
      createdAt: string
      updatedAt: string
    }
    region: {
      _id: string
      name: string
      country: string
      createdAt: string
      updatedAt: string
      __v: number
    }
    photos: string[]
    createdAt: string
    updatedAt: string
    slug: string
    __v: number
    territoryArea: number
    combinedLocation: {
      countryId: string
      regionId: string
      name: string
    }
    id: string
  }
}
