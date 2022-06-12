import { useSearchParams, useParams } from 'react-router-dom'
export default function About() {

    const paramsaa = useSearchParams()
    // let id = params.get('id')
    let params = useParams()
    console.log(paramsaa)
    console.log(params)
    return (
        <div>about
            <p>id:{params.id}</p>
        </div>
    )
}