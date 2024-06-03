/**
 * Defines configuration options for making HTTP requests.
 */
export interface HttpOptions {
    /**
     * HTTP method to be used for the request.
     * - 'GET': Retrieve data from a server at the specified resource.
     * - 'POST': Submit data to a server to create/update a resource.
     * - 'PUT': Replace the target resource with the request payload.
     * - 'DELETE': Delete the specified resource.
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';

    /**
     * The body of the request. Can be any type that is valid for an HTTP request body,
     * such as string, FormData, Blob, BufferSource, or URLSearchParams.
     * Note: It's typically used with 'POST' and 'PUT' methods.
     */
    body?: any;  // Consider specifying a more specific type if possible.

    /**
     * Object containing request headers, represented as key-value pairs.
     * Each key is the name of a header, and its corresponding value is the header's value.
     * Example: {'Content-Type': 'application/json'}
     */
    headers?: { [key: string]: string };
}
