import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomDeviceMenuCat = () => {

    const categories = [

        {
            name: "POKE",
            link: "poke",
          
        },
        {
            name: "ANTIPASTI E TEMPURE",
            link: "antipasti_e_tempure",
          
        },
        {
            name: "PRIMI E RAVIOLI",
            link: "primi_e_ravioli",
           
        },
        {
            name: "TEPPANAKI E TATAKI",
            link: "teppanaki_e_tataki",
           
        },
        {
            name: "BURGER",
            link: "burger",
           
        },
        {
            name: "SASHIMI E CRUDI",
            link: "sashimi_e_crudi",
     
        },
        {
            name: "NIGIRI E CHIRASHI",
            link: "nigiri_e_chirashi",
           
        },
        {
            name: "HOSOMAKI E TEMAKI",
            link: "hosomaki_e_temaki",
          
        },
        {
            name: "URAMAKI ROLL",
            link: "uramaki_roll",
          
        },
        {
            name: "TEMPURA ROLL",
            link: "tempura_roll",
       
        },
        {
            name: "WOK ROLL",
            link: "wok_roll",
        
        },
        {
            name: "DEGUSTAZIONI",
            link: "degustazioni",
        
        },
        {
            name: "BEVANDE",
            link: "bevande",
           
        },
        {
            name: "VINI E BOLLICINE",
            link: "vini_e_bollicine",
          
        },
        {
            name: "VINI FERMI E SAKE",
            link: "vini_fermi_sake",
          
        },
    ]

    return (
        <>
            <div className="menu-list pt-3">
                {categories.map((cat, index) => (
                    <Link to={`category/${cat.link}`} className="text-decoration-none text-light">
                        <div className={index === categories.length - 1 ? "" : "pe-2"} key={index}>
                            <Button className="menu-list-category">
                                {cat.name}
                            </Button>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CustomDeviceMenuCat;