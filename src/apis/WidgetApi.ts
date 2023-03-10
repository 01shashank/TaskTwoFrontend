import axios from "axios"


class WidgetApi {

    getWheatData(){
        return axios.get("http://localhost:9090/wheat")
    }

    getPulsesData(){
        return axios.get("http://localhost:9090/pulses")
    }

    getCerealsData(){
        return axios.get("http://localhost:9090/cereals")
    }

    getMilkData(){
        return axios.get("http://localhost:9090/milk")
    }

    
}

export default new WidgetApi()