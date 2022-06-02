const dayOfWeek = prompt('Enter a day');

if (dayOfWeek === 'Monday') {
  console.log('Ugh I hate Mondays')
} else if (dayOfWeek === 'Saturday') {
  console.log('Yay I love Saturdays')
} else if (dayOfWeek === 'Friday') {
  console.log ('Just one more day baby')
} else {
  console.log('Meh')
}


const age = 8;

if (age < 8) {
  console.log('You are a baby. You get in for free')
} else if (age < 10) {
  console.log('You are a child. You pay $10')
} else if (age < 65) {
  console.log('You are an adult. You pay $20')
}
