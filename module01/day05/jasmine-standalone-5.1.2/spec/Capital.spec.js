//Describe what you are testing (the name of the function)
describe("Capitalize string", function () {
  //What the function should do
  //Check that the function is defined
  it("Should be defined", function () {
    expect(capital).toBeDefined();
  });

  //Use words like it 'should' do this or not this
  it("Should capitalize the first letter", function () {
    //This is where we write what to expect the function return
    expect(capital("ragnar")).toBe("Ragnar");
    expect(capital("mohammed")).toBe("Mohammed");
    expect(capital("shaza")).toBe("Shaza");
  });

  //check if an argument is present
  it("Should receive one argument", function () {
    expect(capital.length).toBe(1);
    expect(capital()).toBeNull();
  });
});
