import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "./Lista";
import Formulario from "./Formulario";
import NaoEncontrado from "../templates/NaoEncotrado";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransacao from "@/data/hooks/useTransacao";

export default function Financas() {
    
   const { transacoes, transacao, selecionar, salvar, excluir } = useTransacao();    

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Button
                    className="bg-blue-500"
                    leftIcon={<IconPlus />}
                    onClick={() => selecionar(transacaoVazia)}
                    >Nova transação
                </Button>
                {transacao ? (
                    <Formulario 
                        transacao={transacao} 
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => selecionar(null)}
                    />
                ) : transacoes.length ? (
                    <Lista 
                        transacoes={transacoes} 
                        selecionarTransacao={selecionar} 
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