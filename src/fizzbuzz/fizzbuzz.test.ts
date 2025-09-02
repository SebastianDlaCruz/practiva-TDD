import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("si el numero divisible por 3 devolver fizz", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  })

  test("si el numero divisible por 5 devolver buzz", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  })

  test("si el numero divisible por 3 y 5 devolverFizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  })

  test("que sea divisible por 3 y 5", () => {
    expect(() => fizzBuzz(2)).toThrowError("El numero debe ser divisible por 3 y por 5")
  })

  test("si los números son negativos", () => {
    expect(fizzBuzz(-3)).toBe("fizz");
    expect(fizzBuzz(-5)).toBe("buzz");
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  })

  test("si los números son decimales", () => {
    expect(fizzBuzz(3.0)).toBe("fizz");
  })
});