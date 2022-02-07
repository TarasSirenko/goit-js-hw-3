const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy'

let { name, age, hobby, premium, mood } = user
 console.log(mood);

hobby = 'skydiving'
console.log(hobby);
premium = false
console.log(premium);

const keys = Object.keys(user)
// console.log(Object.keys(user));
for (const key of keys) {
    console.log(`${key} : ${user[key]}`);
}