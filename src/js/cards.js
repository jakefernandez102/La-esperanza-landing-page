document.addEventListener( "DOMContentLoaded", function ()
{
    const productosCards = document.querySelector( ".productos__cards" );

    // Datos de ejemplo (puedes reemplazarlos con tu propia lógica para obtener datos)
    const data = [
        { imageSrc: "../../build/img/1.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/2.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/3.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/4.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/5.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/6.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/7.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/8.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/9.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/10.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/11.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/12.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/13.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/14.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/15.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/16.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/17.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/18.png", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/19.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/20.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/21.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/22.png", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/23.jpeg", buttonText: "Cotizar" },
        { imageSrc: "../../build/img/24.jpeg", buttonText: "Cotizar" },

        // Agrega más datos según sea necesario
    ];

    // Crear las cards dinámicamente
    data.forEach( item =>
    {
        const card = document.createElement( "div" );
        card.classList.add( "card" );

        const image = document.createElement( "img" );
        image.classList.add( "card__image" );
        image.setAttribute( "alt", 'imagen producto' );
        image.setAttribute( "src", item.imageSrc );

        const button = document.createElement( "button" );
        button.classList.add( "card__button" );
        button.textContent = item.buttonText;

        card.appendChild( image );
        card.appendChild( button );

        productosCards.appendChild( card );
    } );


} );
