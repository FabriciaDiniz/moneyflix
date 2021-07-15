import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].link_extra.text}
        url={dadosIniciais.categorias[0].link_extra.url}
        videoDescription="Em menos de 10 minutos você vai entender (MESMO) o que é renda fixa, qual a diferença entre uma renda fixa boa e uma renda fixa ruim"
      />

      {dadosIniciais.categorias.map((categoria) => (
        <Carousel
          category={categoria}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
