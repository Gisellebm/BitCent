import Transacao from "@/logic/core/financas/Transacao";
import { useState } from "react";
import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "./Lista";
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Formulario from "./Formulario";
import NaoEncontrado from "../templates/NaoEncotrado";
import Id from "@/logic/core/comum/Id";

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas);
    const [transacao, setTransacao] = useState<Transacao | null>(null);

    function salvar(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id);
        setTransacoes([...outrasTransacoes, {
            ...transacao,
            id: transacao.id ?? Id.novo()
        }]);
        setTransacao(null);
    }

    function excluir(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id);
        setTransacoes(outrasTransacoes);
        setTransacao(null);
        
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                {transacao ? (
                    <Formulario 
                        transacao={transacao} 
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => setTransacao(null)}
                    />
                ) : transacoes.length ? (
                    <Lista 
                        transacoes={transacoes} 
                        selecionarTransacao={setTransacao} 
                    />

                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                )}
            </Conteudo>
            
        </Pagina>
    );
}