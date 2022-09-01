export interface Source
{
    id: string | null;
    name: string;
}

export interface Article
{
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Response
{
    articles: Array<Article>;
}

export interface ErrorPayload
{
    message: string;
}

export interface ActionErrorPayload
{
    error: ErrorPayload;
}


export const dataMock: Response = {
    articles: [
        {
            source: {
                id: null,
                name: "Publico.pt"
            },
            author: "publico@publico.pt",
            title: "A formação do Brasil",
            description: "No final do período colonial, a população de origem africana no Brasil constituía a vasta maioria num conjunto estimado entre três e quatro milhões de pessoas. Os preconceitos raciais a que foram submetidos, visando justificar a hierarquia social, deram lugar…",
            url: "https://www.publico.pt/2022/08/08/culturaipsilon/ensaio/formacao-brasil-2014491",
            urlToImage: "https://imagens.publico.pt/imagens.aspx/1720650?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Ipsilon.png",
            publishedAt: "2022-08-08T05:59:00Z",
            content: "A colonização portuguesa, o tráfico de escravos de África e a relação com a população ameríndia foram fatores de formação do Brasil. Entre 1415, data da conquista de Ceuta, e 1822, data da independên… [+256 chars]"
        },
        {
            source: {
                id: null,
                name: "Jovemnerd.com.br"
            },
            author: "Alexandre Ottoni e Deive Pazos",
            title: "Quebrando galhos no Brasil inteiro",
            description: "Vamos falar sobre o processo de digitalização do seu negócio, comentando todo o processo a partir da visão e experiência do próprio lojista que está no Magalu Marketplace. Vem ouvir! \nThe post Quebrando galhos no Brasil inteiro appeared first on Jovem Nerd.",
            url: "https://jovemnerd.com.br/nerdcast/papo-de-parceiro/quebrando-galhos-no-brasil-inteiro/",
            urlToImage: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/nc_parceiro13_quebra_galho__h022e8-scaled.jpg",
            publishedAt: "2022-08-19T17:39:39Z",
            content: "O que é o Papo de Parceiro?\r\nUm espaço para falar sobre o Market Place do MagaLu, explicar essa ferramenta de digitalização, para as pessoas que tem um comércio pequeno conseguirem aproveitar a estru… [+65 chars]"
        },
        {
            source: {
                id: null,
                name: "The Intercept"
            },
            author: "Guilherme Mazieiro",
            title: "Fome só é um problema para Bolsonaro se for na Venezuela",
            description: "Presidente explora a história de refugiados para ressuscitar o fantasma da crise no país vizinho e negar a fome que assola o Brasil em seu governo. \nThe post Fome só é um problema para Bolsonaro se for na Venezuela appeared first on The Intercept.",
            url: "https://theintercept.com/2022/08/31/fome-so-problema-bolsonaro-venezuela/",
            urlToImage: "https://theintercept.imgix.net/wp-uploads/sites/1/2022/08/Notas-Bolsonaro-Fome-Venezuela.png?auto=compress%2Cformat&q=90&fit=crop&w=1200&h=800",
            publishedAt: "2022-08-31T15:07:14Z",
            content: "O patrimônio do ex-ministro do Meio Ambiente Ricardo Salles, candidato a deputado federal pelo PL de São Paulo, despencou. Após apresentar uma evolução na casa dos 600% de 2012 a 2018, passando de R$… [+2782 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Emerson Alecrim",
            title: "Uber Rewards: programa de fidelidade vai ser encerrado no Brasil",
            description: "Uber Rewards é um programa de fidelidade (com pontos) gratuito; encerramento vale para o Brasil e outros países\nUber Rewards: programa de fidelidade vai ser encerrado no Brasil",
            url: "https://tecnoblog.net/noticias/2022/08/15/uber-rewards-programa-de-fidelidade-vai-ser-encerrado-no-brasil/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2020/11/charles-deluvio-6OF-Ly-5oJY-unsplash-scaled-e1605709722720.jpg",
            publishedAt: "2022-08-15T18:22:36Z",
            content: "Há três anos, o Uber Rewards era lançado no Brasil. O programa de fidelidade do aplicativo de transporte oferece vários benefícios, como viagens com motoristas VIP e prioridade em corridas a partir d… [+2387 chars]"
        },
        {
            source: {
                id: null,
                name: "The Intercept"
            },
            author: "Lucas Rezende",
            title: "Forças Armadas deturpam história do Brasil ao militarizar o 7 de setembro",
            description: "Comemorações da independência viraram propaganda dos militares, o que contribui para perpetuar a narrativa que somos independentes devido a eles – o que não é a verdade histórica.\nThe post Forças Armadas deturpam história do Brasil ao militarizar o 7 de setem…",
            url: "https://theintercept.com/2022/09/01/forcas-armadas-deturpam-historia-do-brasil-militarizar-7-de-setembro/",
            urlToImage: "https://theintercept.com/wp-uploads/sites/1/2022/08/bolsonaro-exercito-vozes.jpg",
            publishedAt: "2022-09-01T10:00:32Z",
            content: "Foto: Marcos Corrêa/PR\r\nUma das formas\r\n de avaliarmos a qualidade de democracias ao redor do mundo é analisar a participação dos militares nessas sociedades. Com a proximidade do 7 de setembro no Br… [+15148 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Gabrielly Bento",
            title: "Investimento em publicidade digital atingiu mais de R$ 30 bilhões em 2021",
            description: "O IAB Brasil, associação que retrata o mercado de publicidade digital do Brasil, lançou um programa chamado Digital AdSpend 2021.\nO post Investimento em publicidade digital atingiu mais de R$ 30 bilhões em 2021 apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/02/pro/investimento-em-publicidade-digital-atingiu-mais-de-r-30-bilhoes-em-2021/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Investimento-em-publicidade-digital-atingiu-mais-de-R-30-bilhoes.jpg",
            publishedAt: "2022-08-02T18:39:00Z",
            content: "O IAB Brasil, associaÃ§Ã£o que retrata o mercado de publicidade digital do Brasil, lanÃ§ou um programa chamado Digital AdSpend 2021. De acordo com uma pesquisa feita em colaboraÃ§Ã£o com a Kantar IBO… [+5527 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "William Schendes",
            title: "Ataques cibernéticos no Brasil cresceram 46% no segundo trimestre",
            description: "Dados da Checkpoint Research mostram que a média de ataques cibernéticos no segundo trimestre de 2022 teve aumento de 46% no Brasil.\nO post Ataques cibernéticos no Brasil cresceram 46% no segundo trimestre apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/09/seguranca/ataques-ciberneticos-brasil-cresce-46/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_2147572449.jpg",
            publishedAt: "2022-08-09T15:19:43Z",
            content: "O Brasil segue como um dos paÃ­ses que mais sofre com ataques hackers. Dados da Checkpoint Research mostram que a mÃ©dia de ataques cibernÃ©ticos no segundo trimestre de 2022 teve aumento de 46%, uma… [+2502 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Redação",
            title: "Brasil registra 144 mortes por Covid-19 nas últimas 24 horas",
            description: "De acordo com o Conass, mais de 144 mortes ocorreram em decorrência da Covid-19 nas últimas 24 horas no Brasil\nO post Brasil registra 144 mortes por Covid-19 nas últimas 24 horas apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/20/coronavirus/brasil-registra-144-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/Covid-1.jpg",
            publishedAt: "2022-08-20T21:15:55Z",
            content: "Conforme os nÃºmeros atualizados nesta sexta-feira (19) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e pelo MinistÃ©rio da SaÃºde, o Brasil registrou 144 mortes por Covid-19 nas Ãºltimas… [+1722 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 265 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quarta-feira (3) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 265 mortes por Covid-19 nas últimas 24 horas e mais de 30 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/03/coronavirus/brasil-registra-265-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/11/Covid-19-Brasil.jpg",
            publishedAt: "2022-08-03T21:07:52Z",
            content: "Conforme os nÃºmeros atualizados nesta quarta-feira (3) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 265 mortes por Covid-19 nas Ãºltima… [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 255 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quarta-feira (10) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 255 mortes por Covid-19 nas últimas 24 horas e mais de 30 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/10/coronavirus/brasil-registra-255-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/10/brasil-covid.jpg",
            publishedAt: "2022-08-10T21:05:11Z",
            content: "Conforme os nÃºmeros atualizados nesta quarta-feira (10) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 255 mortes por Covid-19 nas Ãºltim… [+1713 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 170 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta segunda-feira (8) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 170 mortes por Covid-19 nas últimas 24 horas e mais de 17 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/08/coronavirus/brasil-registra-170-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/brasil-covid.jpg",
            publishedAt: "2022-08-08T21:04:56Z",
            content: "Conforme os nÃºmeros atualizados nesta segunda-feira (8) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 170 mortes por Covid-19 nas Ãºltim… [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 203 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta terça-feira (23) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 203 mortes por Covid-19 nas últimas 24 horas e mais de 20 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/23/coronavirus/brasil-registra-203-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-brasil.jpg",
            publishedAt: "2022-08-23T21:03:33Z",
            content: "Conforme os nÃºmeros atualizados nesta terÃ§a-feira (23) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 203 mortes por Covid-19 nas Ãºltim… [+1734 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 122 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta segunda-feira (22) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 122 mortes por Covid-19 nas últimas 24 horas e mais de 6 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/22/coronavirus/brasil-registra-122-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-no-brasil.jpg",
            publishedAt: "2022-08-22T21:06:18Z",
            content: "Conforme os nÃºmeros atualizados nesta segunda-feira (22) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 122 mortes por Covid-19 nas Ãºlti… [+1729 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 120 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta segunda-feira (15) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 120 mortes por Covid-19 nas últimas 24 horas e mais de 7 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/15/coronavirus/brasil-registra-120-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/shutterstock_1792018313.jpg",
            publishedAt: "2022-08-15T21:03:41Z",
            content: "Conforme os nÃºmeros atualizados nesta segunda-feira (15) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 120 mortes por Covid-19 nas Ãºlti… [+1721 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 142 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta sexta-feira (19) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 142 mortes por Covid-19 nas últimas 24 horas e mais de 18 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/19/coronavirus/brasil-registra-142-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/03/Mortes-por-Covid-no-Brasil-1.jpg",
            publishedAt: "2022-08-19T21:04:22Z",
            content: "Conforme os nÃºmeros atualizados nesta sexta-feira (19) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 142 mortes por Covid-19 nas Ãºltima… [+1723 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 247 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quarta-feira (17) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 247 mortes por Covid-19 nas últimas 24 horas e mais de 20 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/17/coronavirus/brasil-registra-247-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/01/shutterstock_1693667752.jpg",
            publishedAt: "2022-08-17T21:04:29Z",
            content: "Conforme os nÃºmeros atualizados nesta quarta-feira (17) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 247 mortes por Covid-19 nas Ãºltim… [+1725 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Matheus Barros",
            title: "Brasil registra 75 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta sábado (27) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 75 mortes por Covid-19 nas últimas 24 horas e mais de 12 mil novos casos da doença. Confira os números atu…",
            url: "https://olhardigital.com.br/2022/08/27/coronavirus/brasil-registra-75-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_1899165241.jpg",
            publishedAt: "2022-08-27T21:03:50Z",
            content: "Conforme os nÃºmeros atualizados nesta sÃ¡bado (27) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 75 mortes por Covid-19 nas Ãºltimas 24 … [+1726 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Acsa Gomes",
            title: "Brasil registra 47 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados neste domingo (21) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 47 mortes por Covid-19 nas últimas 24 horas e mais de 5 mil novos casos da doença. Confira os números atu…",
            url: "https://olhardigital.com.br/2022/08/21/coronavirus/brasil-registra-47-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/10/Brasil-grafico-queda-covid.jpg",
            publishedAt: "2022-08-21T21:14:50Z",
            content: "Conforme os nÃºmeros atualizados neste domingo (21) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 47 mortes por Covid-19 nas Ãºltimas 24 … [+1723 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 128 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta segunda-feira (29) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 128 mortes por Covid-19 nas últimas 24 horas e mais de 12 mil novos casos da doença. Confira os núm…",
            url: "https://olhardigital.com.br/2022/08/29/coronavirus/brasil-registra-128-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-no-brasil.jpg",
            publishedAt: "2022-08-29T21:08:06Z",
            content: "Conforme os nÃºmeros atualizados nesta segunda-feira (29) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 128 mortes por Covid-19 nas Ãºlti… [+1733 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 229 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta terça-feira (30) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 229 mortes por Covid-19 nas últimas 24 horas e mais de 16 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/30/coronavirus/brasil-registra-229-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-brasil.jpg",
            publishedAt: "2022-08-30T21:08:02Z",
            content: "Conforme os nÃºmeros atualizados nesta terÃ§a-feira (30) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 229 mortes por Covid-19 nas Ãºltim… [+1732 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 114 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quarta-feira (31) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 114 mortes por Covid-19 nas últimas 24 horas e mais de 15 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/31/coronavirus/brasil-registra-114-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/02/Covid-19.png",
            publishedAt: "2022-08-31T21:10:08Z",
            content: "Conforme os nÃºmeros atualizados nesta quarta-feira (31) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 114 mortes por Covid-19 nas Ãºltim… [+1735 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Murilo Benevides",
            title: "Apple aumenta preço de vários produtos no Brasil, inclusive do iPhone",
            description: "Os produtos da Apple no Brasil nunca foram baratos, especialmente se considerarmos o poder aquisitivo do brasileiro, mas nesta quinta-feira (11), a empresa norte-americana aumentou o preço de diversos produtos em seu site oficial, deixando alguns deles um pou…",
            url: "https://olhardigital.com.br/2022/08/11/reviews/apple-aumenta-preco-de-varios-produtos-no-brasil-inclusive-do-iphone/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_2162351685.jpg",
            publishedAt: "2022-08-11T22:01:14Z",
            content: "Os produtos da Apple no Brasil nunca foram baratos, especialmente se considerarmos o poder aquisitivo do brasileiro, mas nesta quinta-feira (11), a empresa norte-americana aumentou o preÃ§o de divers… [+2963 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil já realizou mais de 8 mil testes da varíola dos macacos",
            description: "De acordo com dados atualizados do Ministério da Saúde, o Brasil já realizou cerca de 8.850 testes para comprovação de casos de varíola dos macacos. Segundo a pasta, o país acumula 3,1 mil casos de infecção, espalhados por 27 estados, segundo dados divulgados…",
            url: "https://olhardigital.com.br/2022/08/17/medicina-e-saude/brasil-ja-realizou-mais-de-8-mil-testes-da-variola-dos-macacos/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/06/variola-dos-macacos-2.jpg",
            publishedAt: "2022-08-17T14:11:31Z",
            content: "De acordo com dados atualizados do MinistÃ©rio da SaÃºde, o Brasil jÃ¡ realizou cerca de 8.850 testes para comprovaÃ§Ã£o de casos de varÃ­ola dos macacos. Segundo a pasta, o paÃ­s acumula 3,1Â mil ca… [+2402 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 206 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta terça-feira (16) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 206 mortes por Covid-19 nas últimas 24 horas e mais de 23 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/16/coronavirus/brasil-registra-206-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-brasil.jpg",
            publishedAt: "2022-08-16T21:10:16Z",
            content: "Conforme os nÃºmeros atualizados nesta terÃ§a-feira (16) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 206 mortes por Covid-19 nas Ãºltim… [+1727 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 202 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quarta-feira (24) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 202 mortes por Covid-19 nas últimas 24 horas e mais de 18 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/24/coronavirus/brasil-registra-202-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2020/12/shutterstock_1693667761Simfalex.jpg",
            publishedAt: "2022-08-24T21:05:49Z",
            content: "Conforme os nÃºmeros atualizados nesta quarta-feira (24) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 202 mortes por Covid-19 nas Ãºltim… [+1731 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 201 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta segunda-feira (1) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 201 mortes por Covid-19 nas últimas 24 horas e mais de 20 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/01/coronavirus/brasil-registra-201-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2020/12/shutterstock_1693667761Simfalex.jpg",
            publishedAt: "2022-08-01T21:08:08Z",
            content: "Conforme os nÃºmeros atualizados nesta segunda-feira (1) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 201 mortes por Covid-19 nas Ãºltim… [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 222 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta sexta-feira (5) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 222 mortes por Covid-19 nas últimas 24 horas e mais de 29 mil novos casos da doença. Confira os número…",
            url: "https://olhardigital.com.br/2022/08/05/coronavirus/brasil-registra-222-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2020/12/shutterstock_1774504580.jpg",
            publishedAt: "2022-08-05T21:04:33Z",
            content: "Conforme os nÃºmeros atualizados nesta sexta-feira (5) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 222 mortes por Covid-19 nas Ãºltimas… [+1711 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Da Redação",
            title: "Brasil registra 181 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados neste sábado (6) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 181mortes por Covid-19 nas últimas 24 horas e mais de 16,7 mil novos casos da doença. Confira os números at…",
            url: "https://olhardigital.com.br/2022/08/06/coronavirus/brasil-registra-181-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/02/Covid-19.png",
            publishedAt: "2022-08-06T21:02:47Z",
            content: "Conforme os nÃºmeros atualizados neste sÃ¡bado (6) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e pelo MinistÃ©rio da SaÃºde, o Brasil registrou 181mortes por Covid-19 nas Ãºltimas 24 ho… [+1742 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 365 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta terça-feira (9) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 365 mortes por Covid-19 nas últimas 24 horas e mais de 30 mil novos casos da doença. Confira os número…",
            url: "https://olhardigital.com.br/2022/08/09/coronavirus/brasil-registra-365-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/03/Mortes-por-Covid-no-Brasil-1.jpg",
            publishedAt: "2022-08-09T21:04:44Z",
            content: "Conforme os nÃºmeros atualizados nesta terÃ§a-feira (9) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 365 mortes por Covid-19 nas Ãºltima… [+1711 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Lucena",
            title: "Brasil registra menos de 60 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados neste domingo (7) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 57 mortes por Covid-19 nas últimas 24 horas e 7.198 novos casos da doença. Confira os números atualizados …",
            url: "https://olhardigital.com.br/2022/08/07/coronavirus/brasil-registra-menos-de-60-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/04/shutterstock_1816189349.jpg",
            publishedAt: "2022-08-07T21:06:56Z",
            content: "Conforme os nÃºmeros atualizados neste domingo (7) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 57 mortes por Covid-19 nas Ãºltimas 24 h… [+1729 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 220 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quinta-feira (11) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 220 mortes por Covid-19 nas últimas 24 horas e mais de 27 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/11/coronavirus/brasil-registra-220-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-brasil.jpg",
            publishedAt: "2022-08-11T21:03:25Z",
            content: "Conforme os nÃºmeros atualizados nesta quinta-feira (11) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 220 mortes por Covid-19 nas Ãºltim… [+1715 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 261 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quinta-feira (4) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 261 mortes por Covid-19 nas últimas 24 horas e mais de 40 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/04/coronavirus/brasil-registra-261-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/08/Brasil-Covid.jpg",
            publishedAt: "2022-08-04T21:07:19Z",
            content: "Conforme os nÃºmeros atualizados nesta quinta-feira (4) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 261 mortes por Covid-19 nas Ãºltima… [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 295 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta terça-feira (2) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 295 mortes por Covid-19 nas últimas 24 horas e mais de 30 mil novos casos da doença. Confira os número…",
            url: "https://olhardigital.com.br/2022/08/02/coronavirus/brasil-registra-295-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2020/12/shutterstock_1690695112Kaan-Baytur-kcube.jpg",
            publishedAt: "2022-08-02T21:03:45Z",
            content: "Conforme os nÃºmeros atualizados nesta terÃ§a-feira (2) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 295 mortes por Covid-19 nas Ãºltima… [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 247 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta sexta-feira (12) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 247 mortes por Covid-19 nas últimas 24 horas e mais de 23 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/12/coronavirus/brasil-registra-247-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-no-brasil.jpg",
            publishedAt: "2022-08-12T21:10:40Z",
            content: "Conforme os nÃºmeros atualizados nesta sexta-feira (12) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 247 mortes por Covid-19 nas Ãºltima… [+1720 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Ana Luiza Figueiredo",
            title: "Brasil registra 144 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados neste sábado (13) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 144 mortes por Covid-19 nas últimas 24 horas e mais de 16 mil novos casos da doença. Confira os números at…",
            url: "https://olhardigital.com.br/2022/08/13/coronavirus/brasil-registra-144-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_1899165241.jpg",
            publishedAt: "2022-08-13T21:02:57Z",
            content: "Conforme os nÃºmeros atualizados neste sÃ¡bado (13) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 144 mortes por Covid-19 nas Ãºltimas 24… [+1707 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 206 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quinta-feira (18) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 206 mortes por Covid-19 nas últimas 24 horas e mais de 20 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/18/coronavirus/brasil-registra-206-mortes-por-covid-19-nas-ultimas-24-horas-2/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/08/Brasil-Covid.jpg",
            publishedAt: "2022-08-18T21:07:07Z",
            content: "Conforme os nÃºmeros atualizados nesta quinta-feira (18) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 206 mortes por Covid-19 nas Ãºltim… [+1723 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 157 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta quinta-feira (25) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 157 mortes por Covid-19 nas últimas 24 horas e mais de 20 mil novos casos da doença. Confira os núme…",
            url: "https://olhardigital.com.br/2022/08/25/coronavirus/brasil-registra-157-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/11/Covid-19-Brasil.jpg",
            publishedAt: "2022-08-25T21:06:26Z",
            content: "Conforme os nÃºmeros atualizados nesta quinta-feira (25) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 157 mortes por Covid-19 nas Ãºltim… [+1730 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra 164 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados nesta sexta-feira (26) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 164 mortes por Covid-19 nas últimas 24 horas e mais de 18 mil novos casos da doença. Confira os númer…",
            url: "https://olhardigital.com.br/2022/08/26/coronavirus/brasil-registra-164-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/brasil-covid.jpg",
            publishedAt: "2022-08-26T21:08:53Z",
            content: "Conforme os nÃºmeros atualizados nesta sexta-feira (26) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 164 mortes por Covid-19 nas Ãºltima… [+1730 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Daniel Junqueira",
            title: "Brasil registra 22 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados neste domingo (28) pelo Conselho Nacional de Secretários de Saúde (Conass) e pelo Ministério da Saúde, o Brasil registrou 22 mortes por Covid-19 nas últimas 24 horas e mais de 3 mil novos casos da doença. Confira os números atu…",
            url: "https://olhardigital.com.br/2022/08/28/coronavirus/brasil-registra-22-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/covid-brasil.jpg",
            publishedAt: "2022-08-28T21:01:01Z",
            content: "Conforme os nÃºmeros atualizados neste domingo (28) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e pelo MinistÃ©rio da SaÃºde, o Brasil registrou 22 mortes por Covid-19 nas Ãºltimas 24 h… [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Matheus Barros",
            title: "Site com domínio em nome de Bolsonaro classifica presidente como “ameaça ao Brasil”",
            description: "Um site com domínio “bolsonaro.com.br“, fazendo alusão ao sobrenome do atual presidente do Brasil e candidato à reeleição, Jair Bolsonaro (PL), faz duras críticas ao político, classificando-o como “ameaça ao Brasil”. O portal possui diversos conteúdos relacio…",
            url: "https://olhardigital.com.br/2022/08/31/internet-e-redes-sociais/site-com-dominio-em-nome-de-bolsonaro-classifica-presidente-como-ameaca-ao-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/bolsonaro.com_.jpg",
            publishedAt: "2022-08-31T14:58:23Z",
            content: "Um site com domÃ­nio “bolsonaro.com.br“, fazendo alusÃ£o ao sobrenome do atual presidente do Brasil e candidato Ã  reeleiÃ§Ã£o, Jair Bolsonaro (PL), faz duras crÃ­ticas ao polÃ­tico, classificando-o … [+1100 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Equipe TecMundo",
            title: "Eleições 2022: conheça os 12 candidatos à Presidência do Brasil",
            description: "O primeiro turno das Eleições 2022 será realizado em 2 de outubro e o país já se prepara para ir às urnas mais uma vez. Com um eventual segundo turno marcado para 30 de outubro, a votação deste ano será para governador, deputado estadual (ou distrital), senad…",
            url: "https://www.tecmundo.com.br/mercado/244518-eleicoes-2022-conheca-12-candidatos-presidencia-brasil.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/25/25164303218236.jpg",
            publishedAt: "2022-08-27T18:00:00Z",
            content: "O primeiro turno das Eleições 2022 será realizado em 2 de outubro e o país já se prepara para ir às urnas mais uma vez. Com um eventual segundo turno marcado para 30 de outubro, a votação deste ano s… [+6388 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Felipe Vidal",
            title: "Starlink reduz preço mensal pela metade no Brasil",
            description: "O serviço de internet via satélite de Elon Musk, a Starlink, finalmente teve um corte de preço em diversos países, incluindo o Brasil. O corte na mensalidade pode chegar até 50% para se adequar a realidade dos mercados locais.Quem já era usuário do serviço da…",
            url: "https://www.tecmundo.com.br/internet/244500-starlink-reduz-preco-mensal-metade-brasil.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/25/25102122921042.jpg",
            publishedAt: "2022-08-25T16:30:00Z",
            content: "O serviço de internet via satélite de Elon Musk, a Starlink, finalmente teve um corte de preço em diversos países, incluindo o Brasil. O corte na mensalidade pode chegar até 50% para se adequar a rea… [+1794 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Bruno Ignacio",
            title: "Brasil é o segundo país mais atacado por cibercriminosos na América Latina",
            description: "No primeiro semestre de 2022, o Brasil foi o segundo país com mais tentativas de ataques cibernéticos na América Latina, com 31,5 bilhões de registros\nBrasil é o segundo país mais atacado por cibercriminosos na América Latina",
            url: "https://tecnoblog.net/noticias/2022/08/19/brasil-e-o-segundo-pais-mais-atacado-por-cibercriminosos-na-america-latina/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2022/01/hacker-codigo-tela-escuro-computador-desktop-monitor.jpg",
            publishedAt: "2022-08-19T20:33:59Z",
            content: "A Fortinet, empresa de segurança cibernética, revelou na quinta-feira (18) que o Brasil é o segundo país que mais sofre ataques cibernéticos na América Latina. Por meio de seu laboratório de inteligê… [+3420 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Emerson Alecrim",
            title: "AliExpress expande frete grátis no Brasil e lança tarifa simples para vendedores",
            description: "Tarifa Simples Especial permite que vendedores do AliExpress tenham valor único de frete para diferentes regiões do Brasil\nAliExpress expande frete grátis no Brasil e lança tarifa simples para vendedores",
            url: "https://tecnoblog.net/noticias/2022/08/16/aliexpress-expande-frete-gratis-no-brasil-e-lanca-tarifa-simples-para-vendedores/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2019/09/aliexpress-icon.jpg",
            publishedAt: "2022-08-16T16:24:34Z",
            content: "O AliExpress é uma plataforma chinesa, mas tem vendedores no Brasil. Para eles, a companhia anunciou, nesta terça-feira (16), a função Tarifa Simples Especial, que permite a venda de produtos com o m… [+2268 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Bruno Ignacio",
            title: "Amazfit GTS 4 Mini e Band 7 chegam ao Brasil com oxímetro e tela AMOLED",
            description: "Novos GTS 4 Mini e Band 7 da Amazfit chegam ao Brasil com preços de lançamento de R$ 619 e R$ 309, respectivamente\nAmazfit GTS 4 Mini e Band 7 chegam ao Brasil com oxímetro e tela AMOLED",
            url: "https://tecnoblog.net/noticias/2022/08/16/amazfit-gts-4-mini-e-band-7-chegam-ao-brasil-com-oximetro-e-tela-amoled/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2022/07/amazfit-gts-4-mini-1.jpg",
            publishedAt: "2022-08-16T20:30:11Z",
            content: "A Amazfit, da chinesa Huami, trouxe oficialmente dois novos wearables ao Brasil nesta semana. O primeiro produto que chega agora ao mercado brasileiro é o Amazfit GTS 4 Mini, um smartwatch ultrafino … [+3220 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Emerson Alecrim",
            title: "Fibra óptica já representa dois terços da banda larga fixa no Brasil",
            description: "Anatel aponta que Brasil tem 28 milhões de conexões via fibra óptica; número corresponde a 66% da banda larga fixa do país\nFibra óptica já representa dois terços da banda larga fixa no Brasil",
            url: "https://tecnoblog.net/noticias/2022/08/01/fibra-optica-ja-representa-dois-tercos-da-banda-larga-fixa-no-brasil/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2022/04/fibra-optica-capa-tecnoblog.png",
            publishedAt: "2022-08-01T15:28:53Z",
            content: "Para quem, como eu, é da época da conexão discada, o momento atual não poderia ser mais interessante. Um painel divulgado pela Agência Nacional de Telecomunicações (Anatel) mostra que, no Brasil, doi… [+3515 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Emerson Alecrim",
            title: "Dell lança XPS 13 Plus, Alienware M15 e outros maquinões no Brasil",
            description: "Além dos notáveis XPS 13 Plus e Alienware M15 R7, os novos Inspiron 13 e Dell G15 acabam de ser anunciados no Brasil\nDell lança XPS 13 Plus, Alienware M15 e outros maquinões no Brasil",
            url: "https://tecnoblog.net/noticias/2022/08/03/dell-lanca-xps-13-plus-alienware-m15-e-outros-maquinoes-no-brasil/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2022/08/alienware-m15-r7-1.jpg",
            publishedAt: "2022-08-03T14:44:07Z",
            content: "Realizada no começo do ano, a CES 2022 serviu de palco para o anúncio do elegante Dell XPS 13 Plus. Demorou um pouco, mas o notebook finalmente foi lançado no Brasil. E ele não vem sozinho. A Dell ta… [+5394 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Emerson Alecrim",
            title: "Banco do Brasil lança seguro contra roubo de celular, notebook e mais itens",
            description: "Novo seguro do Banco do Brasil ressarce cliente em caso de roubo de celular, tablet, notebook, bolsa, mochila e outros itens pessoais\nBanco do Brasil lança seguro contra roubo de celular, notebook e mais itens",
            url: "https://tecnoblog.net/noticias/2022/08/16/banco-do-brasil-lanca-seguro-contra-roubo-de-celular-notebook-e-mais-itens/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2022/05/samsung-galaxy-a33-5g-7.jpg",
            publishedAt: "2022-08-16T18:51:10Z",
            content: "Nesta semana, o Banco do Brasil anunciou uma modalidade de seguro para itens pessoais. A proteção prevê ressarcimento em caso de roubo de itens como mochilas, bolsas, óculos e tênis. Mas a parte mais… [+2335 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Bruno Ignacio",
            title: "Acer anuncia smartphones acessíveis com Snapdragon e 5G para o Brasil",
            description: "Nova linha de smartphones da Acer deve chegar ao Brasil entre o Natal de 2022 e o início de 2023, com produção e distribuição nacionais\nAcer anuncia smartphones acessíveis com Snapdragon e 5G para o Brasil",
            url: "https://tecnoblog.net/noticias/2022/08/17/acer-anuncia-smartphones-acessiveis-com-snapdragon-e-5g-para-o-brasil/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2021/06/Acer-Chromebook-C733-4.jpg",
            publishedAt: "2022-08-17T23:11:07Z",
            content: "A Acer, conhecida princialmente por fabricar notebooks, vai lançar sua própria linha de smartphones 5G e com processadores Snapdragon da Qualcomm no Brasil. Os celulares serão distribuídos pela Rcell… [+2122 chars]"
        },
        {
            source: {
                id: null,
                name: "Publico.pt"
            },
            author: "publico@publico.pt",
            title: "Escravos, Brasil, Portugal: trocando em miúdos",
            description: "Dos séculos XVI a XIX, 37% das viagens dos navios negreiros iniciaram-se no Brasil, 31% na Grã-Bretanha e apenas 3,8% no território europeu de Portugal. Num cômputo geral foram o Rio de Janeiro, Salvador da Bahia, Liverpool e outras cidades — não Lisboa — que…",
            url: "https://www.publico.pt/2022/08/11/opiniao/opiniao/escravos-brasil-portugal-trocando-miudos-2016857",
            urlToImage: "https://imagens.publico.pt/imagens.aspx/1122917?tp=UH&db=IMAGENS&type=PNG&share=1&o=BarraFacebook_Publico.png",
            publishedAt: "2022-08-11T12:55:16Z",
            content: "O historiador brasileiro Luiz Felipe de Alencastro escreveu, no PÚBLICO, um artigo sobre o papel do tráfico de escravos africanos na formação do Brasil. O artigo lê-se com proveito, é informativo e e… [+147 chars]"
        },
        {
            source: {
                id: null,
                name: "Publico.pt"
            },
            author: "publico@publico.pt",
            title: "Brasil, um país de futuro incerto",
            description: "O discurso bolsonarista tem vindo a ser repetido, à laia de ameaça, desde as alegações de que pode ser vítima de uma fraude à possibilidade de incentivar actos de violência, a fazer lembrar o 6 de Janeiro em Washington.",
            url: "https://www.publico.pt/2022/08/01/mundo/editorial/brasil-pais-futuro-incerto-2015806",
            urlToImage: "https://imagens.publico.pt/imagens.aspx/1623788?tp=UH&db=IMAGENS&type=PNG&share=1&o=BarraFacebook_Publico.png",
            publishedAt: "2022-08-01T20:05:00Z",
            content: "Seria vergonhoso para o Brasil que este não resistisse à tentação de mergulhar em ajustes de contas mortais entre simpatizantes fanáticos dos dois principais candidatos às presidenciais brasileiras d… [+279 chars]"
        },
        {
            source: {
                id: null,
                name: "Publico.pt"
            },
            author: "publico@publico.pt",
            title: "A transferência da Corte para o Brasil",
            description: "A frota régia zarpou do Tejo no dia 29 de Novembro de 1807, abrindo caminho a três dezenas de navios mercantes. Era muita a gente que queria seguir o príncipe ou fugir das tropas francesas que se encontravam já às portas de Lisboa.",
            url: "https://www.publico.pt/2022/08/02/culturaipsilon/noticia/transferencia-corte-brasil-2014342",
            urlToImage: "https://imagens.publico.pt/imagens.aspx/1719246?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Ipsilon.png",
            publishedAt: "2022-08-02T06:21:00Z",
            content: "Marchava já bem dentro do território português o exército comandado pelo General Junot quando o príncipe regente D. João, ouvido o Conselho de Estado e vencidos os seus escrúpulos, dava finalmente a … [+295 chars]"
        },
        {
            source: {
                id: null,
                name: "Jovemnerd.com.br"
            },
            author: "Pedro Siqueira",
            title: "Atriz de Uma Advogada Extraordinária, Park Eun-bin manda recado fofinho pro Brasil",
            description: "K-drama conquistou o Brasil e já é até a série mais vista no catálogo da Netflix\nThe post Atriz de Uma Advogada Extraordinária, Park Eun-bin manda recado fofinho pro Brasil appeared first on Jovem Nerd.",
            url: "https://jovemnerd.com.br/nerdbunker/uma-advogada-extraordinaria-recado-brasil/",
            urlToImage: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/uma_advogada_extraordinaria_recado_brasil__kw3m024.jpg",
            publishedAt: "2022-08-19T21:37:40Z",
            content: "Estrela do k-drama Uma Advogada Extraordinária, a atriz Paek Eun-bin mandou o recado mais fofo que você verá hoje para o Brasil. A trama chegou de mansinho no catálogo da Netflix, e já parece ter con… [+808 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Saori Antonioli Almeida",
            title: "Aneel reajusta preço da energia elétrica no Brasil; veja mudanças",
            description: "A Agência Nacional de Energia Elétrica (Aneel) aprovou uma série de reajustes nas tarifas de energia elétrica pelo Brasil.  As adequações chegam a 32% e valem em pelo menos nove distribuidoras em sete estados.Nem todos sentirão as mudanças de forma similar- i…",
            url: "https://www.tecmundo.com.br/mercado/244347-aneel-reajusta-preco-energia-eletrica-brasil-veja-mudancas.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/24/24155458145449.jpg",
            publishedAt: "2022-08-24T17:30:00Z",
            content: "A Agência Nacional de Energia Elétrica (Aneel) aprovou uma série de reajustes nas tarifas de energia elétrica pelo Brasil.  As adequações chegam a 32% e valem em pelo menos nove distribuidoras em set… [+1538 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Mateus Mognon",
            title: "WhatsApp só lançará Comunidades no Brasil em 2023",
            description: "O WhatsApp confirmou que a função de Comunidades, que permitirá agregar vários grupos em uma corrente de mensagens, será lançada no Brasil apenas em 2023. A Meta, responsável pelo aplicativo de mensagens, comunicou o Ministério Público Federal (MPF) em São Pa…",
            url: "https://www.tecmundo.com.br/software/245572-whatsapp-so-lancara-comunidades-brasil-2023.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/26/26115702189159.jpg",
            publishedAt: "2022-08-26T12:30:00Z",
            content: "O WhatsApp confirmou que a função de Comunidades, que permitirá agregar vários grupos em uma corrente de mensagens, será lançada no Brasil apenas em 2023. A Meta, responsável pelo aplicativo de mensa… [+1283 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "André Luiz Dias Gonçalves",
            title: "Brasil registra segunda morte causada pela varíola de macacos",
            description: "A Secretaria de Saúde do Rio de Janeiro (SES-RJ) confirmou, na segunda-feira (29), a primeira morte por varíola dos macacos no território fluminense. O óbito, ocorrido na cidade de Campos dos Goytacazes, é o segundo causado pela doença no Brasil.Conforme as a…",
            url: "https://www.tecmundo.com.br/ciencia/245927-brasil-registra-segunda-morte-causada-variola-macacos.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/09/01/01140020967196.jpg",
            publishedAt: "2022-09-01T14:10:16Z",
            content: "A Secretaria de Saúde do Rio de Janeiro (SES-RJ) confirmou, na segunda-feira (29), a primeira morte por varíola dos macacos no território fluminense. O óbito, ocorrido na cidade de Campos dos Goytaca… [+1197 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Carlos Palmeira",
            title: "Xbox Brasil anuncia que não terá estande na BGS 2022",
            description: "A Xbox Brasil anunciou nesta sexta-feira (19) que não terá estande na Brasil Game Show (BGS) 2022. De acordo com a empresa, a decisão foi tomada após “cuidadosa avaliação”.Em uma publicação nas redes sociais, a marca salientou que apesar de estar fora oficial…",
            url: "https://www.tecmundo.com.br/voxel/243842-xbox-anuncia-nao-tera-estande-bgs-2022.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/19/19155144879263.jpg",
            publishedAt: "2022-08-19T15:52:17Z",
            content: "A Xbox Brasil anunciou nesta sexta-feira (19) que não terá estande na Brasil Game Show (BGS) 2022. De acordo com a empresa, a decisão foi tomada após cuidadosa avaliação.\r\nEm uma publicação nas redes… [+928 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Everton Lopes Batista",
            title: "Covid-19: como o lockdown prejudicou o Brasil?",
            description: "Algumas falas do presidente Jair Bolsonaro (PL) com relação à pandemia de covid-19, feitas durante a entrevista concedida ao Jornal Nacional (TV Globo) na noite da segunda-feira (22), causaram forte reação da sociedade pela imprecisão ou conteúdo mentiroso. \"…",
            url: "https://www.tecmundo.com.br/ciencia/244066-covid-19-lockdown-prejudicou-o-brasil.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/23/23113544260169.jpg",
            publishedAt: "2022-08-23T12:09:44Z",
            content: "Algumas falas do presidente Jair Bolsonaro (PL) com relação à pandemia de covid-19, feitas durante a entrevista concedida ao Jornal Nacional (TV Globo) na noite da segunda-feira (22), causaram forte … [+4755 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Daniel Trefilio Pereira de Carvalho",
            title: "Samsung vai sortear 6 celulares no Brasil; veja como participar",
            description: "A Samsung anunciou, na última quinta-feira (25), um concurso que irá sortear seis smartphones Samsung Galaxy. Para participar, o usuário precisa ser inscrito na comunidade Samsung Members, que possui um app pré-instalado nos aparelhos da marca. Os modelos sor…",
            url: "https://www.tecmundo.com.br/dispositivos-moveis/245639-samsung-sortear-6-celulares-brasil-veja-participar.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/29/29083214856095.jpg",
            publishedAt: "2022-08-29T08:22:31Z",
            content: "A Samsung anunciou, na última quinta-feira (25), um concurso que irá sortear seis smartphones Samsung Galaxy. Para participar, o usuário precisa ser inscrito na comunidade Samsung Members, que possui… [+1475 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Saori Antonioli Almeida",
            title: "Xbox lança códigos digitais para acessar jogos no Brasil",
            description: "O Xbox está lançando uma nova forma de acessar jogos no Brasil: os códigos digitais. A partir de 23 de agosto, mais de 30 games first-party serão vendidos nesse formato através da Hype Games e PicPay, primeiros parceiros a implementar a novidade.Mais 30 outro…",
            url: "https://www.tecmundo.com.br/voxel/245710-xbox-lanca-codigos-digitais-acessar-jogos-brasil.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/23/23172520895417.jpg",
            publishedAt: "2022-08-30T10:30:01Z",
            content: "O Xbox está lançando uma nova forma de acessar jogos no Brasil: os códigos digitais. A partir de 23 de agosto, mais de 30 games first-party serão vendidos nesse formato através da Hype Games e PicPay… [+1221 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Luann Motta Carvalho",
            title: "Xbox lança uma nova forma de acessar jogos no Brasil",
            description: "Nesta terça-feira (23), o Xbox iniciou a venda de mais de 30 títulos de jogos first-party na forma de códigos digitais. As empresas Hype Games e PicPay serão os primeiros parceiros do console a realizar a prática. A partir do dia 1° de setembro, o suporte com…",
            url: "https://olhardigital.com.br/2022/08/23/games-e-consoles/xbox-lanca-uma-nova-forma-de-acessar-jogos-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/5bc0beca-369a-495d-9212-1dca8fb43a62.jpg",
            publishedAt: "2022-08-23T18:52:12Z",
            content: "Nesta terÃ§a-feira (23), o Xbox iniciou a venda de mais de 30 tÃ­tulos de jogos first-party na forma de cÃ³digos digitais. As empresas Hype Games e PicPay serÃ£o os primeiros parceiros do console a r… [+2301 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Alanis Meira",
            title: "Fibra óptica domina banda larga fixa no Brasil",
            description: "A Anatel publicou um painel que revela porcentagens das ligações de banda larga fixa que consistem em fibra óptica\nO post Fibra óptica domina banda larga fixa no Brasil apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/01/internet-e-redes-sociais/fibra-optica-domina-banda-larga-fixa-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/01/fibra_optica_shutterstock_1712942488.jpg",
            publishedAt: "2022-08-01T18:06:42Z",
            content: "A AgÃªncia Nacional de TelecomunicaÃ§Ãµes (Anatel) publicou um painel no qual revela que, no Brasil, 66% das ligaÃ§Ãµes de banda larga fixa consistem em fibra Ã³ptica. Isso representa aproximadamente… [+1899 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Rodrigo Mozelli",
            title: "Bioimpressora 4D que recria tecidos chega ao Brasil",
            description: "Acaba de chegar ao Brasil a bioimpressora 4D Dr. Invivo, da Rokit, tecnologia que permitirá a impressão e consequente regeneração de órgãos, como rim, fígado e enxertos cardíacos, o que diminuirá a necessidade de doação de órgãos e o índice de rejeição e infe…",
            url: "https://olhardigital.com.br/2022/08/24/medicina-e-saude/bioimpressora-4d-que-recria-tecidos-chega-ao-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Bioimpressora-4D.jpg",
            publishedAt: "2022-08-25T01:03:00Z",
            content: "Acaba de chegar ao Brasil a bioimpressora 4D Dr. Invivo, da Rokit, tecnologia que permitirÃ¡ a impressÃ£o e consequente regeneraÃ§Ã£o de Ã³rgÃ£os, como rim, fÃ­gado e enxertos cardÃ­acos, o que dimin… [+2753 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra segunda morte por varíola dos macacos",
            description: "Autoridades do Rio de Janeiro informaram que o estado registrou, na segunda-feira (29), sua primeira morte relacionada com a varíola dos macacos. Segundo a Secretaria municipal de Saúde de Campos, a vítima apresentava baixa imunidade e comorbidades, que agrav…",
            url: "https://olhardigital.com.br/2022/08/30/medicina-e-saude/brasil-registra-segunda-morte-por-variola-dos-macacos/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/variola-dos-macacos.jpg",
            publishedAt: "2022-08-30T12:57:30Z",
            content: "Autoridades do Rio de Janeiro informaram que o estado registrou, na segunda-feira (29), sua primeira morte relacionada com a varÃ­ola dos macacos. Segundo a Secretaria municipal de SaÃºde de Campos, … [+1752 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Varíola dos macacos: Brasil receberá medicamento para combate à doença",
            description: "O ministro da Saúde, Marcelo Queiroga, informou nesta segunda-feira (1) que o Brasil irá receber o antiviral tecovirimat para “reforçar o enfrentamento ao surto” de varíola dos macacos no país. O anúncio foi feito através de sua conta oficial do Twitter, onde…",
            url: "https://olhardigital.com.br/2022/08/01/medicina-e-saude/variola-dos-macacos-brasil-recebera-medicamento-para-combate-a-doenca/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/04/marcelo-queiroga.jpg",
            publishedAt: "2022-08-01T14:04:13Z",
            content: "O ministro da SaÃºde, Marcelo Queiroga, informou nesta segunda-feira (1) que o Brasil irÃ¡ receber o antiviral tecovirimat para âreforÃ§ar o enfrentamento ao surtoâ de varÃ­ola dos macacos no paÃ… [+1882 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Ana Luiza Figueiredo",
            title: "Usuários relatam surgimento do Twitter Blue no Brasil",
            description: "Nos últimos dias, usuários do Twitter começaram a relatar o recebimento de notificações em suas contas na rede social relacionadas ao Twitter Blue. O Twitter Blue é um serviço pago do Twitter, que oferece ferramentas premium para os usuários que optarem por f…",
            url: "https://olhardigital.com.br/2022/08/09/internet-e-redes-sociais/usuarios-relatam-surgimento-do-twitter-blue-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_1891723477.jpg",
            publishedAt: "2022-08-09T18:20:02Z",
            content: "Nos Ãºltimos dias, usuÃ¡rios do Twitter comeÃ§aram a relatar o recebimento de notificaÃ§Ãµes em suas contas na rede social relacionadas ao Twitter Blue.\r\nO Twitter Blue Ã© um serviÃ§o pago do Twitter… [+2468 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Dia dos Pais: qual a origem da data no Brasil?",
            description: "Neste domingo (14) é comemorado o Dia dos Pais, data que serve para reunir pais e filhos e que é caractecterizado pelo tradicional churrasco em família, mas com o adicional da troca de presentes. Mas, afinal, de onde surgiu a ideia de ter um dia dedicado aos …",
            url: "https://olhardigital.com.br/2022/08/14/tira-duvidas/dia-dos-pais-qual-a-origem-da-data-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Dia-dos-pais-2.jpg",
            publishedAt: "2022-08-14T14:03:16Z",
            content: "Neste domingo (14) Ã© comemorado o Dia dos Pais, data que serve para reunir pais e filhos e que Ã© caractecterizado pelo tradicional churrasco em famÃ­lia, mas com o adicional da troca de presentes. … [+3316 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "William Schendes",
            title: "Instituto Campus Party anuncia novos laboratórios de ensino tecnológico no Brasil",
            description: "O Instituto Campus Party (ICP) fechou parceria com a Embaixada do Reino Unido no Brasil para instalar quatro novos laboratórios de tecnologia Include, três no Paraná e um no Alagoas. A iniciativa tem o objetivo de realizar a inclusão tecnológica de jovens de …",
            url: "https://olhardigital.com.br/2022/08/25/pro/instituto-campus-party-laboratorios-ensino-tecnolog/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_2036186297.jpg",
            publishedAt: "2022-08-26T02:02:00Z",
            content: "O Instituto Campus Party (ICP) fechou parceria com a Embaixada do Reino Unido no Brasil para instalar quatro novos laboratÃ³rios de tecnologia Include: trÃªs no ParanÃ¡ e um em Alagoas. A iniciativa … [+1552 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Fogaça",
            title: "Acer Chromebook 511 chega ao Brasil com Snapdragon 7c, 20 horas de bateria e mais",
            description: "O Chromebook 511 é um modelo simples, o primeiro com Snapdragon 7c no Brasil e promete até 20 horas de uso longe da tomada\nO post Acer Chromebook 511 chega ao Brasil com Snapdragon 7c, 20 horas de bateria e mais apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/18/reviews/chromebook-511-chega-ao-brasil-com-snapdragon-7c-20-horas-de-bateria-e-mais/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Chromebook-511-C741L-Bk-05.jpg",
            publishedAt: "2022-08-18T15:55:11Z",
            content: "A Acer anunciou nesta semana o lanÃ§amento do Chromebook 511 no Brasil. O portÃ¡til chega ao paÃ­s com certificaÃ§Ã£o militar para resistir aos perigos da vida, junto de chip Snapdragon 7c, conexÃ£o … [+2191 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Fogaça",
            title: "Brasil registra 40 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados pelo Conass e pelo Ministério da Saúde, o Brasil registrou 144 mortes por Covid-19 nas últimas 24 horas\nO post Brasil registra 40 mortes por Covid-19 nas últimas 24 horas apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/14/coronavirus/brasil-registra-40-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_1899165241.jpg",
            publishedAt: "2022-08-14T21:06:18Z",
            content: "Conforme os nÃºmeros atualizados neste domingo (14) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 40 mortes por Covid-19 nas Ãºltimas 24 … [+1712 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Fogaça",
            title: "Galaxy Z Fold 4 e Flip 4 chegam ao Brasil com promessa de boas fotos noturnas",
            description: "Os novos Galaxy Z Flip 4 e Galaxy Z Fold 4 chegam ao Brasil com dobradiças mais discretas e promessa de boas fotos noturnas\nO post Galaxy Z Fold 4 e Flip 4 chegam ao Brasil com promessa de boas fotos noturnas apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/23/reviews/galaxy-z-fold-4-e-flip-4-chegam-ao-brasil-com-promessa-de-boas-fotos-noturnas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/galaxy-z-fold-4-e-z-flip-4.jpg",
            publishedAt: "2022-08-23T15:12:11Z",
            content: "Pouco mais de 10 dias depois do lanÃ§amento internacional do Galaxy Z Flip 4 e do Galaxy Z Fold 4, a Samsung mostra seus novos smartphones dobrÃ¡veis para o pÃºblico brasileiro. Desta vez em um event… [+5432 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Fogaça",
            title: "5G puro deve chegar ao iPhone 12, 13 e SE (3ª geração) do Brasil em setembro",
            description: "O 5G puro ainda não é compatível com os iPhones no Brasil, mas Fábio Faria promete para setembro uma atualização que liberar o acesso\nO post 5G puro deve chegar ao iPhone 12, 13 e SE (3ª geração) do Brasil em setembro apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/08/05/reviews/iphone-12-13-e-se-3a-geracao-devem-ter-5g-puro-do-brasil-em-setembro/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/11/iphone-13-pro-max-cameras-1-e1637785069820.png",
            publishedAt: "2022-08-05T17:51:17Z",
            content: "Todos os modelos de iPhone 12 e 13 e SE (3Âª geraÃ§Ã£o) poderÃ£o funcionar com o 5G puro, lanÃ§ado nesta semana em algumas cidades brasileiras, a partir de setembro deste ano. A promessa vem do minis… [+2125 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Redação",
            title: "Brasil registra 28 mortes por Covid-19 nas últimas 24 horas",
            description: "Conforme os números atualizados pelo Conass e pelo Ministério da Saúde, o Brasil registrou 28 mortes por Covid-19 nas últimas 24 horas\nO post Brasil registra 28 mortes por Covid-19 nas últimas 24 horas apareceu primeiro em Olhar Digital.",
            url: "https://olhardigital.com.br/2022/07/31/coronavirus/brasil-registra-28-mortes-por-covid-19-nas-ultimas-24-horas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/02/Covid-19.png",
            publishedAt: "2022-07-31T21:02:36Z",
            content: "Conforme os nÃºmeros atualizados neste domingo (31) pelo Conselho Nacional de SecretÃ¡rios de SaÃºde (Conass) e peloÂ MinistÃ©rio da SaÃºde, o Brasil registrou 28 mortes por Covid-19 nas Ãºltimas 24 … [+1715 chars]"
        },
        {
            source: {
                id: null,
                name: "Jovemnerd.com.br"
            },
            author: "Pedro Siqueira",
            title: "Com cosplay de Round 6, grupo coreano de pagode vem ao Brasil e toca com Péricles",
            description: "Mistura inusitada do Brasil com a Coreia ocorreu no último fim de semana, e tem até foto\nThe post Com cosplay de Round 6, grupo coreano de pagode vem ao Brasil e toca com Péricles appeared first on Jovem Nerd.",
            url: "https://jovemnerd.com.br/nerdbunker/grupo-pagode-coreano-toca-com-pericles/",
            urlToImage: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/pericles_pagode_coreano_round_6__2yj716.jpg",
            publishedAt: "2022-08-16T18:28:00Z",
            content: "div-ad-mid-single-62fbe7efce3b1\r\nVocê já leu o título da matéria, já viu a foto, mas ainda assim é tanta informação em uma só história que até a gente teve dificuldade de processar. O grupo coreano d… [+903 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecmundo.com.br"
            },
            author: "Carlos Palmeira",
            title: "10 notícias de tecnologia para você começar o dia (24/08)",
            description: "Bom dia! Separamos as principais notícias do mundo da Ciência e Tecnologia para você saber tudo o que aconteceu na última terça-feira (23). Para conferir cada notícia na íntegra, basta clicar nos links a seguir.1. Galaxy Watch 5, 5 Pro e Buds 2 Pro são lançad…",
            url: "https://www.tecmundo.com.br/internet/244168-10-noticias-tecnologia-voce-comecar-dia-24-08.htm",
            urlToImage: "https://tm.ibxk.com.br/2022/08/23/23185417322470.jpg",
            publishedAt: "2022-08-24T06:00:00Z",
            content: "Bom dia! Separamos as principais notícias do mundo da Ciência e Tecnologia para você saber tudo o que aconteceu na última terça-feira (23). Para conferir cada notícia na íntegra, basta clicar nos lin… [+1900 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "André Leonardo",
            title: "Acer lança Chromebook 511 com Snapdragon 7c no Brasil",
            description: "Novo Chromebook com foco em conectividade, economia de energia e durabilidade contra acidentes é nova solução da marca no país\nAcer lança Chromebook 511 com Snapdragon 7c no Brasil",
            url: "https://tecnoblog.net/noticias/2022/08/17/acer-lanca-chromebook-511-com-snapdragon-7c-no-brasil/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2022/08/acer_chromebook_511a.jpg",
            publishedAt: "2022-08-18T00:19:06Z",
            content: "De olho nos setores educacional e empresarial, a Acer anunciou a chegada do Chromebook 511 ao Brasil. O equipamento com processador Snapdragon 7c, promete eficiência energética e durabilidade contra … [+1615 chars]"
        },
        {
            source: {
                id: null,
                name: "Tecnoblog.net"
            },
            author: "Ricardo Syozi",
            title: "Internet via satélite da Starlink baixa de preço no Brasil",
            description: "Em resposta a \"condições locais de mercado\", os preços da internet de Elon Musk receberam cortes de até 50% em vários países\nInternet via satélite da Starlink baixa de preço no Brasil",
            url: "https://tecnoblog.net/noticias/2022/08/25/internet-via-satelite-da-starlink-baixa-de-preco-no-brasil/",
            urlToImage: "https://files.tecnoblog.net/wp-content/uploads/2021/02/Starlink-antena.jpg",
            publishedAt: "2022-08-25T12:28:36Z",
            content: "Os clientes da Starlink receberam uma boa notícia nesta semana: o preço da mensalidade vai cair. A fim de se adequar ao mercado local, a redução pode chegar à metade do valor pago em certos casos. No… [+1905 chars]"
        },
        {
            source: {
                id: null,
                name: "Jovemnerd.com.br"
            },
            author: "Matheus Rodrigo",
            title: "Dell lança notebook Alienware M15 R7 no Brasil",
            description: "O notebook gamer chega com processador Intel Core i7 de 12ª geração e GeForce RTX 3070 Ti com 8GB DDR6. Confira a configuração e os preços!",
            url: "https://jovemnerd.com.br/nerdbunker/lancamento-dell-alienware-m15-r7-brasil/",
            urlToImage: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/dell_alienware_m15_r7_nerdbunker__o10rtweh.jpg",
            publishedAt: "2022-08-02T18:25:28Z",
            content: "div-ad-mid-single-62e96f69094b0\r\nADell anunciou nesta terça-feira (2) a chegada do notebook gamer Alienware M15 R7 nas principais lojas do varejo nacional. O item foi apresentado na CES 2022 e é lanç… [+1034 chars]"
        },
        {
            source: {
                id: null,
                name: "Publico.pt"
            },
            author: "publico@publico.pt",
            title: "Porque é que o comércio entre Portugal e o Brasil não cresce?",
            description: "Entre nações europeias de dimensões comparáveis, o Brasil importa mais da Suécia, Áustria, Suíça ou Bélgica.",
            url: "https://www.publico.pt/2022/08/30/opiniao/opiniao/comercio-portugal-brasil-nao-cresce-2018522",
            urlToImage: "https://imagens.publico.pt/imagens.aspx/1727853?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Publico.png",
            publishedAt: "2022-08-29T23:30:00Z",
            content: "Desde que assumiu funções em 2016, Marcelo Rebelo de Sousa já visitou o Brasil cinco vezes, com a sexta viagem já confirmada para setembro. Um recorde diplomático. A cada visita, defende a necessidad… [+63 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Fluminense x Corinthians: onde assistir, horário e escalações na semifinal da Copa do Brasil",
            description: "Fluminense x Corinthians se enfrentam às 19h30 (horário de Brasília) desta quarta-feira (24), no Maracanã, no Rio de Janeiro, pelo jogo de ida das semifinais da Copa do Brasil 2022. A transmissão será feita pelo SporTV na TV fechada, Premiere no pay-per-view …",
            url: "https://olhardigital.com.br/2022/08/23/internet-e-redes-sociais/fluminense-x-corinthians-onde-assistir-horario-e-escalacoes-na-semifinal-da-copa-do-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Fluminense-x-Corinthians.jpg",
            publishedAt: "2022-08-24T00:59:47Z",
            content: "Fluminense x Corinthians se enfrentam Ã s 19h30 (horÃ¡rio de BrasÃ­lia) desta quarta-feira (24), no MaracanÃ£, no Rio de Janeiro, pelo jogo de ida das semifinais da Copa do Brasil 2022. \r\nA transmiss… [+1122 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil é o terceiro país com mais casos de varíola dos macacos",
            description: "Até domingo (21), o Brasil registrava 3.788 casos confirmados de varíola dos macacos e mais 4.175 suspeitos, segundo dados do Ministério da Saúde (MS). O cenário coloca o país em terceiro lugar em número de casos, a frente do Reino Unido e da Alemanha – São P…",
            url: "https://olhardigital.com.br/2022/08/24/medicina-e-saude/brasil-e-o-terceiro-pais-com-mais-casos-de-variola-dos-macacos/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/06/variola-dos-macacos-2.jpg",
            publishedAt: "2022-08-24T19:30:50Z",
            content: "AtÃ© domingo (21), o Brasil registrava 3.788 casos confirmados de varÃ­ola dos macacos e mais 4.175 suspeitos, segundo dados do MinistÃ©rio da SaÃºde (MS). O cenÃ¡rio coloca o paÃ­s em terceiro lugar… [+3036 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Lucena",
            title: "Corinthians x Atlético-GO: onde assistir, horário e escalações das quartas da Copa do Brasil",
            description: "Corinthians x Atlético-GO se enfrentam às 21h30 (horário de Brasília) desta quarta-feira (17) na Neo Química Arena, em São Paulo, pelo jogo de volta das quartas de final da Copa do Brasil 2022. A transmissão será feita pela Globo na TV aberta, SporTV 2 na TV …",
            url: "https://olhardigital.com.br/2022/08/16/internet-e-redes-sociais/corinthians-x-atletico-go-onde-assistir-horario-e-escalacoes-das-quartas-da-copa-do-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Corinthians-x-Atletico-GO.jpg",
            publishedAt: "2022-08-17T01:31:00Z",
            content: "Corinthians x AtlÃ©tico-GO se enfrentam Ã s 21h30 (horÃ¡rio de BrasÃ­lia) desta quarta-feira (17) na Neo QuÃ­mica Arena, em SÃ£o Paulo, pelo jogo de volta das quartas de final da Copa do Brasil 2022.… [+1283 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Luann Motta Carvalho",
            title: "Por que os jogos de videogame continuam tão caros no Brasil?",
            description: "Desde 2019, quando o presidente Jair Bolsonaro (PL) tomou posse do cargo no Brasil, os impostos sobre jogos de videogame foram reduzidas quatro vezes. No entanto, a realidade dos games não é de queda dos preços, pelo menos na percepção das pessoas que estão c…",
            url: "https://olhardigital.com.br/2022/08/18/games-e-consoles/por-que-os-jogos-de-videogame-continuam-tao-caros-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/ps5-controle.jpg",
            publishedAt: "2022-08-18T14:56:47Z",
            content: "Desde 2019, quando o presidente Jair Bolsonaro (PL) tomou posse do cargo no Brasil, os impostos sobre jogos de videogame foram reduzidas quatro vezes. No entanto, a realidade dos games nÃ£o Ã© de que… [+2638 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Gabriel Sérvio",
            title: "Novo Bolt EV desembarca no brasil; confira o preço e mais detalhes sobre o carro elétrico da Chevrolet",
            description: "O novo Bolt EV, o carro elétrico mais popular da Chevrolet, desembarcou no Brasil oficialmente na última sexta-feira (26). O modelo inaugura a aposta da montadora no país para o segmento de EVs, que inclui o lançamento de mais três carros nos próximos anos. C…",
            url: "https://olhardigital.com.br/2022/08/27/carros-e-tecnologia/novo-bolt-ev-desembarca-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/07/2022-Chevrolet-BoltEV-011-menor.jpg",
            publishedAt: "2022-08-27T20:03:31Z",
            content: "O novo Bolt EV, o carro elÃ©trico mais popular da Chevrolet, desembarcou no Brasil oficialmente na Ãºltima sexta-feira (26). O modelo inaugura a aposta da montadora no paÃ­s para o segmento de EVs, q… [+1548 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Apraxia da fala: estudo inédito no Brasil irá analisar o transtorno em crianças",
            description: "Um estudo desenvolvido pela Universidade de São Paulo (USP) está mapeando a genética de 100 crianças brasileiras com apraxia de fala na infância (AFI). O intuito é identificar as alterações que levam ao transtorno, que ainda são poucos discutidos no país, e a…",
            url: "https://olhardigital.com.br/2022/08/15/medicina-e-saude/apraxia-da-fala-estudo-inedito-no-brasil-ira-analisar-o-transtorno-em-criancas/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/apraxia-de-fala-na-infancia.jpg",
            publishedAt: "2022-08-15T18:48:49Z",
            content: "Um estudo desenvolvido pela Universidade de SÃ£o Paulo (USP) estÃ¡ mapeando a genÃ©tica de 100 crianÃ§as brasileiras com apraxia de fala na infÃ¢ncia (AFI). O intuito Ã© identificar as alteraÃ§Ãµes q… [+3295 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Matheus Barros",
            title: "Saiba qual rede social faz sucesso em cada região do Brasil",
            description: "Um estudo divulgado pela CupomVálido, que reuniu dados da Hootsuite e WeAreSocial, mostrou que o Brasil é o terceiro país do mundo que mais usa redes sociais, ficando atrás apenas das Filipinas e Colômbia, respectivamente.   Estima-se que o brasileiro passa, …",
            url: "https://olhardigital.com.br/2022/08/25/internet-e-redes-sociais/saiba-qual-rede-social-faz-sucesso-em-cada-regiao-do-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/06/Redes-sociais-3.jpg",
            publishedAt: "2022-08-25T19:47:36Z",
            content: "Um estudo divulgado pela CupomVÃ¡lido, que reuniu dados da Hootsuite e WeAreSocial, mostrou que o Brasil Ã© o terceiro paÃ­s do mundo que mais usa redes sociais, ficando atrÃ¡s apenas das Filipinas e… [+1216 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Lucena",
            title: "Tudo o que você precisa saber sobre o 5G no Brasil",
            description: "Depois de Brasília, Porto Alegre, Belo Horizonte e João Pessoa, São Paulo também passou a receber o sinal do 5G. Mas ainda restam muitas dúvidas sobre a quinta geração de internet móvel. Afinal, quais são os celulares compatíveis com a tecnologia no Brasil at…",
            url: "https://olhardigital.com.br/2022/08/07/pro/tudo-o-que-voce-precisa-saber-sobre-o-5g-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_1183499047-1.jpg",
            publishedAt: "2022-08-07T19:00:22Z",
            content: "Depois de BrasÃ­lia, Porto Alegre, Belo Horizonte e JoÃ£o Pessoa, SÃ£o Paulo tambÃ©m passou a receber o sinal do 5G. Mas ainda restam muitas dÃºvidas sobre a quinta geraÃ§Ã£o de internet mÃ³vel. Afin… [+16493 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Flavia Correia",
            title: "Vem aí um observatório muito mais poderoso que o Telescópio Espacial James Webb (e o Brasil tem dedo nisso)",
            description: "Austrália, Coreia do Sul, Chile, EUA e Brasil estão juntos em um projeto ousado e que promete tirar do Telescópio Espacial James Webb (JWST) o título de observatório mais potente de todos os tempos. Estamos falando do Telescópio Gigante Magalhães (GMT), uma m…",
            url: "https://olhardigital.com.br/2022/08/15/ciencia-e-espaco/vem-ai-um-observatorio-muito-mais-poderoso-que-o-telescopio-espacial-james-webb-e-o-brasil-tem-dedo-nisso/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Telescopio-Gigante-Magalhaes-3.jpg",
            publishedAt: "2022-08-15T11:25:00Z",
            content: "AustrÃ¡lia, Coreia do Sul, Chile, EUA e Brasil estÃ£o juntos em um projeto ousado e que promete tirar do TelescÃ³pio Espacial James Webb (JWST) o tÃ­tulo de observatÃ³rio mais potente de todos os tem… [+5017 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Lucena",
            title: "Athletico-PR x Flamengo: onde assistir, horário e escalações das quartas da Copa do Brasil",
            description: "Athletico-PR x Flamengo se enfrentam às 21h30 (horário de Brasília) desta quarta-feira (17) na Arena da Baixada, em Curitiba, pelo jogo de volta das quartas de final da Copa do Brasil 2022. A transmissão será feita pela Globo na TV aberta, SporTV na TV fechad…",
            url: "https://olhardigital.com.br/2022/08/16/internet-e-redes-sociais/athletico-pr-x-flamengo-onde-assistir-horario-e-escalacoes-das-quartas-da-copa-do-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/04/Atletico-PR-x-Flamengo.jpg",
            publishedAt: "2022-08-17T02:37:00Z",
            content: "Athletico-PR x Flamengo se enfrentam Ã s 21h30 (horÃ¡rio de BrasÃ­lia) desta quarta-feira (17) na Arena da Baixada, em Curitiba, pelo jogo de volta das quartas de final da Copa do Brasil 2022. A tran… [+1406 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Covid: cresce o número de brasileiros que não usam mais máscaras",
            description: "De acordo com uma pesquisa encomendada pela Confederação Nacional da Indústria (CNI) e realizada pelo Instituto FSB, uma em cada três pessoas não usa mais máscara de proteção facial em nenhum local no Brasil. Conforme levantamento, divulgado pela Agência Bras…",
            url: "https://olhardigital.com.br/2022/08/30/coronavirus/covid-cresce-o-numero-de-brasileiros-que-nao-usam-mais-mascaras/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/07/shutterstock_1678274461.jpg",
            publishedAt: "2022-08-30T16:08:32Z",
            content: "De acordo com uma pesquisa encomendada pela ConfederaÃ§Ã£o Nacional da IndÃºstria (CNI) e realizada pelo Instituto FSB, uma em cada trÃªs pessoas nÃ£o usa mais mÃ¡scara de proteÃ§Ã£o facial em nenhum… [+2164 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "São Paulo x Flamengo: como assistir, horário e escalações na semifinal da Copa do Brasil",
            description: "São Paulo x Flamengo se enfrentam às 21h30 (horário de Brasília) desta quarta-feira (24), no Morumbi, pelo jogo de ida das semifinais da Copa do Brasil 2022. A transmissão será feita pela Globo na TV aberta, SporTV na TV fechada, Premiere no pay-per-view e Gl…",
            url: "https://olhardigital.com.br/2022/08/24/internet-e-redes-sociais/sao-paulo-x-flamengo-como-assistir-horario-e-escalacoes-na-semifinal-da-copa-do-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/Sao-Paulo-x-Flamengo.png",
            publishedAt: "2022-08-24T21:45:30Z",
            content: "SÃ£o Paulo x Flamengo se enfrentam Ã s 21h30 (horÃ¡rio de BrasÃ­lia) desta quarta-feira (24), no Morumbi, pelo jogo de ida das semifinais da Copa do Brasil 2022. \r\nA transmissÃ£o serÃ¡ feita pela Glo… [+1296 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Nick Ellis",
            title: "Notebooks gamer Alienware m15 R7 e novo Dell G15 são lançados no Brasil",
            description: "A Dell lançou hoje no Brasil dois notebooks gamer, o Alienware m15 R7 e a nova versão do Dell G15, ambos com processadores Intel Core de 12a geração. Os dois foram apresentados com os notebooks premium XPS 13 Plus e o Inspiron 13, sobre os quais falamos aqui,…",
            url: "https://olhardigital.com.br/2022/08/02/reviews/notebooks-gamer-alienware-m15-r7-e-novo-dell-g15-sao-lancados-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/alienware_m15_r17_1.jpg",
            publishedAt: "2022-08-03T00:37:58Z",
            content: "A Dell lanÃ§ou hoje no Brasil dois notebooks gamer, o Alienware m15 R7 e a nova versÃ£o do Dell G15, ambos com processadores Intel Core de 12a geraÃ§Ã£o. \r\nOs dois foram apresentados com os notebooks… [+2317 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Câncer de pulmão: 90% dos diagnósticos estão relacionados ao fumo",
            description: "De acordo com dados do Instituto Nacional do Câncer (INCA), o tabagismo excessivo é responsável por 90% dos diagnósticos de câncer de pulmão no Brasil. A doença, que ocupa o primeiro lugar em mortalidade no mundo, atinge mais de 30 mil pessoas anualmente no B…",
            url: "https://olhardigital.com.br/2022/08/01/medicina-e-saude/cancer-de-pulmao-90-dos-diagnosticos-estao-relacionados-ao-fumo/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/cancer-de-pulmao.jpg",
            publishedAt: "2022-08-01T19:32:49Z",
            content: "De acordo com dados do Instituto Nacional do CÃ¢ncer (INCA), o tabagismo excessivo Ã© responsÃ¡vel por 90% dos diagnÃ³sticos de cÃ¢ncer de pulmÃ£o no Brasil. A doenÃ§a, que ocupa o primeiro lugar em … [+3265 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Comitê de Emergência determina alerta máximo para varíola dos macacos no Brasil",
            description: "O Centro de Operações de Emergência (COE), criado pelo Ministério da Saúde para monitorar o avanço da varíola dos macacos no Brasil, classificou a doença com nível de alerta máximo no país. De acordo com informações do O Globo, o nível III é estabelecido em c…",
            url: "https://olhardigital.com.br/2022/08/10/medicina-e-saude/comite-de-emergencia-determina-alerta-maximo-para-variola-dos-macacos-no-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/05/Variola-1.jpg",
            publishedAt: "2022-08-10T16:15:39Z",
            content: "O Centro de OperaÃ§Ãµes de EmergÃªncia (COE), criado pelo MinistÃ©rio da SaÃºde para monitorar o avanÃ§o da varÃ­ola dos macacos no Brasil, classificou a doenÃ§a com nÃ­vel de alerta mÃ¡ximo no paÃ­s… [+2441 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Julio Viana",
            title: "Escassez de profissionais de tecnologia avança no Brasil e o open source é fundamental para a solução",
            description: "Sabemos o quanto profissionais de tecnologia estão em alta. Quase literalmente, o número de estudantes se formando na área não é o bastante para preencher as vagas abertas, e nem de perto suficiente para preencher as previstas para o futuro próximo. O Brasil …",
            url: "https://olhardigital.com.br/2022/08/19/colunistas/escassez-de-profissionais-de-tecnologia-avanca-no-brasil-e-o-open-source-e-fundamental-para-a-solucao/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/08/profissional-de-TI.jpg",
            publishedAt: "2022-08-19T12:01:00Z",
            content: "Sabemos o quanto profissionais de tecnologia estÃ£o em alta. Quase literalmente, o nÃºmero de estudantes se formando na Ã¡rea nÃ£o Ã© o bastante para preencher as vagas abertas, e nem de perto sufici… [+7012 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Nick Ellis",
            title: "Galaxy Tab S8 Ultra e Tab S8+ chegam ao Brasil com telas Super AMOLED e boas câmeras",
            description: "Além do Galaxy Book 2 Pro e do Galaxy Book 2 360, a Samsung lançou hoje no Brasil seus novos tablets Galaxy Tab S8 Ultra e Tab S8+, apresentados em fevereiro lá fora. Vale citar que o Tab S8 chegou antes por aqui (com a linha Galaxy S22 no mesmo mês), mas os …",
            url: "https://olhardigital.com.br/2022/08/17/alem-da-infra/galaxy-tab-s8-ultra-e-tab-s8-chegam-ao-brasil-com-telas-super-amoled-e-boas-cameras/",
            urlToImage: "https://olhardigital.com.br/wp-content/uploads/2022/08/galaxy_tab_s8_ultra.jpg",
            publishedAt: "2022-08-17T17:48:10Z",
            content: "AlÃ©m do Galaxy Book 2 Pro e do Galaxy Book 2 360, a Samsung lanÃ§ou hoje no Brasil seus novos tablets Galaxy Tab S8 Ultra e Tab S8+, apresentados em fevereiro lÃ¡ fora. Vale citar que o Tab S8 chego… [+3236 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "André Lucena",
            title: "América-MG x São Paulo: onde assistir, horário e escalações das quartas da Copa do Brasil",
            description: "América-MG x São Paulo se enfrentam às 21h (horário de Brasília) desta quinta-feira (18), na Arena Independência, em Belo Horizonte, pelo jogo de volta das quartas de final da Copa do Brasil 2022. A transmissão será feita pelo SporTV na TV fechada, Premiere n…",
            url: "https://olhardigital.com.br/2022/08/17/internet-e-redes-sociais/america-mg-x-sao-paulo-onde-assistir-horario-e-escalacoes-das-quartas-da-copa-do-brasil/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/08/America-MG-x-Sao-Paulo.jpg",
            publishedAt: "2022-08-17T21:20:48Z",
            content: "AmÃ©rica-MG x SÃ£o Paulo se enfrentam Ã s 21h (horÃ¡rio de BrasÃ­lia) desta quinta-feira (18), na Arena IndependÃªncia, em Belo Horizonte, pelo jogo de volta das quartas de final da Copa do Brasil 20… [+1589 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Dia da Gestante: diabetes afeta 18% das gestações no Brasil, alerta SBD",
            description: "Nesta segunda-feira (15), é celebrado o Dia da Gestante, data dedicada à atenção e cuidados durante a gravidez. Em referência a data, a Sociedade Brasileira de Diabetes (SBD) divulgou um alerta para a diabetes mellitus gestacional, que afeta 18% das gestações…",
            url: "https://olhardigital.com.br/2022/08/15/medicina-e-saude/dia-da-gestante-diabetes-afeta-18-das-gestacoes-no-brasil-alerta-sbd/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/Gravidez-1.jpg",
            publishedAt: "2022-08-15T12:42:34Z",
            content: "Nesta segunda-feira (15), Ã© celebrado o Dia da Gestante, data dedicada Ã  atenÃ§Ã£o e cuidados durante a gravidez. Em referÃªncia a data, a Sociedade Brasileira de Diabetes (SBD) divulgou um alerta … [+3123 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Casos de síndrome respiratória seguem em queda, diz Fiocruz",
            description: "A curva de casos de síndrome respiratória aguda grave (SRAG) segue em queda e se aproxima do nível registrado em abril de 2022, quando esteve no menor patamar desde a disseminação da Covid-19 no Brasil, no primeiro semestre de 2020. Os dados são do Boletim In…",
            url: "https://olhardigital.com.br/2022/08/24/medicina-e-saude/casos-de-sindrome-respiratoria-seguem-em-queda-diz-fiocruz/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/06/sindrome-respiratoria-aguda.jpg",
            publishedAt: "2022-08-24T20:15:26Z",
            content: "A curva de casos de sÃ­ndrome respiratÃ³riaÂ aguda grave (SRAG) segue em queda e se aproxima do nÃ­vel registrado em abril de 2022, quando esteve no menor patamar desdeÂ a disseminaÃ§Ã£o daÂ Covid-19… [+2403 chars]"
        },
        {
            source: {
                id: null,
                name: "Olhardigital.com.br"
            },
            author: "Tamires Ferreira",
            title: "Brasil registra primeiro caso de varíola dos macacos em um cachorro",
            description: "Segundo nota do Ministério da Saúde (MS), o Brasil registrou o primeiro caso de transmissão de varíola dos macacos de um humano para um cachorro. A contaminação ocorreu em um filhote de cinco meses que mora em Juiz de Fora, Minas Gerais. O animal de estimação…",
            url: "https://olhardigital.com.br/2022/08/26/medicina-e-saude/brasil-registra-primeiro-caso-de-variola-dos-macacos-em-um-cachorro/",
            urlToImage: "https://img.olhardigital.com.br/wp-content/uploads/2022/05/cachorro-exame.jpg",
            publishedAt: "2022-08-26T12:00:00Z",
            content: "Segundo nota do MinistÃ©rio da SaÃºde (MS), o Brasil registrou o primeiro caso de transmissÃ£o de varÃ­ola dos macacos de um humano para um cachorro. A contaminaÃ§Ã£o ocorreu em um filhote de cinco m… [+4488 chars]"
        }
    ]
}
