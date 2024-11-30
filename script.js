//Update Footer Year Dynamically
const yearElement = document.getElementById('current-year');
yearElement.textContent = new Date().getFullYear();

//Display a Greeting Based on Time of Day
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) {
  greetingElement.textContent = 'Good Morning!';
} else if (hour < 18) {
  greetingElement.textContent = 'Good Afternoon!';
} else {
  greetingElement.textContent = 'Good Evening!';
}