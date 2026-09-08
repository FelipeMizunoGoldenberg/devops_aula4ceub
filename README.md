# devops_aula4ceub
Repositório da Aula 4 - Disciplina Integração Devops 2/2026

## Equipe

| Integrante      | GitHub            | Papel                        |
|------------------|--------------------|-------------------------------|
| Felipe Mizuno Goldenberg | [@FelipeMizunoGoldenberg](https://github.com/FelipeMizunoGoldenberg) | Desenvolvedor |
| Matheus Costa    | [@Matheuscpassos](https://github.com/Matheuscpassos) | Operações/Infraestrutura |

## Estratégia de Ramificação (Branching Strategy)

Este projeto adota **Trunk-Based Development**:
- A branch `main` é a fonte única de verdade e está protegida (branch protection rules).
- Todo trabalho é feito em branches de curta duração, nomeadas como `feature/<descricao>`.
- Mudanças só entram em `main` via Pull Request, exigindo que o pipeline de CI passe antes do merge.

## Pipeline CI/CD

O workflow em `.github/workflows/devsecops.yml` executa em cada push/PR para `main`:
1. **CI** — Lint (ESLint) e testes automatizados (Jest)
2. **DevSecOps** — Análise de dependências vulneráveis (`npm audit`) e scan de segredos (Gitleaks)
3. **CD** — Build e simulação de deploy