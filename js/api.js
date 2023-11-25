async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response) {
            throw new Error(`${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        displayAlertModal(error);
    }
}