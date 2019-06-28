import { useState } from "react";

/**
 * Based on: https://levelup.gitconnected.com/performing-async-actions-using-hooks-e4da47293d8e
 * @export
 * @param {*} action action that wil be called. Might need to pass in a bound instance: e.g - signOut.bind(Auth)
 * @returns
 */
export default function useClientApi(action) {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);
    const [response, setResponse] = useState(null);

    // The incoming "action" argument to the hook is NOT performed.
    // It is only stored in the function scope; so that, we can use it when
    // performing the action using the following function
    // This function is returned as the second element in the returned array
    async function performAction(body = null) {
        try {
            setIsLoading(true);
            const response = await action(body);
            setResponse(response);
        } catch (e) {
            setHasError(e.Message);
        } finally {
            setIsLoading(false);
        }
    }

    return [isLoading, hasError, response, performAction];
}
