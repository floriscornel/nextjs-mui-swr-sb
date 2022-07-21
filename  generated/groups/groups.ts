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
  GetGroupsParams,
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
export const getGroups = (
  params?: GetGroupsParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GroupListResponse>> => {
  return axios.get(`/groups`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getGetGroupsKey = (params?: GetGroupsParams) => [
  `/groups`,
  ...(params ? [params] : []),
];

export type GetGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getGroups>>
>;
export type GetGroupsQueryError = AxiosError<NoResponseErrorResponse>;

export const useGetGroups = <TError = AxiosError<NoResponseErrorResponse>>(
  params?: GetGroupsParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getGroups>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getGetGroupsKey(params) : null));
  const swrFn = () => getGroups(params, axiosOptions);

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
export const postGroups = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/groups`, undefined, options);
};

/**
 * @summary Get Group info
 */
export const getGroupId = (
  groupId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GroupInfoResponse>> => {
  return axios.get(`/group/${groupId}`, options);
};

export const getGetGroupIdKey = (groupId: string) => [`/group/${groupId}`];

export type GetGroupIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getGroupId>>
>;
export type GetGroupIdQueryError = AxiosError<NoResponseErrorResponse>;

export const useGetGroupId = <TError = AxiosError<NoResponseErrorResponse>>(
  groupId: string,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getGroupId>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!groupId;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getGetGroupIdKey(groupId) : null));
  const swrFn = () => getGroupId(groupId, axiosOptions);

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
export const postGroupIdAddMember = (
  groupId: string,
  groupAddMemberBody: GroupAddMemberBody,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/group/${groupId}/addMember`, groupAddMemberBody, options);
};

export const postGroupIdRemoveMember = (
  groupId: string,
  groupRemoveMemberBody: GroupRemoveMemberBody,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(
    `/group/${groupId}/removeMember`,
    groupRemoveMemberBody,
    options,
  );
};

export const postGroupIdRenameGroup = (
  groupId: string,
  groupRenameBody: GroupRenameBody,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/group/${groupId}/renameGroup`, groupRenameBody, options);
};