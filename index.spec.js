const dice = require("./index");
test("Returns a random number between 1 and 6", () => {
    const rollResult = dice.roll();
    console.log(`result was ${rollResult}`);
    expect(rollResult).toBeGreaterThanOrEqual(1);
    expect(rollResult).toBeLessThanOrEqual(6);
});

test("Suma de dos numeros",()=>{
    const resultado = dice.suma(3,5);
    console.log(`El resultado de la suma es ${resultado}`);
    expect(resultado).toBe(8);
});