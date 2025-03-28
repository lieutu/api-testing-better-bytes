const responseJson = pm.response.json();
let token = responseJson.data.accessToken;
pm.environment.set("accessToken", token);

pm.test("Status code is 201", function () {
  pm.response.to.have.status(201);
});

pm.test("Message trả về là Login successful", () => {
  pm.expect(responseJson.message).to.eql("Login successful");
});
