import { expect, test, it, describe } from "vitest"
import tonumber from "../src/main"

test("tonumber", () => {
    describe("should return number", () => {
        it("should return number", () => {
            expect(tonumber("1")).toBe(1)
            expect(tonumber("-1")).toBe(-1)
            expect(tonumber("1.1")).toBe(1.1)
            expect(tonumber("1.1.1")).toBe(1.1)
            expect(tonumber(">1")).toBe(1)
            expect(tonumber("<1")).toBe(1)
            expect(tonumber(">0.1")).toBe(0.1)
            expect(tonumber("<0.1")).toBe(0.1)
        })
    })

    describe("should return 0", () => {
        it("should return 0", () => {
            expect(tonumber("")).toBe(0)
            expect(tonumber("null")).toBe(0)
            expect(tonumber("undefined")).toBe(0)
            expect(tonumber("NaN")).toBe(0)
            expect(tonumber({})).toBe(0)
            expect(tonumber([])).toBe(0)
            expect(tonumber(() => { })).toBe(0)
            expect(tonumber(/a/)).toBe(0)
        })

    })



})