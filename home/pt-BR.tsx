import React from 'react'
import '../styles/reset.css'
import '../styles/styles.css'

export function Portuguese() {

    return (
        <>
            <main id="head-div">
                <section className="division-of-head-div-left">
                    <h1>
                        Torta de Pão de queijo
                    </h1>
                    <nav className="recipes-infos">

                        <p>Tempo de preparo: 20 min</p>
                        <p>Tempo de cozimento: 40 min</p>
                        <p>Porções: 8</p>

                    </nav>
                </section>


                <section className="division-of-head-div-right">
                    <img src="../assets/example.avif" alt="pie image" id="img-main"></img>
                    <label htmlFor="img-main" id="label-img">A Linda Torta Prontinha!!</label>
                </section>
            </main >


            <main id="ingredients-div-video">
                <video src="../assets/video-example.mp4" autoPlay controls loop id="video-example"></video>
                <nav id="ingredients-div">
                    <h3>Lista de Ingredientes:</h3>

                    <ol>
                        <li>3 Xícaras de farinha de mandioca azeda</li>
                        <li>3 Ovos</li>
                        <li>1 Xícara de queijo fresco, meia cura, ralado</li>
                        <li>1/2 Xicara de oleo</li>
                        <li>1 Xícara de leite morno</li>
                        <li>Uma pitada de sal</li>
                        <li>1 Colher de chá de fermento em pó</li>
                        <li>7 Pedaços de presunto, picado</li>
                        <li>3 1/2 Pedaços de bacon, picado</li>
                        <li>1 Xícara de queijo mussarela ralado</li>
                        <li>1 Xícara tomates cereja, cortados ao meio</li>
                        <li>1 Colher de chá de oregano</li>
                        <li>1 Xícara de queijo parmesão ralado</li>
                    </ol>
                </nav>
            </main>

            <main id="way-of-preparation-div">
                <h3>Modo de preparo:</h3>
                <ol>
                    <li>Forno a 350 graus</li>
                    <li>No liquidificador, bata a farinha, os ovos, o queijo, o óleo e o leite. Transfira a mistura para uma tigela média. Adicione sal
                        e o fermento em pó e misture delicadamente.</li>
                    <li>Despeje metade da massa em uma assadeira untada e enfarinhada.</li>
                    <li>Polvilhe o presunto picado, o bacon, o queijo muçarela ralado, os tomates e o orégano.</li>
                    <li>Cubra com o restante da massa e polvilhe com o queijo parmesão.</li>
                    <li>Leve ao forno por aproximadamente 40 minutos.</li>
                </ol>

                <footer>

                    <p id="finalization">Ao Final Da Receita, Você Terá Uma Linda Torta De Pão De Queijo!
                    </p>
                </footer>

            </main>
        </>
    )
}
