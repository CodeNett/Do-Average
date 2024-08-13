var userNumbers = []
var userNumber = 0
var sum = 0

while (userNumber != -1) {
    userNumber = Number(prompt('Enter the number: \n enter -1 if you dont enter any number'))
    if (userNumber != -1) {
        userNumbers.push(userNumber)
    }
}

for (var i = 0 ; i < userNumbers.length ; i++) {
    sum += userNumbers[i]
}

console.log('Average : ' + sum / (userNumbers.length))