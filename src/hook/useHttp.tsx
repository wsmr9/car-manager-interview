import { useState } from "react";
import { HttpOptions } from '../types'


// Custom hook to manage HTTP requests with built-in loading and error state management.
function useHttp() {
    // State hooks for managing the loading status and error information.
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Asynchronous function to send HTTP requests.
    const sendRequest = async (url: string, options: HttpOptions = { method: 'GET' }) => {
        setIsLoading(true); // Set loading to true at the start of the request.
        setError(null); // Clear any previous errors before starting a new request.

        try {
            // Configuration for the fetch request.
            const fetchConfig: RequestInit = {
                method: options.method, // HTTP method (default is GET).
                headers: {
                    'Content-Type': 'application/json', // Set content type to JSON.
                    ...options.headers // Extend with additional headers provided by the user.
                },
                body: options.body ? JSON.stringify(options.body) : null // Convert body to JSON string if it exists.
            };

            // Execute the fetch call using the configured parameters.
            const response = await fetch(url, fetchConfig);
            if (!response.ok) { // Check if the response status code indicates a failure.
                throw new Error('Request failed!'); // Throw an error if the response is not ok.
            }

            const data = await response.json(); // Parse the JSON response body.
            setIsLoading(false); // Reset loading state to false after the request is complete.
            return data; // Return the parsed data.
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message); // Now TypeScript knows err is an Error
            } else {
                setError('Something went wrong!');
            }
            setIsLoading(false);
            throw err; // Re-throw the error for handling by the caller.
        }
    };

    // Return the state and function from the hook for use in components.
    return {
        isLoading, // Whether the request is currently loading.
        error, // Any error that occurred during the request.
        sendRequest // Function to initiate a request.
    };
}

export default useHttp; // Export the custom hook for use in other parts of the application.
