import Cabecalho from "@/components/templates/Cabecalho"
import Conteudo from "@/components/templates/Conteudo"
import Pagina from "@/components/templates/Pagina"

export default function CadastroUsuario() {
    return (
        <Pagina>
            <Cabecalho/>
            <Conteudo>
                <h1>Cadastro de Usuário</h1>
            </Conteudo>
        </Pagina>
    )
}