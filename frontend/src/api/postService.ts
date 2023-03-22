import API from "./API";
import { Posts } from "../@types/posts";

export default{
    async getAllPosts(){
        const response = await API().get('');
        return response.data
    }
}