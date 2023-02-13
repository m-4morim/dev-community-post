import Botao from '../Botao'
import './Campo-resposta.css'

function CampoResponder() {
    // JSX

const Resposta = (props) => {

    const [resposta, setResposta] = useState('')
        
    const aoResponder = (evento) => {
        evento.preventDefault()
    }

    return (
        <div className='resposta'>
            <img src="/imagens/perfil-resposta.webp" alt="Foto do perfil" />
            <section>
                <h2>Anna Kim</h2>
                <textarea className='campo-resposta' name="editor-resposta" cols="70" rows="5" class="editorresposta"></textarea>
            </section>
            <Botao texto="Responder"/>
        </div>
    )
}

export default CampoResponder