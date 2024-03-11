// Coisas que a rede vai ter
const projeto_Crud = {
    usuarios: [
        {
            userName : 'guilherme',

        }
    ],
    posts : [
        {
            id:1,
            criador_do_post : 'guilherme',
            conteudo : 'primeiro post'
        }
    ]
};


// CREATE

function criaPost(dados){
    projeto_Crud.posts.push({
        id:projeto_Crud.posts.length +1,
        criador_do_post : dados.criador_do_post,
        conteudo : dados.conteudo
    })
}
criaPost({criador_do_post:'matheus' , conteudo: 'segundoPost'});
criaPost({criador_do_post:'matheus2' , conteudo: 'tPost'});
criaPost({criador_do_post:'matheus3' , conteudo: 'qegundoPost'});
criaPost({criador_do_post:'matheus4' , conteudo: 'quiegundoPost'});
criaPost({criador_do_post:'matheus5' , conteudo: 'sexundoPost'});

//READ

function pegaPost(){
    return projeto_Crud.posts
}
pegaPost()

// UPDATE

// o find procura os posts como parametro 
function atualizaPost(id,novoConteudo){
    const post_que_vai_ser_atualizado = pegaPost().find((posts)=>{
        return posts.id === id
    })
    post_que_vai_ser_atualizado.conteudo = novoConteudo
    
}
atualizaPost(1 ,'novaAtualizaçaoDoPost')

//DELETE

function deletaPost(id){
    const listaPostAtual = pegaPost().filter((postAtual)=>{
        return postAtual.id !== id ;
    })
    console.log(listaPostAtual)
}
deletaPost(2)