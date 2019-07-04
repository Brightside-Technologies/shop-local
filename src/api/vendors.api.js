function Vendors() {
    function getByOwner(ownerId) {
        return fetch(
            `/.netlify/functions/vendors-get-by-owner/${ownerId}`
        ).then(response => {
            return response.json();
        });
    }

    function get(vendorId) {
        return fetch(`/.netlify/functions/vendors-get/${vendorId}`).then(
            response => {
                return response.json();
            }
        );
    }

    return Object.freeze({
        getByOwner,
        get
    });
}

export default Vendors;
