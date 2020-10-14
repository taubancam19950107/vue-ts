/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL } from '@/config/constants'
import { push } from '@/router/index'
/**
 * @class Api
 * @extends {Axios}
 * @example
 */
export class Api {
    [x: string]: any
    /**
     * Creates an instance of Api.
     *
     * @param {import("axios").AxiosRequestConfig} [config] - axios configuration.
     * @memberof Api
     */
    public constructor (config?: AxiosRequestConfig) {
      this.api = axios.create(config)

      this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
        baseUrl: API_URL,
        ...param
      }))

      this.api.interceptors.response.use((param: AxiosResponse) => ({
        ...param
      }), (error: AxiosError) => {
        const statusCode = error.response && error.response.status
        switch (statusCode) {
          case 401:
            push('/')
            break
          case 403:
            break
          case 404:
            push('/404')
            break
          case 500:
            break
          default:
            break
        }

        return Promise.reject(error.response && error.response.data)
      })

      this.getUri = this.getUri.bind(this)
      this.request = this.request.bind(this)
      this.get = this.get.bind(this)
      this.delete = this.delete.bind(this)
      this.head = this.head.bind(this)
      this.post = this.post.bind(this)
      this.put = this.put.bind(this)
      this.patch = this.patch.bind(this)
    }

    /**
     * Get Uri
     *
     * @param {import("axios").AxiosRequestConfig} [config]
     * @returns {string}
     * @memberof Api
     */
    public getUri (config?: AxiosRequestConfig): string {
      return this.api.api.getUri(config)
    }

    /**
     * Generic request.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP axios response payload.
     * @memberof Api
     *
     * @example
     * api.request({
     *   method: "GET|POST|DELETE|PUT|PATCH"
     *   baseUrl: "http://www.domain.com",
     *   url: "/api/v1/users",
     *   headers: {
     *     "Content-Type": "application/json"
     *  }
     * }).then((response: AxiosResponse<User>) => response.data)
     *
     */
    public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
      return this.api.api.request(config)
    }

    /**
     * HTTP GET method, used to fetch data `statusCode`: 200.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} HTTP `axios` response payload.
     * @memberof Api
     */
    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.api.get(url, config)
    }

    /**
     * HTTP DELETE method, `statusCode`: 204 No Content.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.api.delete(url, config)
    }

    /**
     * HTTP HEAD method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.api.head(url, config)
    }

    /**
     * HTTP POST method `statusCode`: 201 Created.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public post<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
      return this.api.post(url, data, config)
    }

    /**
     * HTTP PUT method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public put<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
      return this.api.put(url, data, config)
    }

    /**
     * HTTP PATCH method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public patch<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
      return this.api.patch(url, data, config)
    }

    /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
    public success<T> (response: AxiosResponse<T>): T {
      return response.data
    }

    /**
     * throw Error
     */
    public error (error: AxiosError<Error>) {
      throw error
    }
}
