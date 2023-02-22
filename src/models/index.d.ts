import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerListSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ListSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly list_name: string;
  readonly description?: string | null;
  readonly moderator_email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyListSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ListSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly list_name: string;
  readonly description?: string | null;
  readonly moderator_email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ListSettings = LazyLoading extends LazyLoadingDisabled ? EagerListSettings : LazyListSettings

export declare const ListSettings: (new (init: ModelInit<ListSettings>) => ListSettings) & {
  copyOf(source: ListSettings, mutator: (draft: MutableModel<ListSettings>) => MutableModel<ListSettings> | void): ListSettings;
}