/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListSettings = /* GraphQL */ `
  query GetListSettings($id: ID!) {
    getListSettings(id: $id) {
      id
      list_name
      description
      moderator_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listListSettings = /* GraphQL */ `
  query ListListSettings(
    $filter: ModelListSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        list_name
        description
        moderator_email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncListSettings = /* GraphQL */ `
  query SyncListSettings(
    $filter: ModelListSettingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncListSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        list_name
        description
        moderator_email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
