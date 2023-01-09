import { authenticate } from "./authenticate";

export const authenticateAndReroute = async () => {
    const res = await authenticate();
    if(!res.isAuthenticated) {
        return window.location.href='/';
    }
};

export const checkIfLoggedIn = async () => {
    const res = await authenticate();
    if (res.isAuthenticated) {
        return window.location.href='/';
    }
}