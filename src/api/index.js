import URLs from "./URLs"
import axios from "axios"
const appkey = 'hwq_1_1585648175688'
const instance = axios.create({
    baseURL: URLs.baseURL,
    params: {
        appkey
    }
})

instance.interceptors.response.use(config => {
    if (config.data.data) {
        return config.data.data
    } else {
        return config.data
    }
})

const findByPage = (page, size) => {
    return instance.get(URLs.findByPage, {
        params: {
            page,
            size
        }
    })
}
const updataStu = options => {
    return instance.get(URLs.updataStu, {
        params: {
            ...options
        }
    })
}
const delStu = sNo => {
    return instance.get(URLs.delStu, {
        params: {
            sNo
        }
    })
}
const searchStu = options => {
    return instance.get(URLs.searchStu, {
        params: {
            sex: -1,
            ...options
        }
    })
}
const addStu = options => {
    return instance.get(URLs.addStu, {
        params: {
            ...options
        }
    })
}
export default {
    findByPage,
    updataStu,
    addStu,
    delStu,
    searchStu,
}