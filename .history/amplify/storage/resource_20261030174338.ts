import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: "amplifyNotesDrive",
    access: (allow) => ({
        "media/{entity.id}/*": [
            allow.entity("identity").to(["read", "write"]),
        ],
    }),
});