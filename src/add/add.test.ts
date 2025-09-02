import { describe, expect, test } from "vitest";
import { add } from "./add";

describe(("toma un string como entradas y devuelve la suma de los números contenidos en el"), () => {

  test(("****números positivos***"), () => {
    expect(add("10,20,30")).toBe(60);
  })

  test("***números negativos***", () => {
    expect(add("1,-2,-3")).toBe(-4);
  })

  test("***números decimales***", () => {
    expect(add("1.56,2.50")).toBe(4.0600000000000005);
  })

  test("***números decimales negativos", () => {
    expect(add("-1.56,-2.50")).toBe(-4.0600000000000005);
  })

  test("***diferentes delimitadores***", () => {
    expect(add("1;2;3", ';')).toBe(6);
  })

})