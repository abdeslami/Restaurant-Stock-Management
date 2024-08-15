// db.js

const getUsers = () => {
    const users = JSON.parse(localStorage.getItem('db.json')) || [];
    return users;
};

const addUser = (newUser) => {
    const users = getUsers();
    users.push(newUser);
    localStorage.setItem('db.json', JSON.stringify(users));
};

const updateUser = (cin, updatedUser) => {
    let users = getUsers();
    const index = users.findIndex(user => user.cin === cin);
    if (index !== -1) {
        users[index] = updatedUser;
        localStorage.setItem('db.json', JSON.stringify(users));
    }
};

const deleteUser = (cin) => {
    let users = getUsers();
    users = users.filter(user => user.cin !== cin);
    localStorage.setItem('db.json', JSON.stringify(users));
};

export { getUsers, addUser, updateUser, deleteUser };
