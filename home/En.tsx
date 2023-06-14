import React from 'react'
import '../styles/reset.css'
import '../styles/styles.css'

export function English() {

    return (
        <>
            <main id="head-div">
                <section className="division-of-head-div-left">
                    <h1>
                        Cheese Bread Pie Recipe
                    </h1>
                    <nav className="recipes-infos">

                        <p>Prep Time: 20 min</p>
                        <p>Cook Time: 40 min</p>
                        <p>Servings: 8</p>

                    </nav>
                </section>


                <section className="division-of-head-div-right">
                    <img src="../assets/example.avif" alt="pie image" id="img-main"></img>
                    <label htmlFor="img-main" id="label-img">The Beatifull Cheese Bread Pie Finished!!</label>
                </section>
            </main >


            <main id="ingredients-div-video">
                <video src="../assets/video-example.mp4" autoPlay controls loop id="video-example"></video>
                <nav id="ingredients-div">
                    <h3>Ingredients List:</h3>

                    <ol>
                        <li>3 cups sour cassava flour</li>
                        <li>3 eggs</li>
                        <li>1 cup Brazilian fresh, half-cured cheese, grated</li>
                        <li>1/2 cup oil</li>
                        <li>1 cup warm milk</li>
                        <li>Pinch of salt</li>
                        <li>1 teaspoon baking powder</li>
                        <li>7 ounces ham, chopped</li>
                        <li>3 1/2 ounces bacon, chopped</li>
                        <li>1 cup mozzarella cheese, grated</li>
                        <li>1 cup cherry tomatoes, halved</li>
                        <li>1 teaspoon oregano</li>
                        <li>1 cup Parmesan cheese, grated</li>
                    </ol>
                </nav>
            </main>

            <main id="way-of-preparation-div">
                <h3>Way Of Preparation:</h3>
                <ol>
                    <li>Oven to 350 degrees.</li>
                    <li>In a blender, combine the flour, eggs, cheese, oil and milk. Transfer mixture to a medium bowl. Add salt
                        and baking powder and mix gently.</li>
                    <li>Pour half of the mixture into a greased and floured baking dish.</li>
                    <li>Sprinkle in the chopped ham, bacon, grated mozzarella cheese, tomatoes and oregano.</li>
                    <li>Cover with the rest of the batter, and sprinkle with the Parmesan cheese.</li>
                    <li>Place oven for approximately 40 minutes.</li>
                </ol>

                <footer>

                    <p id="finalization">At The End Of The Recipe, You Will Have A Beautiful Cheese Bread Pie!
                    </p>
                </footer>

            </main>
        </>
    )
}
