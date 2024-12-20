const user = {
    name: "Jay Dhobi",
    age:20,
    profession: "Software Engineer"
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
