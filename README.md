# Arch React Native

Esse projeto tem o objetivo de servir como um estudo de arquitetura para um projeto em react-native para resolver os principais problemas que estamos enfrentando no projeto do app da Daki sem deixar de pensar na escalabilidade do projeto.

## Quais são as dores?

- Acoplamento de serviços com React, regras de negócio e SDK de terceiros ou parceiros 
- Falta de clareza no padrão da organização dos diretórios
- Falta de arquitetura de testes
- Falta de clareza nos limites das features
- Cada arquivos tem múltiplas responsabilidades
- Decisões tomadas para o gerenciamento de estado do app (redux, listeners...)
- Má hierarquia de elementos (prop-drilling)
- Dificuldade em rodar/testar algo isoladamente
- Efeitos colaterais das dependências circulares

## Camadas da arquitetura

Para começar a dividir as responsabilidades que cada parte da arquitetura tem, decidimos dividir a arquitetura nas seguintes camadas principais:

- Application
- Modules
- Core
- Design System

### Application

A Application é o principal ponto de entrada da aplicação, sendo responsável então por:

- inicializar o app
- definir a principal estrutura de navegação
- orquestrar as dependências entre os módulos: por exemplo, caso um módulo A precise apresentar uma lógica ou componente que faz parte do módulo B, é a camada de Application que passa o que for preciso do módulo B para o módulo A.

Essa camada é essencial para que um módulo possa ficar responsável por apenas as coisas próprias dele mas permitir receba dados ou reutilize componentes de outros módulos **sem que uma dependência direta** seja criada. Sem dependências diretas entre módulos, conseguimos atacar diretamente algumas das dores listadas:

- Facilitamos rodar/testar módulos isoladamente
- Dificultamos a criação de dependências circulares
