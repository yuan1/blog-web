/**
 * common模块接口列表
 * @author lmy
 * @date 2019-08-07
 */

import axios from "@/utils/request"; // 导入http中创建的axios实例

const common = {
  getCarouselList() {
    return axios.get("/carousel/list");
  }
};

export default common;
