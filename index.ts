import * as checkly from "@checkly/pulumi";

new checkly.Check("api-check", {
  activated: true,
  frequency: 10,
  type: "API",
  request: {
    method: "GET",
    url: "https://checklyhq.com",
  }
})
