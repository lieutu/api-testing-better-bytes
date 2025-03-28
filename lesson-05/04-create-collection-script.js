let token = pm.environment.get("accessToken");
if (!token) {
  pm.sendRequest(
    {
      url: `${pm.environment.get("baseUrl")}/admin/auth/login`,
      method: "POST",
      body: {
        mode: "urlencoded",
        urlencoded: [
          { key: "username", value: `${pm.environment.get("username")}` },
          { key: "password", value: `${pm.environment.get("password")}` },
        ],
      },
    },
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
        var response = res.json();
        pm.environment.set("accessToken", response.data.accessToken);
      }
    }
  );
}
