/**
 * Generated by orval v6.9.0 🍺
 * Do not edit manually.
 * Shared Expenses
 * OpenAPI spec version: 1.0
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import useSwr from 'swr';
import type { SWRConfiguration, Key } from 'swr';
import type {
  GroupListResponse,
  NoResponseErrorResponse,
  ListGroupsParams,
  GroupInfoResponse,
  GroupAddMemberBody,
  GroupRemoveMemberBody,
  GroupRenameBody,
} from '../api.schemas';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List groups on your account
 */
export const listGroups = (
  params?: ListGroupsParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GroupListResponse>> => {
  return axios.get(`/groups`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getListGroupsKey = (params?: ListGroupsParams) => [
  `/groups`,
  ...(params ? [params] : []),
];

export type ListGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listGroups>>
>;
export type ListGroupsQueryError = AxiosError<NoResponseErrorResponse>;

export const useListGroups = <TError = AxiosError<NoResponseErrorResponse>>(
  params?: ListGroupsParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof listGroups>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getListGroupsKey(params) : null));
  const swrFn = () => listGroups(params, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Create a new group
 */
export const newGroup = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/groups`, undefined, options);
};

/**
 * @summary Get Group info
 */
export const getGroup = (
  groupId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GroupInfoResponse>> => {
  return axios.get(`/group/${groupId}`, options);
};

export const getGetGroupKey = (groupId: string) => [`/group/${groupId}`];

export type GetGroupQueryResult = NonNullable<
  Awaited<ReturnType<typeof getGroup>>
>;
export type GetGroupQueryError = AxiosError<NoResponseErrorResponse>;

export const useGetGroup = <TError = AxiosError<NoResponseErrorResponse>>(
  groupId: string,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getGroup>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!groupId;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getGetGroupKey(groupId) : null));
  const swrFn = () => getGroup(groupId, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Add a member to a group
 */
export const postGroupAddMember = (
  groupId: string,
  groupAddMemberBody: GroupAddMemberBody,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(
    `/group/${groupId}/add_member`,
    groupAddMemberBody,
    options,
  );
};

export const postGroupRemoveMember = (
  groupId: string,
  groupRemoveMemberBody: GroupRemoveMemberBody,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(
    `/group/${groupId}/remove_member`,
    groupRemoveMemberBody,
    options,
  );
};

export const postGroupRenameGroup = (
  groupId: string,
  groupRenameBody: GroupRenameBody,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/group/${groupId}/rename_group`, groupRenameBody, options);
};