import Mock from "mockjs";
const carouselData = Mock.mock({
  "data|6-16": [
    {
      id: "@id",
      title: "@title",
      image: "@dataImage(1104x300)"
    }
  ]
});
Mock.mock("/carousel/list", "get", () => {
  return carouselData.data;
});
