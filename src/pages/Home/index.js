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
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Nesse vídeo a Nath desvenda alguns termos técnicos que a gente escuta por aí e parecem um bicho de 7 cabeças, mas não são."
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
