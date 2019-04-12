$(document).ready(function () {


    //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        pager: false
    });


    //Posts

    var posts = [{
            title: "Prueba de titulo 1",
            date: 'Publicado el Dia ' + moment().format("ddd Do") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at mauris
        tristique, vel semper nisi fermentum. Pellentesque lobortis tristique libero nec porta. Etiam
        vehicula, arcu sit amet malesuada feugiat, erat sapien hendrerit justo, pharetra tincidunt dolor
        ex vel elit. Aliquam imperdiet magna eget tristique congue. Aliquam nec leo nunc. Etiam ornare
        vehicula nunc eget condimentum. Proin rutrum, diam sed congue congue, lorem nisi tincidunt nisi,
        ut tempor lectus libero viverra velit. Donec gravida dapibus venenatis.

        Sed euismod condimentum ipsum eu rutrum. Pellentesque non imperdiet mauris. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras accumsan mi at urna
        pellentesque, sit amet dignissim lacus aliquet. Duis vulputate, risus non condimentum mollis,
        ipsum augue dapibus diam, vel luctus justo nunc eget nibh. Vestibulum sodales varius leo, quis
        mollis dui iaculis auctor. Aliquam neque erat, egestas sit amet odio ac, vehicula suscipit nisi.
        Maecenas ullamcorper, magna et consequat luctus, enim tortor convallis sapien, sit amet
        tincidunt justo enim vel urna.`
        },
        {
            title: "Prueba de titulo 2",
            date: 'Publicado el Dia ' + moment().format("ddd Do") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at mauris
        tristique, vel semper nisi fermentum. Pellentesque lobortis tristique libero nec porta. Etiam
        vehicula, arcu sit amet malesuada feugiat, erat sapien hendrerit justo, pharetra tincidunt dolor
        ex vel elit. Aliquam imperdiet magna eget tristique congue. Aliquam nec leo nunc. Etiam ornare
        vehicula nunc eget condimentum. Proin rutrum, diam sed congue congue, lorem nisi tincidunt nisi,
        ut tempor lectus libero viverra velit. Donec gravida dapibus venenatis.`
        },
        {
            title: "Prueba de titulo 3",
            date: 'Publicado el Dia ' + moment().format("ddd Do") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at mauris
        tristique, vel semper nisi fermentum. Pellentesque lobortis tristique libero nec porta. Etiam
        vehicula, arcu sit amet malesuada feugiat, erat sapien hendrerit justo, pharetra tincidunt dolor
        ex vel elit. Aliquam imperdiet magna eget tristique congue. Aliquam nec leo nunc. Etiam ornare
        vehicula nunc eget condimentum. Proin rutrum, diam sed congue congue, lorem nisi tincidunt nisi,
        ut tempor lectus libero viverra velit. Donec gravida dapibus venenatis.`
        },
        {
            title: "Prueba de titulo 4",
            date: 'Publicado el Dia ' + moment().format("ddd Do") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at mauris
        tristique, vel semper nisi fermentum. Pellentesque lobortis tristique libero nec porta. Etiam
        vehicula, arcu sit amet malesuada feugiat, erat sapien hendrerit justo, pharetra tincidunt dolor
        ex vel elit. Aliquam imperdiet magna eget tristique congue. Aliquam nec leo nunc. Etiam ornare
        vehicula nunc eget condimentum. Proin rutrum, diam sed congue congue, lorem nisi tincidunt nisi,
        ut tempor lectus libero viverra velit. Donec gravida dapibus venenatis.

        Praesent venenatis nulla eget sapien laoreet ultricies. Suspendisse nibh sapien, gravida sed
        fermentum vitae, feugiat vitae ligula. Duis id blandit est. Vestibulum scelerisque orci sit amet
        ex ullamcorper finibus. Curabitur dignissim, elit id suscipit suscipit, magna purus eleifend
        est, vitae convallis velit odio pharetra metus. Pellentesque sit amet felis nunc. Phasellus
        libero arcu, maximus vulputate mollis at, dictum blandit quam.`
        },
        {
            title: "Prueba de titulo 5",
            date: 'Publicado el Dia ' + moment().format("ddd Do") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at mauris
        tristique, vel semper nisi fermentum. Pellentesque lobortis tristique libero nec porta. Etiam
        vehicula, arcu sit amet malesuada feugiat, erat sapien hendrerit justo, pharetra tincidunt dolor
        ex vel elit. Aliquam imperdiet magna eget tristique congue. Aliquam nec leo nunc. Etiam ornare
        vehicula nunc eget condimentum. Proin rutrum, diam sed congue congue, lorem nisi tincidunt nisi,
        ut tempor lectus libero viverra velit. Donec gravida dapibus venenatis.`
        }
    ];


    posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
             <span class="date">
                ${item.date}
             </span>
            <hr>
                <p>
                    ${item.content}
                </p>
            <a href="#" class="buttonMore">leer mas..</a>
        </article>
        `;
        $("#posts").append(post)
    })

});