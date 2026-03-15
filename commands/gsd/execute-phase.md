# gsd:execute-phase

Executa os planos de uma fase com foco em ordem de dependencia, verificacao e progresso.

## Objetivo
- transformar `PLAN.md` em entrega real
- respeitar dependencias entre tarefas
- manter trilha de execucao clara

## O que deve acontecer
- ler o contexto e o plano da fase
- agrupar tarefas em ordem logica
- executar por ondas quando houver paralelizacao segura
- registrar resultado e verificacao

## Arquivos envolvidos
- `CONTEXT.md`
- `PLAN.md`
- `tasks/`
- `SUMMARY.md`
- `VERIFICATION.md`

## Diferencial do Faz Acontecer
- orientacao em portugues
- reforco de boas praticas durante a execucao
- preocupacao nativa com registro, verificacao e continuidade
