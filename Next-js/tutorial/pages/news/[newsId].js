import {useRouter} from 'next/router' // values encoded in url
//our-domain.com/news/*
export default function details(){
    const router =  useRouter()
    /*
    router.query.[<filename>]
    */
    // fetch data from get/router.query.anything
    return (<div>
        <h1>{router.query.newsId}</h1> 
    </div>)
}