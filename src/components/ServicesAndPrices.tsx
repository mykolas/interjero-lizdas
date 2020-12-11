import React from "react"
import styles from "../App.module.scss"

const ServicesAndPrices: React.FC = () => (
    <div className={styles.servicesAndPrices}>
        <div className={styles.servicesAndPricesTitle}>Paslaugos ir kainos</div>
        <ul>
            <li>
                Interjero kūrimas: nuo techninio projekto iki pilno įgyvendinimo. Kaina nuo 15
                eur/kv m.
            </li>
            <li>
                Interjero 3D modelio ir vizualizacijų kūrimas: vizualizacijos jau sukurtam interjero
            </li>
            <li>
                konceptui. Kaina nuo 10 eur/kv m. Apšvietimo ir jo priedų projektavimas.
                Projektuojama jau
            </li>
            <li>
                turint baldų planą. Kaina nuo 6 eur/kv m. Virtuvės projektavimas: virtuvės projekto
            </li>
            <li>
                paruošimas brėžiniai + vizualizacijos. Kaina nuo 100 eur/vnt. Kitų korpusinių baldų
            </li>
            <li>
                projektavimas: drabužinės, spintų, komodų ir kitų korpusinių baldų projektų
                (brėžinių)
            </li>
            <li>
                paruošimas. Esant poreikiui pateikiamos ir vizualizacijos. Kaina nuo 40 eur/vnt.
            </li>
        </ul>
    </div>
)

export default ServicesAndPrices
