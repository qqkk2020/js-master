import { describe, it, expect } from "vitest";
import { validateAnswer, calculateScorePercentage } from "../src/js/quiz.js";

describe("Модульне тестування бізнес-логіки тренажера JSMaster (Lab 11)", () => {
    it("Коректно підтверджує правильну текстову відповідь", () => {
        expect(validateAnswer("'object'", "'object'")).toBe(true);
        expect(validateAnswer("x * x", "x * x")).toBe(true);
        expect(validateAnswer("false", "false")).toBe(true);
    });

    it("Ігнорує різницю регістрів та кінцеві пробіли", () => {
        expect(validateAnswer("  'OBJECT'  ", "'object'")).toBe(true);
        expect(validateAnswer("AWAIT", "await")).toBe(true);
    });

    it("Повертає false для неправильної відповіді або порожнього значення", () => {
        expect(validateAnswer("true", "false")).toBe(false);
        expect(validateAnswer(null, "'object'")).toBe(false);
        expect(validateAnswer("", "let")).toBe(false);
    });

    it("Точно розраховує відсоток успішності виконання", () => {
        expect(calculateScorePercentage(4, 4)).toBe(100);
        expect(calculateScorePercentage(2, 4)).toBe(50);
        expect(calculateScorePercentage(0, 4)).toBe(0);
    });

    it("Захищає від ділення на нуль при порожньому банку питань", () => {
        expect(calculateScorePercentage(0, 0)).toBe(0);
    });
});
