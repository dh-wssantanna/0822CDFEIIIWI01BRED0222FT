
import { useState } from 'react';

import Modal from "./Modal";

export default function Formulario() {

    /*
        1 - Identifiquei os campos (inputs)
        2 - Capturei seus valores a partir do evento onChange
        3 - Utilizando useState definir os valores nome e idade
        4 - Enviei os valores para o Modal
    */

    // get = pedir/pegar/requerer
    // set = definir/atribuir

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");

    function getNome(elNome) {
        setNome(elNome);
    }

    function getIdade(elIdade) {
        setIdade(elIdade);
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <article>
                        <h1 className="text-center">Qual minha geração?</h1>
                    </article>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group my-2">
                        <label className="mb-2" htmlFor="nome">Seu nome</label>
                        <input
                            type="text"
                            id="nome"
                            className="form-control form-control-lg"
                            placeholder="Digite seu nome completo"
                            onChange={evento => getNome(evento.target.value)}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <div className="form-group">
                        <label className="mb-2" htmlFor="idade">Quantos anos você tem?</label>
                        <input
                            type="text"
                            id="idade"
                            className="form-control form-control-lg"
                            placeholder="ex.: 18"
                            onChange={evento => getIdade(evento.target.value)}
                        />
                    </div>
                </div>
                <div className="col-12 mt-4 d-grid">
                    <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal">Calcular</button>
                </div>
            </div>

            <Modal nome={nome} idade={idade} />
        </>
    )
} 