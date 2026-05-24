import{test,expect} from "@playwright/test"

test("expected example1",async function()
{
       let number=10

       expect(number).toBe(10);
       expect(number).toBeGreaterThan(5);
       expect(number).toBeLessThan(100);

})

test("expected example2",async function()
{
    let name="Ramesh Ugalawat"

    expect(name).toBe("Ramesh Ugalawat");

    expect(name).toContain("Ugalawat");
    
    expect(name.startsWith("Ramesh")).toBeTruthy();

    expect(name.endsWith("abc")).toBeFalsy()
})