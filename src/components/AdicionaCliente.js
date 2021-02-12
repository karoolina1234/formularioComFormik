import {Formik} from 'formik'
import React from 'react'

function AdicionaCliente() {
    
    return(
        <>
        <h1>Cadastro de Clientes</h1>
        <Formik 
        initialValues={{nome: '', email:'', nascimento:''}}
        validate={(values)=>{
            const errors = {};
            if(!values.nome){
                errors.nome = "O nome é obrigatório"
            }
            if(!values.email){
                errors.email = "O E-mail é obrigatório"
            }else if(  !/^[A-Z0-9_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
             errors.email = "O e-mail é invalido"
            }
            if(!values.nascimento){
                errors.nascimento = "A data é obrigatória"
            }
            return errors;
        }}
        onSubmit={(values)=>{
            alert(JSON.stringify(values))
        }}
        >
          {(props)=>(
            <form onSubmit={props.handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input  id="nome" name="nome" type="text"
                    value={props.values.nome}
                    onChange={props.handleChange} 
                    onBlur={props.handleBlur}/>
                    {props.errors.nome && props.touched.nome ? (<div className="error-campo">{props.errors.nome}</div>): ''}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input  id="email" name="email"
                     type="email" 
                     value={props.values.email}
                     onChange={props.handleChange}
                     onBlur={props.handleBlur}/>
                      {props.errors.email  && props.touched.email ? (<div className="error-campo">{props.errors.email}</div>): ''}
                </div>
                <div className="form-group">
                    <label htmlFor="date">Data de Nascimento</label>
                    <input  id="nascimento" name="nascimento"
                     type="date" 
                     value ={ props.values.nascimento }
                     onChange={props.handleChange}
                     onBlur={props.handleBlur}/>
                      {props.errors.nascimento && props.touched.nascimento ? (<div className="error-campo">{props.errors.nascimento}</div>): ''}
                </div>
            <button type="submit">Adicionar</button>
            </form>
            )}
        </Formik>
        
        </>
    )
}

export default AdicionaCliente