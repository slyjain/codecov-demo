const {add,isEven}=require("../src/math")

test("add numbers",()=>{
    expect(add(2,3)).toBe(5);
})
test("detects even numbers", () => {
  expect(isEven(4)).toBe(true);
});