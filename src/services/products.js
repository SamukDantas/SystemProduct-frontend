import { http } from "./config";

export default {
    show:() => {
        return http.get('produtos');
    }
}