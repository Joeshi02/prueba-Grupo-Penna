import { useState } from "react"
import Formdatos from "./formulario1"
import FormPdf from "./formulario2"
import MuestraForm from "./muestraForm2"
import MuestraImg from "./muestraForm3"
import FromImg from "./formulario3"
import Muestra from "./muestraForm1"

const Formularios = () => {
    const [datos, setDatos] = useState(null)
    const [datosPdf, setDatosPdf] = useState(null)
    const [datos3, setDatos3] = useState(null)
    const handleFormSubmit = (data) => {
        setDatos(data)
    }
    const handleFormPdf = (data2) => {
        setDatosPdf(data2)
    }
    const handleFormImg = (data3) => {
        setDatos3(data3)
    }
    return (
        <>
            <Formdatos onFormSubmit={handleFormSubmit} />
            {datos && <Muestra data={datos} />}
            <FormPdf onFormSubmit2={handleFormPdf} />
            {datosPdf && <MuestraForm datosPdf={datosPdf} />}
            <FromImg onFormSubmit3={handleFormImg} />
            {datos3 && <MuestraImg datos3={datos3} />}
        </>
    )
}
export default Formularios