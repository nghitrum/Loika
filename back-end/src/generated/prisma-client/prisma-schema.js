module.exports = {
        typeDefs: /* GraphQL */ `type Address {
  id: ID!
  address: String!
  city: String!
  postcode: Int
  country: String!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  address: String!
  city: String!
  postcode: Int
  country: String!
}

input AddressCreateManyInput {
  create: [AddressCreateInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  postcode_ASC
  postcode_DESC
  country_ASC
  country_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postcode: Int
  postcode_not: Int
  postcode_in: [Int!]
  postcode_not_in: [Int!]
  postcode_lt: Int
  postcode_lte: Int
  postcode_gt: Int
  postcode_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

input AddressUpdateDataInput {
  address: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateInput {
  address: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateManyDataInput {
  address: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateManyInput {
  create: [AddressCreateInput!]
  update: [AddressUpdateWithWhereUniqueNestedInput!]
  upsert: [AddressUpsertWithWhereUniqueNestedInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyMutationInput {
  address: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateOneRequiredInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  connect: AddressWhereUniqueInput
}

input AddressUpdateWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateDataInput!
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressUpsertWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postcode: Int
  postcode_not: Int
  postcode_in: [Int!]
  postcode_not_in: [Int!]
  postcode_lt: Int
  postcode_lte: Int
  postcode_gt: Int
  postcode_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateSubscription {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Image {
  id: ID!
  url: String!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  url: String!
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input ImageUpdateDataInput {
  url: String
}

input ImageUpdateInput {
  url: String
}

input ImageUpdateManyMutationInput {
  url: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpdateOneRequiredInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  connect: ImageWhereUniqueInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createSubscription(data: SubscriptionCreateInput!): Subscription!
  updateSubscription(data: SubscriptionUpdateInput!, where: SubscriptionWhereUniqueInput!): Subscription
  updateManySubscriptions(data: SubscriptionUpdateManyMutationInput!, where: SubscriptionWhereInput): BatchPayload!
  upsertSubscription(where: SubscriptionWhereUniqueInput!, create: SubscriptionCreateInput!, update: SubscriptionUpdateInput!): Subscription!
  deleteSubscription(where: SubscriptionWhereUniqueInput!): Subscription
  deleteManySubscriptions(where: SubscriptionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  user: User!
  subscriptions(where: SubscriptionWhereInput, orderBy: SubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscription!]
  billingAddress: Address!
  shippingAddress: Address!
  deliveryTime: String!
  deliveryDayOfWeek: String!
  paymentDate: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  user: UserCreateOneInput!
  subscriptions: SubscriptionCreateManyInput
  billingAddress: AddressCreateOneInput!
  shippingAddress: AddressCreateOneInput!
  deliveryTime: String!
  deliveryDayOfWeek: String!
  paymentDate: DateTime!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  deliveryTime_ASC
  deliveryTime_DESC
  deliveryDayOfWeek_ASC
  deliveryDayOfWeek_DESC
  paymentDate_ASC
  paymentDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input OrderUpdateInput {
  user: UserUpdateOneRequiredInput
  subscriptions: SubscriptionUpdateManyInput
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateOneRequiredInput
  deliveryTime: String
  deliveryDayOfWeek: String
  paymentDate: DateTime
}

input OrderUpdateManyMutationInput {
  deliveryTime: String
  deliveryDayOfWeek: String
  paymentDate: DateTime
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  subscriptions_every: SubscriptionWhereInput
  subscriptions_some: SubscriptionWhereInput
  subscriptions_none: SubscriptionWhereInput
  billingAddress: AddressWhereInput
  shippingAddress: AddressWhereInput
  deliveryTime: String
  deliveryTime_not: String
  deliveryTime_in: [String!]
  deliveryTime_not_in: [String!]
  deliveryTime_lt: String
  deliveryTime_lte: String
  deliveryTime_gt: String
  deliveryTime_gte: String
  deliveryTime_contains: String
  deliveryTime_not_contains: String
  deliveryTime_starts_with: String
  deliveryTime_not_starts_with: String
  deliveryTime_ends_with: String
  deliveryTime_not_ends_with: String
  deliveryDayOfWeek: String
  deliveryDayOfWeek_not: String
  deliveryDayOfWeek_in: [String!]
  deliveryDayOfWeek_not_in: [String!]
  deliveryDayOfWeek_lt: String
  deliveryDayOfWeek_lte: String
  deliveryDayOfWeek_gt: String
  deliveryDayOfWeek_gte: String
  deliveryDayOfWeek_contains: String
  deliveryDayOfWeek_not_contains: String
  deliveryDayOfWeek_starts_with: String
  deliveryDayOfWeek_not_starts_with: String
  deliveryDayOfWeek_ends_with: String
  deliveryDayOfWeek_not_ends_with: String
  paymentDate: DateTime
  paymentDate_not: DateTime
  paymentDate_in: [DateTime!]
  paymentDate_not_in: [DateTime!]
  paymentDate_lt: DateTime
  paymentDate_lte: DateTime
  paymentDate_gt: DateTime
  paymentDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  subscription(where: SubscriptionWhereUniqueInput!): Subscription
  subscriptions(where: SubscriptionWhereInput, orderBy: SubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscription]!
  subscriptionsConnection(where: SubscriptionWhereInput, orderBy: SubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscriptionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  id: ID!
  title: String!
  shortDescription: String!
  longDescription: String!
  totalPrice: Int!
  mealPrice: Int!
  thumbnailImage: Image!
  largeImage: Image!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SubscriptionConnection {
  pageInfo: PageInfo!
  edges: [SubscriptionEdge]!
  aggregate: AggregateSubscription!
}

input SubscriptionCreateInput {
  title: String!
  shortDescription: String!
  longDescription: String!
  totalPrice: Int!
  mealPrice: Int!
  thumbnailImage: ImageCreateOneInput!
  largeImage: ImageCreateOneInput!
}

input SubscriptionCreateManyInput {
  create: [SubscriptionCreateInput!]
  connect: [SubscriptionWhereUniqueInput!]
}

type SubscriptionEdge {
  node: Subscription!
  cursor: String!
}

enum SubscriptionOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  shortDescription_ASC
  shortDescription_DESC
  longDescription_ASC
  longDescription_DESC
  totalPrice_ASC
  totalPrice_DESC
  mealPrice_ASC
  mealPrice_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input SubscriptionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  shortDescription: String
  shortDescription_not: String
  shortDescription_in: [String!]
  shortDescription_not_in: [String!]
  shortDescription_lt: String
  shortDescription_lte: String
  shortDescription_gt: String
  shortDescription_gte: String
  shortDescription_contains: String
  shortDescription_not_contains: String
  shortDescription_starts_with: String
  shortDescription_not_starts_with: String
  shortDescription_ends_with: String
  shortDescription_not_ends_with: String
  longDescription: String
  longDescription_not: String
  longDescription_in: [String!]
  longDescription_not_in: [String!]
  longDescription_lt: String
  longDescription_lte: String
  longDescription_gt: String
  longDescription_gte: String
  longDescription_contains: String
  longDescription_not_contains: String
  longDescription_starts_with: String
  longDescription_not_starts_with: String
  longDescription_ends_with: String
  longDescription_not_ends_with: String
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  mealPrice: Int
  mealPrice_not: Int
  mealPrice_in: [Int!]
  mealPrice_not_in: [Int!]
  mealPrice_lt: Int
  mealPrice_lte: Int
  mealPrice_gt: Int
  mealPrice_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SubscriptionScalarWhereInput!]
  OR: [SubscriptionScalarWhereInput!]
  NOT: [SubscriptionScalarWhereInput!]
}

input SubscriptionUpdateDataInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
  thumbnailImage: ImageUpdateOneRequiredInput
  largeImage: ImageUpdateOneRequiredInput
}

input SubscriptionUpdateInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
  thumbnailImage: ImageUpdateOneRequiredInput
  largeImage: ImageUpdateOneRequiredInput
}

input SubscriptionUpdateManyDataInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
}

input SubscriptionUpdateManyInput {
  create: [SubscriptionCreateInput!]
  update: [SubscriptionUpdateWithWhereUniqueNestedInput!]
  upsert: [SubscriptionUpsertWithWhereUniqueNestedInput!]
  delete: [SubscriptionWhereUniqueInput!]
  connect: [SubscriptionWhereUniqueInput!]
  disconnect: [SubscriptionWhereUniqueInput!]
  deleteMany: [SubscriptionScalarWhereInput!]
  updateMany: [SubscriptionUpdateManyWithWhereNestedInput!]
}

input SubscriptionUpdateManyMutationInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
}

input SubscriptionUpdateManyWithWhereNestedInput {
  where: SubscriptionScalarWhereInput!
  data: SubscriptionUpdateManyDataInput!
}

input SubscriptionUpdateWithWhereUniqueNestedInput {
  where: SubscriptionWhereUniqueInput!
  data: SubscriptionUpdateDataInput!
}

input SubscriptionUpsertWithWhereUniqueNestedInput {
  where: SubscriptionWhereUniqueInput!
  update: SubscriptionUpdateDataInput!
  create: SubscriptionCreateInput!
}

input SubscriptionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  shortDescription: String
  shortDescription_not: String
  shortDescription_in: [String!]
  shortDescription_not_in: [String!]
  shortDescription_lt: String
  shortDescription_lte: String
  shortDescription_gt: String
  shortDescription_gte: String
  shortDescription_contains: String
  shortDescription_not_contains: String
  shortDescription_starts_with: String
  shortDescription_not_starts_with: String
  shortDescription_ends_with: String
  shortDescription_not_ends_with: String
  longDescription: String
  longDescription_not: String
  longDescription_in: [String!]
  longDescription_not_in: [String!]
  longDescription_lt: String
  longDescription_lte: String
  longDescription_gt: String
  longDescription_gte: String
  longDescription_contains: String
  longDescription_not_contains: String
  longDescription_starts_with: String
  longDescription_not_starts_with: String
  longDescription_ends_with: String
  longDescription_not_ends_with: String
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  mealPrice: Int
  mealPrice_not: Int
  mealPrice_in: [Int!]
  mealPrice_not_in: [Int!]
  mealPrice_lt: Int
  mealPrice_lte: Int
  mealPrice_gt: Int
  mealPrice_gte: Int
  thumbnailImage: ImageWhereInput
  largeImage: ImageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SubscriptionWhereInput!]
  OR: [SubscriptionWhereInput!]
  NOT: [SubscriptionWhereInput!]
}

input SubscriptionWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  phone: String!
  billingAddress: Address!
  shippingAddress(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  paymentId: String
  avatar: Image
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  phone: String!
  billingAddress: AddressCreateOneInput!
  shippingAddress: AddressCreateManyInput
  paymentId: String
  avatar: ImageCreateOneInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  paymentId_ASC
  paymentId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input UserUpdateDataInput {
  name: String
  email: String
  phone: String
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateManyInput
  paymentId: String
  avatar: ImageUpdateOneInput
}

input UserUpdateInput {
  name: String
  email: String
  phone: String
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateManyInput
  paymentId: String
  avatar: ImageUpdateOneInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  phone: String
  paymentId: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  billingAddress: AddressWhereInput
  shippingAddress_every: AddressWhereInput
  shippingAddress_some: AddressWhereInput
  shippingAddress_none: AddressWhereInput
  paymentId: String
  paymentId_not: String
  paymentId_in: [String!]
  paymentId_not_in: [String!]
  paymentId_lt: String
  paymentId_lte: String
  paymentId_gt: String
  paymentId_gte: String
  paymentId_contains: String
  paymentId_not_contains: String
  paymentId_starts_with: String
  paymentId_not_starts_with: String
  paymentId_ends_with: String
  paymentId_not_ends_with: String
  avatar: ImageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    