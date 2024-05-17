$(document).ready(function(){
    //Tomar los valores desde el html
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    //Tomar los valores para insertarlos después
    const modalName = document.getElementById('modalName');
    const modalSubject = document.getElementById('modalSubject');
    const modalMessage = document.getElementById('modalMessage');

    form.addEventListener('submit', function(event){
        //Evita que se envíe el formulario y se recargue la página
        event.preventDefault();
        //Asignar los valores y mandarlos al html
        modalName.textContent = nameInput.value;
        modalSubject.textContent = subjectInput.value;
        modalMessage.textContent = messageInput.value;
        //Mostrar el modal
        $('#myModal').modal('show');
    });

    //Se agregan tooltips a los íconos de la sección "Quiénes somos"
    $("#flight").hover(function(){
        $(this).tooltip({
            title: "Nos dedicamos a viajar por lugares interesantes de Chile.",
            placement: "top"
        }).tooltip('show');
    }, function(){
        $(this).tooltip('dispose');
    });
    $("#explore").hover(function(){
        $(this).tooltip({
            title: "Exploramos lugares preciosos y te los mostramos a través de fotos de alta calidad.",
            placement: "bottom"
        }).tooltip('show');
    }, function(){
        $(this).tooltip('dispose');
    });
    $("#arrive").hover(function(){
        $(this).tooltip({
            title: "Te mostramos los recorridos completos y cómo llegar a ellos.",
            placement: "top"
        }).tooltip('show');
    }, function(){
        $(this).tooltip('dispose');
    });
});