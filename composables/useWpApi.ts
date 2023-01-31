import {Post} from '~~/types/post'

export default()=>{
    const config = useRuntimeConfig()
    const WP_URL: string = config.wpUri

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
    }

}