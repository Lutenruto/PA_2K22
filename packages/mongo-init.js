db.createUser({
    user: "admin_pa_user",
    pwd: "&gAm5-è&é",
    roles: [
        {
            role: "readWrite",
            db: "projet_annuel",
        },
    ],
});
