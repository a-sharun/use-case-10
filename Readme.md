# use-case-10

# Regex Input Validator

### Description

This repository contains an application that leverages the power of regular expressions (regex) to validate user inputs, ensuring security, reliability, and conformity to specific criteria.

### Validation Criteria:

- At least one uppercase letter.
- At least one lowercase letter.
- At least one digit.
- At least one special character.
- No whitespace characters.

### Usage

To utilize this application, input your string and the application will verify if it matches the defined criteria. If it passes, it means the input adheres to all the validation rules. If it fails, the user will need to modify their input to match the requirements.

### `validateString` Function Documentation

The validateString function provides robust validation for a given input string based on a specific set of criteria. By utilizing regular expressions, this function ensures that the input not only adheres to the defined criteria but also allows users to specify a maximum length for the string.

#### Implementation Details:

The function makes use of positive lookaheads `(?=)` for the criteria that must be met and a negative lookahead`(?!)` to ensure unwanted patterns (like whitespaces) are not present in the string.

To validate the string's length, a range quantifier `(.{1,${maxLength}})` is used which checks that the total length of the string is between 1 and maxLength, inclusive.

The anchors `^` and `$` at the beginning and end of the regex pattern ensure that the entire input string is checked against the criteria from start to finish.

## How to run application locally

1. Clone the repo

```bash
git clone https://github.com/a-sharun/use-case-10.git
```

2. Go into project directory

```bash
cd use-case-10/my-app
```

3. Install packages

```bash
npm i
```

4. Run the app

```bash
npm start
```

## Running Tests

This project uses Jest for testing.

### Prerequisites

Ensure you have Node.js installed. If not, download and install it from nodejs.org.

### Installation

If you haven't installed the project's dependencies yet, navigate to the project directory and run:

```bash
npm install
```

This will install Jest and any other necessary dependencies for the project.

### Running the Tests

Once all dependencies are installed, you can run the tests with:

```bash
npm test
```

This will start Jest and run all tests in the project. Jest will report the test results in the console.
