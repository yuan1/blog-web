import Mock from "mockjs";

const postData = Mock.mock({
  "data|1-20": [
    {
      id: "@id",
      title: "@title",
      content: "@cparagraph"
    }
  ]
});
Mock.mock("/post/list", "get", () => {
  return postData.data;
});
