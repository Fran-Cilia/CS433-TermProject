export const performEmailScan = async (text) => {
    const url = `https://emailrep.io/${text}?summary=true`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to perform URL scan');
        }

        const responseData = await response.json();

        return responseData;
        
    } catch (e) {
        console.error('Error performing AI scan:', e.message);
        throw e;
    }
  };