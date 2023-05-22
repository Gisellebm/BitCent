import Id from "@/logic/core/comum/Id";
import servicos from "@/logic/core";
import { useContext, useEffect, useState } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import Transacao from "@/logic/core/financas/Transacao";


export default function useTransacao() {
    const { usuario } = useContext(AutenticacaoContext)
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);
    const [transacao, setTransacao] = useState<Transacao | null>(null);

    useEffect(() => {
        buscarTransacoes()
    }, [])

    async function buscarTransacoes() {
        if(!usuario) return
        const transacoes = await servicos.transacao.consultar(usuario) 
        setTransacoes(transacoes)
    }

    async function salvar(transacao: Transacao) {
        if(!usuario) return
        servicos.transacao.salvar(transacao, usuario);
        setTransacao(null);
        await buscarTransacoes();
    }

    async function excluir(transacao: Transacao) {
        if(!usuario) return
        await servicos.transacao.excluir(transacao, usuario);
        setTransacao(null);
        await buscarTransacoes();
        
    }

    return {
        transacoes,
        transacao,
        salvar,
        excluir,
        selecionar: setTransacao
    }
}