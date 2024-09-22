/**
 * Response from detecting a document for humanization.
 */

export interface DetectApiResponse {
  human: number;
}

/**
 * Response from submitting a document for humanization.
 */
export interface SubmitDocumentResponse {
  status: string;
  id: string;
}

/**
 * Request parameters for submitting a document.
 */
export interface SubmitDocumentRequest {
  content: string;
  readability: 'High School' | 'University' | 'Doctorate' | 'Journalist' | 'Marketing';
  purpose:
    | 'General Writing'
    | 'Essay'
    | 'Article'
    | 'Marketing Material'
    | 'Story'
    | 'Cover Letter'
    | 'Report'
    | 'Business Material'
    | 'Legal Material';
  strength?: 'Quality' | 'Balanced' | 'More Human';
}

/**
 * Response from retrieving a document.
 */
export interface RetrieveDocumentResponse {
  id: string;
  output: string | null;
  input: string;
  readability: string;
  createdDate: string;
  purpose: string;
}

/**
 * Request parameters for retrieving a document.
 */
export interface RetrieveDocumentRequest {
  id: string;
}

/**
 * Response from rehumanizing a document.
 */
export interface RehumanizeDocumentResponse {
  status: string;
  id: string;
}

/**
 * Request parameters for rehumanizing a document.
 */
export interface RehumanizeDocumentRequest {
  id: string;
}

/**
 * Response from listing documents.
 */
export interface ListDocumentsResponse {
  pagination: boolean;
  documents: RetrieveDocumentResponse[];
}

/**
 * Request parameters for listing documents.
 */
export interface ListDocumentsRequest {
  offset?: number;
}
