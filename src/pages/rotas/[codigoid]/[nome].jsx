import { useRouter } from "next/dist/client/router"

// ARQUIVOS TAMBÉM PODEM SER UTILIZADOS COMO ROTAS DINÂMICAS, COMO NO CASO DESTE AQUI, DESDE QUE ENVOLTOS POR COLCHETES!!

export default function codIdNome () {

    const router = useRouter()
    const codigoId = router.query.codigoid
    const nome = router.query.nome

    console.log(codigoId)

    return (
        <div>
            <h1>Rotas - {codigoId} - {nome}</h1>
        </div>
    )
}