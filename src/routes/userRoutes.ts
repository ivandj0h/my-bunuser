import { getAllUsers, getUserById } from "../controllers/userController";

export const handleRequest = (url: URL) => {
    const idMatch = url.pathname.match(/^\/(\d+)$/);
    if (url.pathname === "/") {
        return getAllUsers();
    } else if (idMatch) {
        const userId = parseInt(idMatch[1]);
        return getUserById(userId);
    } else {
        return new Response(JSON.stringify({ error: "Not Found" }), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
};
