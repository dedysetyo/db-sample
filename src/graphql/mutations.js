/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListSettings = /* GraphQL */ `
  mutation CreateListSettings(
    $input: CreateListSettingsInput!
    $condition: ModelListSettingsConditionInput
  ) {
    createListSettings(input: $input, condition: $condition) {
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
export const updateListSettings = /* GraphQL */ `
  mutation UpdateListSettings(
    $input: UpdateListSettingsInput!
    $condition: ModelListSettingsConditionInput
  ) {
    updateListSettings(input: $input, condition: $condition) {
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
export const deleteListSettings = /* GraphQL */ `
  mutation DeleteListSettings(
    $input: DeleteListSettingsInput!
    $condition: ModelListSettingsConditionInput
  ) {
    deleteListSettings(input: $input, condition: $condition) {
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
