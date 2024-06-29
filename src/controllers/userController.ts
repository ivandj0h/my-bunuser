import { readFileSync } from "fs";
import { join } from "path";

// Membaca data dari data/user.json
const dataPath = join(import.meta.dir, "../data/user.json");
const userData = JSON.parse(readFileSync(dataPath, "utf-8"));

export const getAllUsers = () => {
    return new Response(JSON.stringify(userData, null, 2), {
        headers: { "Content-Type": "application/json" },
    });
};

export const getUserById = (id: number) => {
    const user = userData.find((u: any) => u.id === id);
    if (user) {
        return new Response(JSON.stringify(user, null, 2), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response(JSON.stringify({ error: "User not found" }), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
};
