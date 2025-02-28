/**
 * Base API client for making HTTP requests
 */

type RequestOptions = {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
  signal?: AbortSignal;
};

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

/**
 * Base API client for making HTTP requests
 */
class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  /**
   * Make a GET request
   */
  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>("GET", endpoint, undefined, options);
  }

  /**
   * Make a POST request
   */
  async post<T>(
    endpoint: string,
    data?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>("POST", endpoint, data, options);
  }

  /**
   * Make a PUT request
   */
  async put<T>(
    endpoint: string,
    data?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>("PUT", endpoint, data, options);
  }

  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>("DELETE", endpoint, undefined, options);
  }

  /**
   * Make a PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>("PATCH", endpoint, data, options);
  }

  /**
   * Make a request with the specified method
   */
  private async request<T>(
    method: RequestMethod,
    endpoint: string,
    data?: any,
    { headers = {}, params = {}, signal }: RequestOptions = {}
  ): Promise<T> {
    // Build URL with query parameters
    const url = new URL(`${this.baseUrl}${endpoint}`, window.location.origin);

    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });

    // Build request options
    const requestOptions: RequestInit = {
      method,
      headers: { ...this.defaultHeaders, ...headers },
      signal,
    };

    // Add body for non-GET requests
    if (data !== undefined && method !== "GET") {
      requestOptions.body = JSON.stringify(data);
    }

    // Make the request
    const response = await fetch(url.toString(), requestOptions);

    // Handle errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API request failed with status ${response.status}`
      );
    }

    // Parse response
    if (response.status === 204) {
      return {} as T; // No content
    }

    return response.json();
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();

// Export the class for testing or custom instances
export default ApiClient;
