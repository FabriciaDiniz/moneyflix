import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  category,
}) {
  const { titulo: categoryTitle } = category;
  const { cor: categoryColor } = category;
  const { link_extra: categoryExtraLink } = category;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video) => (
          <SliderItem key={video.titulo}>
            <VideoCard
              videoTitle={video.titulo}
              videoURL={video.url}
              categoryColor={categoryColor}
            />
          </SliderItem>
        ))}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.propTypes = {
  category: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    link_extra: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Carousel;
