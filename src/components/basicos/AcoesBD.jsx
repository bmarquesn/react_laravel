/** To use JSX - HTML inside in React */
import React from 'react';
import ReactDOM from "react-dom";
/** To use JQuery */
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter'

export default function(props) {
    const [isOpenList, setIsOpenList] = React.useState(false);

    const showModalList = () => {
        setIsOpenList(true);

        $.ajax({
            url : "http://127.0.0.1:8000/api/usuarios_api",
            type : 'get',
            beforeSend : function(){
                 $("#list_users").text("Carregando...");
            }
        }).done(function(registros){
            var tabela_usuarios='<table class="table table-striped table-bordered">';
            tabela_usuarios+='<thead>';
                tabela_usuarios+='<tr>';
                    tabela_usuarios+='<th>Nome</th>';
                    tabela_usuarios+='<th>E-mail</th>';
                tabela_usuarios+='</tr>';
            tabela_usuarios+='</thead>';
            tabela_usuarios+='<tbody>';
            $(registros[0]).each(function(index, value){
                tabela_usuarios+='<tr>';
                    tabela_usuarios+='<td>'+value.name+'</td>';
                    tabela_usuarios+='<td>'+value.email+'</td>';
                tabela_usuarios+='</tr>';
            });
            tabela_usuarios+='</tbody>';
            tabela_usuarios+='</table>';
            $("#list_users").html(tabela_usuarios);
        }).fail(function(jqXHR, textStatus, msg){
            alert('Erro ao trazer usuários do Módulo Laravel ACL');
        });
    };

    const hideModalList = () => {
        setIsOpenList(false);
    };

    return (
        <div>
            <button id="listar" onClick={showModalList} className="btn btn-primary">Listar</button>
            <Modal show={isOpenList} onHide={hideModalList}>
                <Modal.Header>Listando Registros BD</Modal.Header>
                <Modal.Body>
                    <p>Listando Usuários do módulo Laravel ACL.</p>
                    <div id="list_users"></div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModalList}>Fechar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}