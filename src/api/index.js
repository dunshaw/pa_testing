import instance from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const api = {
    // tester    
    tester (params) {        
        return instance.post('/apis/tester',qs.stringify(params));    
    },    
    // 其他接口…………
}

export default api;











