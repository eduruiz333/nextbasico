import { useRouter } from "next/dist/client/router"

// PARA UTILIZAR ROTAS TINÂMICAS, BASTA RENOMEAR O NOME DO DIRETÓRIO ENTRE COLCHETES => [id]

export default function buscar () {

    const router = useRouter()
    const codigoId = router.query.codigoid

    console.log(codigoId)

    return (
        <div>
            <h1>Rotas - {codigoId} - Buscar</h1>
        </div>
    )
}