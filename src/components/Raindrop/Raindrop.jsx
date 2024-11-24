import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Raindrop.css";

export default function Raindrop({ isOpen, onClose }) {

    const texts = [
        {
            tituloProblematica: "Vertidos industriales",
            descripcionProblematica: "Muchas fábricas descargan residuos tóxicos en ríos y lagos, afectando la vida acuática y la salud humana.",
            tituloSolucion: "Solución: Tratamiento de residuos industriales",
            descripcionSolucion: "Implementar políticas de tratamiento de residuos industriales y promover la transición hacia prácticas más sostenibles en la industria."
        },
        {
            tituloProblematica: "Residuos plásticos",
            descripcionProblematica: "El plástico es uno de los mayores contaminantes del agua, afectando no solo a los océanos sino también a los ríos y lagos.",
            tituloSolucion: "Solución: Reducción y reciclaje de plásticos",
            descripcionSolucion: "Reducir el uso de plásticos de un solo uso, fomentar el reciclaje y limpiar regularmente las vías fluviales para remover residuos."
        },
        {
            tituloProblematica: "Aguas residuales urbanas",
            descripcionProblematica: "Las aguas residuales de zonas urbanas a menudo se descargan sin tratamiento, contaminando ríos y lagos.",
            tituloSolucion: "Solución: Infraestructuras de tratamiento de aguas",
            descripcionSolucion: "Invertir en infraestructuras de tratamiento de aguas residuales para garantizar que las aguas usadas no contaminen las fuentes de agua potable."
        },
        {
            tituloProblematica: "Pesticidas y fertilizantes",
            descripcionProblematica: "La agricultura intensiva utiliza productos químicos que pueden escurrirse hacia fuentes de agua, afectando la biodiversidad y la salud humana.",
            tituloSolucion: "Solución: Prácticas agrícolas sostenibles",
            descripcionSolucion: "Fomentar prácticas agrícolas sostenibles como el uso de pesticidas orgánicos y la rotación de cultivos para reducir el impacto en el agua."
        },
        {
            tituloProblematica: "Deforestación",
            descripcionProblematica: "La tala de árboles en las cercanías de ríos y lagos puede erosionar el suelo, causando sedimentación que afecta la calidad del agua.",
            tituloSolucion: "Solución: Reforestación y conservación",
            descripcionSolucion: "Implementar políticas de reforestación y conservación de áreas cercanas a cuerpos de agua para reducir la erosión del suelo."
        },
        {
            tituloProblematica: "Desperdicio de agua en el hogar",
            descripcionProblematica: "Muchas personas no son conscientes del impacto del uso excesivo de agua en sus actividades diarias.",
            tituloSolucion: "Solución: Uso responsable del agua",
            descripcionSolucion: "Promover la educación sobre el uso responsable del agua y fomentar prácticas de ahorro como el reciclaje de agua y el uso de dispositivos de bajo consumo."
        },
        {
            tituloProblematica: "Contaminación por productos farmacéuticos",
            descripcionProblematica: "Los medicamentos desechados en los sistemas de alcantarillado pueden terminar en cuerpos de agua, afectando la vida acuática.",
            tituloSolucion: "Solución: Recolección de medicamentos",
            descripcionSolucion: "Implementar programas de recolección de medicamentos caducados para evitar su eliminación incorrecta y proteger la calidad del agua."
        },
        {
            tituloProblematica: "Derrames de petróleo",
            descripcionProblematica: "Los derrames de petróleo en cuerpos de agua son devastadores para el medio ambiente y la vida silvestre.",
            tituloSolucion: "Solución: Regulaciones en la industria petrolera",
            descripcionSolucion: "Aumentar las regulaciones y medidas preventivas en la industria petrolera y promover el uso de tecnologías de limpieza más efectivas para reducir el impacto de los derrames."
        }
    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDropClick = (event) => {
        event.stopPropagation();
    };

    // Función para ir al texto anterior
    const prevText = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : texts.length - 1));
    };

    // Función para ir al siguiente texto
    const nextText = () => {
        setCurrentIndex((prevIndex) => (prevIndex < texts.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div onClick={onClose} className={`overlay ${!isOpen ? "close" : ""}`}>
            <div className={`${isOpen ? "animate__animated animate__bounceInDown" : ""}`}>
                <div className={`drop`} onClick={handleDropClick}>
                    {/* Texto actual */}
                    <div className="drop-content">
                        <p>{texts[currentIndex].tituloProblematica}</p>
                        <p>{texts[currentIndex].descripcionProblematica}</p>
                        <p>{texts[currentIndex].tituloSolucion}</p>
                        <p>{texts[currentIndex].descripcionSolucion}</p>

                        {/* Flechas de navegación */}
                        <button className="prev" onClick={prevText}>◀</button>
                        <button className="next" onClick={nextText}>▶</button>

                        {/* Indicadores en forma de bolitas */}
                        <div className="indicator">
                            {texts.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active" : ""}`}
                                ></span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

Raindrop.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
