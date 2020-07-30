import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;

    setValue(
      getAttribute('name'),
      value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nomeDaCategoria}</h1>

      <form style={{ background: values.corDaCategoria}} onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria: "
          name="nome"
          type="input"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          name="descricao"
          type="text"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor: "
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>{categoria.nome}</li>
        ))}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;