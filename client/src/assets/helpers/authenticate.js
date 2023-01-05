
const server_url = import.meta.env.VITE_API_BASE_URL;

//Function is responsible for authenticating user 
export const authenticate = async () => {
    const res = await fetch(`${server_url}/auth`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await res.text();
        return response
}