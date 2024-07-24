// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js



const getUserButton = document.getElementById('getUserButton');
const userNameInput = document.getElementById('userNameInput');
const userCity = document.getElementById('userCity');

getUserButton.addEventListener('click', function() {
    const userName = userNameInput.value.trim();
    if (userName === '') {
        alert('Please enter a valid user name.');
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const foundUser = users.find(user => user.name === userName);
            if (foundUser) {
                userCity.textContent = foundUser.address.city;
            } else {
                userCity.textContent = 'User not found';
            }
        })
        
        .catch(error => {
            console.error('Error fetching data:', error);
            userCity.textContent = 'Error fetching user data';
        });
});