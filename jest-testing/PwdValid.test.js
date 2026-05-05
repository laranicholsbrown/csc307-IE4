import { isValid } from "./PwdValidator.js";

test("6 characters is valid", () => {
  expect(isValid("Abc123")).toBeTruthy();
});

test("5 characters is NOT valid", () => {
  expect(isValid("Abc12")).toBeFalsy();
});

test("11 characters is NOT valid", () => {
  expect(isValid("Abcdef12345")).toBeFalsy();
});

test("contains no digit", () => {
  expect(isValid("Abcdef")).toBeFalsy();
});

test("contains no uppercase Letter", () => {
  expect(isValid("def345")).toBeFalsy();
});
