import { serve } from "bun";
import { handleRequest } from "./routes/userRoutes";

const port = 3000;

serve({
    fetch(req) {
        const url = new URL(req.url);
        return handleRequest(url);
    },
    port,
});

console.log(`Server running at http://localhost:${port}`);
