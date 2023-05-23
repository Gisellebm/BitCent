import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "./Lista";
import Grade from "./Grade";
import Sumario from "./Sumario";
import Formulario from "./Formulario";
import NaoEncontrado from "../templates/NaoEncotrado";
import { Button, SegmentedControl } from "@mantine/core";
import { IconPlus, IconList, IconLayoutGrid } from "@tabler/icons-react";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../templates/CampoMesAno";

export default function Financas() {
  const {
    data,
    alterarData,
    alterarExibicao,
    tipoExibicao,
    transacoes,
    transacao,
    selecionar,
    salvar,
    excluir,
  } = useTransacao();

  function renderizarControles() {
    return (
      <div className="flex justify-between">
        <CampoMesAno data={data} dataMudou={alterarData} />
        <div className="flex gap-5">
          <Button
            className="bg-blue-500"
            leftIcon={<IconPlus />}
            onClick={() => selecionar(transacaoVazia)}
          >
            Nova transação
          </Button>
          <SegmentedControl
            data={[
              { label: <IconList />, value: "lista" },
              { label: <IconLayoutGrid />, value: "grade" },
            ]}
            onChange={(tipo) => alterarExibicao(tipo as TipoExibicao)}
          />
        </div>
      </div>
    );
  }

  function renderizarTransacoes() {
    const props = { transacoes, selecionarTransacao: selecionar };
    return tipoExibicao === "lista" ? (
      <Lista {...props} />
    ) : (
      <Grade {...props} />
    );
  }

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <Sumario transacoes={transacoes}/>
        {renderizarControles()}
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            excluir={excluir}
            cancelar={() => selecionar(null)}
          />
        ) : transacoes.length > 0 ? (
          renderizarTransacoes()
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
