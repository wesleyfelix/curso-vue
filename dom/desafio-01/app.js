new Vue({
    el: '#desafio',
    data: {
        nome: 'Wesley',
        idade: 25,
        imagem: '1.png'
    },
    methods: {
        numeroRand: function (){
            return Math.floor(Math.random() * 2);
        }
    }
})