import Link from 'next/link'
import router, {useRouter} from 'next/router'

export default function rotas () {
    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Mateus">
                    <li>Parametros</li>
                </Link>
            </ul>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
            </div>

        </div>
    )
}