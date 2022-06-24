const opcao = document.querySelectorAll('.container_icons');

opcao.forEach((element) => {
    
    element.addEventListener('click', () => {

        element.style.backgroundColor = '#28b3f3'
        element.children[1].children[0].style.color = '#fff'
        element.children[0].checked = true

        opcao.forEach(element2 => {

            if( !element2.children[0].checked ){

                element2.style.backgroundColor = '#fff'
                element2.children[1].children[0].style.color = '#000'

            }

        })
        
    })
});


