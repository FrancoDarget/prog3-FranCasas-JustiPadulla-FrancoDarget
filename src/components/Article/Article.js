import React from "react";

function Article() {
  return (
    <article>
        <section class="navigation">
            <div>
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-right"></i>
            </div>
            <i class="far fa-window-close"></i>
        </section>
        <main>
            <img src="../assets/img/image-default.png" alt=""/>
            <h3>Título/ Nombre</h3>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
            <section class="aditional-info">
                <p><span className="infoAdicional">Info Adicional: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                <p><span className="infoAdicional">Info Adicional: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                <p><span className="infoAdicional">Info Adicional: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
            </section>
            <div className='botonInfoAdicional'>
            <a href="">Ver más</a>
            </div>
        </main>
    </article>
);
}

export default Article;