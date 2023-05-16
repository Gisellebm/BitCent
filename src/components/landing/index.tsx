import Pagina from "../templates/Pagina";
import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaques from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing() {
    return (
        <Pagina externa>
            <Cabecalho />
            <Destaques />
            <Vantagens />
            <Depoimentos />
            <Rodape />
        </Pagina>
    )
}