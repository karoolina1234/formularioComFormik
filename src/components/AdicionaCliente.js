import {Formik, Field , useField} from 'formik'
import React from 'react'
import * as yup from 'yup'

const Campo = props =>{
    const [field, meta] = useField(props)
    return(
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
        <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'error-campo': ''}/>
        </div>
    )
}
function AdicionaCliente() {

    const esquema = yup.object({
        nome: yup.string()
        .required("O campo é obrigatorio"),
        email: yup.string()
        .required("E-mail é obrigatorio")
        .email("Formato inválido"),
        nascimento: yup.date()
        .required('Data de nascimento é obrigatoria')
        .max(new Date(), 'data inválida')

    })
    
    return(
        <>
        <h1>Cadastro de Clientes</h1>
        <Formik 
        initialValues={{nome: '', email:'', nascimento:''}}
        // validate={(values)=>{
        //     const errors = {};
        //     if(!values.nome){
        //         errors.nome = "O nome é obrigatório"
        //     }
        //     if(!values.email){
        //         errors.email = "O E-mail é obrigatório"
        //     }else if(  !/^[A-Z0-9_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
        //      errors.email = "O e-mail é invalido"
        //     }
        //     if(!values.nascimento){
        //         errors.nascimento = "A data é obrigatória"
        //     }
        //     return errors;
        // }}
        validationSchema={esquema}
        onSubmit={(values)=>{
            alert(JSON.stringify(values))
        }}
        >
          {(props)=>(
            //   Field substitui o input
            <form onSubmit={props.handleSubmit} noValidate>
              
                    
                    <Campo  id="nome" name="nome" 
                    type="text"
                    label="Nome "/>
                   
                    {props.errors.nome && props.touched.nome ? (<div className="error-campo">{props.errors.nome}</div>): ''}
                
                
                    <Campo  id="email" name="email"
                     type="email" 
                     label="Email  "/>
                     
                      {props.errors.email  && props.touched.email ? (<div className="error-campo">{props.errors.email}</div>): ''}
                
                 <Campo  id="nascimento" name="nascimento"
                     type="date" 
                     label="Data de nascimento"
                    />
                      {props.errors.nascimento && props.touched.nascimento ? (<div className="error-campo">{props.errors.nascimento}</div>): ''}
                
            <button type="submit">Adicionar</button>
            </form>
            )}
        </Formik>
        
        </>
    )
}

export default AdicionaCliente