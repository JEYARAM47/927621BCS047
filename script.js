let users = {
    testuser: { password: 'password123', email: 'testuser@example.com' }
};

function createUser() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const email = document.getElementById('email').value;

    if (users[username]) {
        alert('User already exists!');
    } else {
        users[username] = { password, email };
        alert('User created successfully!');
        window.location.href = 'index.html';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username].password === password) {
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password');
    }
}
