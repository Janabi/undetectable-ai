// src/errorHandler.ts

import { AxiosError } from 'axios';

/**
 * Handles API errors by mapping HTTP status codes to error messages.
 * @param error AxiosError object thrown by Axios.
 * @throws Error with a user-friendly message.
 */
export function handleApiError(error: AxiosError): never {
  if (error.response) {
    const status = error.response.status;
    const errorMessage = getErrorMessage(status);
    throw new Error(`API call failed (${status}): ${errorMessage}`);
  } else if (error.request) {
    throw new Error('No response received from the server.');
  } else {
    throw new Error('Request setup error: ' + error.message);
  }
}

/**
 * Returns a user-friendly error message based on HTTP status code.
 * @param status HTTP status code.
 * @returns Error message string.
 */
function getErrorMessage(status: number): string {
  switch (status) {
    case 400:
      return 'Bad Request -- Your request is invalid.';
    case 403:
      return "Forbidden -- The API key is invalid or there isn't sufficient credits (0.1 per word).";
    case 404:
      return 'Not Found -- The specified resource does not exist.';
    case 405:
      return 'Method Not Allowed -- You tried to access a resource with an invalid method.';
    case 406:
      return "Not Acceptable -- You requested a format that isn't JSON.";
    case 410:
      return 'Gone -- The resource at this endpoint has been removed.';
    case 422:
      return 'Invalid Request Body -- Your request body is formatted incorrectly or there are missing parameters.';
    case 429:
      return "Too Many Requests -- You're sending too many requests! Slow it down!";
    case 500:
      return 'Internal Server Error -- We had a problem with our server. Try again later.';
    case 503:
      return 'Service Unavailable -- We are temporarily offline for maintenance. Please try again later.';
    default:
      return 'An unexpected error occurred.';
  }
}
