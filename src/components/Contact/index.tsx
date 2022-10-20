import { CircleNotch, PaperPlaneRight } from 'phosphor-react';
import {  useState } from 'react';
import classNames from 'classnames';
import { SecTitle } from '../SecTitle/index';
import * as yup from 'yup'
import { Form, Formik, Field } from 'formik';

const ContactSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido.')
  .required('Digite seu e-mail.'),
  name: yup.string().required('Digite seu nome.').min(4, 'Mínimo 4 caracteres.'),
  message: yup.string().required('Digite sua mensagem.').min(10, 'Sua mensagem deve ter no mínimo 10 caracteres.')
})

interface FormStructure {
  email: string
  name: string
  message: string
}

export function Contact() {
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const initialValues: FormStructure = {
    email: '',
    name: '',
    message: ''
  }

  const [alertMessage, setAlertMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleMessageSubmit({name, email, message}: FormStructure) {
    setIsSendingMessage(true);

    await fetch('/api/mail', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then(res => {
        setAlertMessage('E-mail enviado com sucesso');
      })
      .catch(error => {
        setErrorMessage('Houve um erro ao enviar o e-mail');
      });

    setIsSendingMessage(false);
  }

  return (
    <section id="contact" className="flex flex-col items-center justify-center bg-brand-800">
      <SecTitle content="Fale comigo" />
      <Formik initialValues={initialValues} onSubmit={handleMessageSubmit} validationSchema={ContactSchema}>
        {({ errors, touched }) => (<Form className="flex flex-col items-center gap-6 px-10 w-full lg:w-auto lg:px-0">
          <span
            className={classNames('text-zinc-200 rounded p-2 bg-opacity-70', {
              'bg-primary-500': alertMessage.length > 0,
              visible: alertMessage.length > 0 || errorMessage.length > 0,
              hidden: !alertMessage && !errorMessage,
              'bg-red-500': errorMessage.length > 0,
            })}
          >
            {alertMessage.length > 0 ? alertMessage : errorMessage.length > 0 ? errorMessage : ''}
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-2">
            <div className="flex flex-col">
              <label htmlFor="email">Seu email</label>
              <Field type="email" placeholder="exemplo@gmail.com" name="email" id="email" className="rounded-md bg-secondary-500 py-2 px-4" />
              {touched.email && errors.email ?  <span className='text-red-500'>{errors.email}</span> : undefined}
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Seu nome</label>
              <Field type="text" name="name" id="name" className="rounded-md bg-secondary-500 p-2" placeholder="Fulano de Tal" />
              {touched.name && errors.name ?  <span className='text-red-500'>{errors.name}</span> : undefined}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message">Sua mensagem</label>
            <Field name="message" id="message" component="textarea" className="lg:h-80 h-36 resize-none rounded-md bg-secondary-500 p-4 w-full lg:w-auto" placeholder="Escreva aqui sua mensagem..." />
            {touched.message && errors.message ?  <span className='text-red-500'>{errors.message}</span> : undefined}
          </div>
          <button disabled={isSendingMessage} className="mb-6 disabled:opacity-50 group bg-primary-500 py-2 px-8 rounded text-brand-900 flex items-center justify-center gap-1 active:bg-primary-600 hover:bg-primary-600 transition-colors" type="submit">
            {!isSendingMessage ? (
              <>
                Enviar
                <PaperPlaneRight className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform" size={26} />
              </>
            ) : (
              <CircleNotch className="animate-spin" />
            )}
          </button>
        </Form>)}
      </Formik>
    </section>
  );
}
