import { useRouter } from "next/dist/client/router"
import Link from 'next/link'

export default function params () {
    
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome

    console.log(router)

    return (
        <div>
            <h1>
                Rotas com parâmetros 
                <br /> Nome: {nome} 
                <br /> Id: {id} 
            </h1>
            <Link href="/rotas">
                <button>Voltar lá</button>
            </Link>
        </div>
    )
}