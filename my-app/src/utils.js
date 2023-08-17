/**
 * Validate a string's content and length using a regular expression.
 *
 * @param {string} input - The string to validate.
 * @param {number} maxLength - The allowed maximum length for the string.
 * @return {boolean} True if the string is valid, false otherwise.
 */
export function validateString(input, maxLength = 5) {
  // 1. ^ and $: Ensure that the regex checks the entire string from start to end.
  // 2. (?=.*[A-Z]): A positive lookahead to ensure at least one uppercase letter is present.
  // 3. (?=.*[a-z]): A positive lookahead to ensure at least one lowercase letter is present.
  // 4. (?=.*[0-9]): A positive lookahead to ensure at least one digit is present.
  // 5. (?=.*[!"#$%&'()*+,-./:;<=>?@\\[\\]^_`{|}~]):
  // A positive lookahead to ensure at least one of the special characters is present.
  // 6. (?!.*\\s): A negative lookahead to ensure no whitespace characters (spaces, tabs, newlines, etc.) are present.
  // 7. .{1,${maxLength}}: Ensures that the total length of the string is between 1 and maxLength (inclusive).
  const regex = new RegExp(
    `^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@\\[\\]^_{|}~])(?!.*\\s).{1,${maxLength}}$`
  );
  return regex.test(input);
}
