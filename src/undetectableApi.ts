// src/undetectableApi.ts

import axios, { AxiosRequestConfig, AxiosError } from "axios";
import {
  DetectApiResponse,
  SubmitDocumentRequest,
  SubmitDocumentResponse,
  RetrieveDocumentRequest,
  RetrieveDocumentResponse,
  RehumanizeDocumentRequest,
  RehumanizeDocumentResponse,
  ListDocumentsRequest,
  ListDocumentsResponse,
} from "./types";
import { handleApiError } from "./errorHandler";
import { undetectableApiConfig } from "./config";

/**
 * UndetectableApi class provides methods to authenticate and make API calls to the Undetectable API.
 */
export class UndetectableApi {
  private static instance: UndetectableApi;
  private apiKey: string;

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
  public async detectHumanText(text: string): Promise<DetectApiResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `${undetectableApiConfig.detectorBaseUrl}/detect`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
    text: string
  ): Promise<DetectApiResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `${undetectableApiConfig.detectorBaseUrl}/detectIndividual`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
   * Submits a document for humanization.
   * @param params Parameters for submitting a document.
   * @returns Promise resolving to the submission response.
   * @throws Error if the API call fails.
   */
  public async submitDocument(
    params: SubmitDocumentRequest
  ): Promise<SubmitDocumentResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `${undetectableApiConfig.humanizeBaseUrl}/submit`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: this.apiKey,
      },
      data: params,
    };

    try {
      const response = await axios.request<SubmitDocumentResponse>(config);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  }

  /**
   * Retrieves a submitted document.
   * @param params Parameters for retrieving a document.
   * @returns Promise resolving to the document data.
   * @throws Error if the API call fails.
   */
  public async retrieveDocument(
    params: RetrieveDocumentRequest
  ): Promise<RetrieveDocumentResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `${undetectableApiConfig.humanizeBaseUrl}/document`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: this.apiKey,
      },
      data: params,
    };

    try {
      const response = await axios.request<RetrieveDocumentResponse>(config);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  }

  /**
   * Rehumanizes a document.
   * @param params Parameters for rehumanizing a document.
   * @returns Promise resolving to the rehumanization response.
   * @throws Error if the API call fails.
   */
  public async rehumanizeDocument(
    params: RehumanizeDocumentRequest
  ): Promise<RehumanizeDocumentResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `${undetectableApiConfig.humanizeBaseUrl}/rehumanize`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: this.apiKey,
      },
      data: params,
    };

    try {
      const response = await axios.request<RehumanizeDocumentResponse>(config);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  }

  /**
   * Lists all submitted documents.
   * @param params Parameters for listing documents.
   * @returns Promise resolving to the list of documents.
   * @throws Error if the API call fails.
   */
  public async listDocuments(
    params: ListDocumentsRequest = {}
  ): Promise<ListDocumentsResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `${undetectableApiConfig.humanizeBaseUrl}/list`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: this.apiKey,
      },
      data: params,
    };

    try {
      const response = await axios.request<ListDocumentsResponse>(config);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  }
}
