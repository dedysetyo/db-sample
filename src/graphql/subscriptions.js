/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListSettings = /* GraphQL */ `
  subscription OnCreateListSettings(
    $filter: ModelSubscriptionListSettingsFilterInput
  ) {
    onCreateListSettings(filter: $filter) {
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
export const onUpdateListSettings = /* GraphQL */ `
  subscription OnUpdateListSettings(
    $filter: ModelSubscriptionListSettingsFilterInput
  ) {
    onUpdateListSettings(filter: $filter) {
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
export const onDeleteListSettings = /* GraphQL */ `
  subscription OnDeleteListSettings(
    $filter: ModelSubscriptionListSettingsFilterInput
  ) {
    onDeleteListSettings(filter: $filter) {
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
