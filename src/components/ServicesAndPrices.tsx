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
                konceptui. Kaina nuo 10 eur/kv m.
            </li>
            <li>
                Apšvietimo ir jo priedų projektavimas. Projektuojama jau turint baldų planą. Kaina
                nuo 6 eur/kv m.
            </li>
            <li>
                Virtuvės projektavimas: virtuvės projekto paruošimas brėžiniai + vizualizacijos.
                Kaina nuo 100 eur/vnt.
            </li>
            <li>
                Kitų korpusinių baldų projektavimas: drabužinės, spintų, komodų ir kitų korpusinių
                baldų projektų (brėžinių) paruošimas. Esant poreikiui pateikiamos ir vizualizacijos.
                Kaina nuo 40 eur/vnt.
            </li>
        </ul>
    </div>
)

export default ServicesAndPrices
