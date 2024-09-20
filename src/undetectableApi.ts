// src/undetectableApi.ts

import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { DetectApiResponse } from './types';
import { handleApiError } from './errorHandler';

/**
 * UndetectableApi class provides methods to authenticate and make API calls to the Undetectable API.
 */
export class UndetectableApi {
  private static instance: UndetectableApi;
  private apiKey: string;
  private readonly baseUrl: string = 'https://aicheck.undetectable.ai'; // Replace with the actual base URL

  /**
   * Private constructor to enforce Singleton pattern.
   * @param apiKey Your API key for authentication.
   */
  private constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Returns the singleton instance of UndetectableApi.
   * @param apiKey Your API key for authentication.
   * @returns UndetectableApi instance.
   */
  public static getInstance(apiKey: string): UndetectableApi {
    if (!UndetectableApi.instance) {
      UndetectableApi.instance = new UndetectableApi(apiKey);
    }
    return UndetectableApi.instance;
  }

  /**
   * Makes an API call to submit a text for AI detection.
   * @param text Text to send in the request body.
   * @returns Response data of type T.
   * @throws Error if the API call fails.
   */
  public async detectHumanText(
    text: string,
  ): Promise<DetectApiResponse> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.baseUrl}/detect`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        text,
        key: this.apiKey,
      },
    };

    try {
      const response = await axios.request<DetectApiResponse>(config);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  }

  /**
   * Makes an API call to enable the submission of text for detection by various third-party AI detectors.
   * @param text Text to send in the request body.
   * @returns Response data of type T.
   * @throws Error if the API call fails.
   */
  public async detectIndividualHumanText(
    text: string,
  ): Promise<DetectApiResponse> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.baseUrl}/detectIndividual`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        text,
        key: this.apiKey,
      },
    };

    try {
      const response = await axios.request<DetectApiResponse>(config);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  }
}
