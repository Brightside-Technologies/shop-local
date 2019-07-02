function Vendors() {
    function getByUserId(userId) {
        return fetch(`/.netlify/functions/vendors-get/${userId}`).then(
            response => {
                return response.json();
            }
        );
    }

    return Object.freeze({
        getByUserId
    });
}

export default Vendors;
