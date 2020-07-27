import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/3/35/My_Belarusy_vocal.ogg`
  }
};

it(`AudioPlayer render`, () => {
  const {song} = mock;

  const tree = renderer.create(
      <AudioPlayer
        isPlaying={false}
        isLoading={true}
        onPlayButtonClick={() => {}}
        src={song.src}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
