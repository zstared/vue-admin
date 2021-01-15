import Mock from "mockjs";

Mock.mock("/core/user/current", {
  code: 0,
  data: {
    name: "zxh",
  },
  message: "success",
});
