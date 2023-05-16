import Transacao from "@/logic/core/financas/Transacao";
import { useState } from "react";
import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "./Lista";
import transacoesFalsas from "@/data/constants/transacoesFalsas";

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas);
    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <Lista transacoes={transacoes} />
            </Conteudo>
            
        </Pagina>
    );
}