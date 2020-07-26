import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

describe(`Button changes it's apperance on:`, () => {
  it(`pause`, () => {
    const player = mount(
        <AudioPlayer
          src={``}
          isPlaying={true}
          isLoading={false}
          onPlayButtonClick={() => {}}
        >
          <audio />
        </AudioPlayer>
    );

    const button = player.find(`button`);

    expect(button.hasClass(`track__button--pause`)).toBe(true);
  });

  it(`play`, () => {
    const player = mount(
        <AudioPlayer
          src={``}
          isPlaying={false}
          isLoading={true}
          onPlayButtonClick={() => {}}
        >
          <audio />
        </AudioPlayer>
    );

    const button = player.find(`button`);

    expect(button.hasClass(`track__button--play`)).toBe(true);
  });

});
