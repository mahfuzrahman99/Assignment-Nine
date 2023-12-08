<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: B

<i>In JavaScript, the term "undefined" refers to a variable that has been declared but has not been assigned a value. It essentially means that the variable exists, but it doesn't have a defined value. This can happen when a variable is declared without initialization or when you try to access a variable that doesn't exist in the current scope, resulting in an "undefined" value.
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b> C: `"12"`</b></summary>
<p>

#### Answer: C

<i>When concatenating a string with a number, the result will be a string. In this case, 'b' is a string, and the outcome remains a string.
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: A

<i>The assignment info.favoriteFood = "🍝" only changes the value of the favoriteFood property within the info object. It does not modify the original food array, which remains ['🍕', '🍫', '🥑', '🍔'].
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: B

<i>When you call the sayHi() function without providing an argument, it doesn't receive any value for the name parameter. In JavaScript, when a function expects a parameter but doesn't receive one, the parameter is automatically assigned the value undefined.
So, in the function's return statement, ${name} is attempting to interpolate the value of name, but since it's undefined in this case, the result is "Hi there, undefined."</i>
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>- C: 3</b></summary>
<p>

#### Answer: C

<i>The forEach loop iterates over each element in the nums array. When it encounters a value that is truthy (not equal to 0), it increments the count variable by 1. In this case, there are three truthy values in the array (1, 2, and 3), so the count variable is incremented three times. As a result, the final value of count is 3, which is what gets logged to the console.</i>

</p>
</details>
