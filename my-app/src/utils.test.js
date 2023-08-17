import { validateString } from "./utils"; // Update this import path

describe("validateString", () => {
  const maxLength = 10;

  it("should fail for too short input", () => {
    const input = "";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for too long input", () => {
    const input = "Aa1!".padEnd(maxLength + 1, "x");
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for missing uppercase", () => {
    const input = "aa1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for missing lowercase", () => {
    const input = "AA1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for missing special character", () => {
    const input = "Aa1";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for missing digit", () => {
    const input = "Aa!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for whitespace at the start", () => {
    const input = " Aa1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for whitespace at the end", () => {
    const input = "Aa1! ";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for whitespace in the middle", () => {
    const input = "Aa 1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for tab at the start", () => {
    const input = "\tAa1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for tab at the end", () => {
    const input = "Aa1!\t";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for tab in the middle", () => {
    const input = "Aa\t1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for newline at the start", () => {
    const input = "\nAa1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for newline at the end", () => {
    const input = "Aa1!\n";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should fail for newline in the middle", () => {
    const input = "Aa\n1!";
    expect(validateString(input, maxLength)).toBeFalsy();
  });

  it("should pass for valid string", () => {
    const input = "Aa1!";
    expect(validateString(input, maxLength)).toBeTruthy();
  });
});
