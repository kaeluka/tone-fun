import React from 'react';
import logo from './logo.svg';
import * as Tone from 'tone';
import './App.css';
import { SoundButton } from './SoundButton';
import { BeatCode, mk } from './model/BeatCode';
import { scale } from './model/transform/scale'
import { repeat } from './model/transform/repeat'
import { both } from './model/transform/both';

function reichPhase(beatCode: BeatCode, factor: number) {
  return both(beatCode)(scale({ at: factor })(beatCode));
}

function App() {
  const synth = new Tone.PolySynth({ maxPolyphony: 100 }).toDestination();
  const bc = mk([{ at: 0, code: 1 }, { at: 1, code: 2 }, { at: 2, code: 4 }], 3);
  return (
    <div className="App">
      <h1>Hey!</h1>
      <div>{JSON.stringify(bc)}</div>
      <SoundButton label="normal" bc={bc} baseNote="C4" synth={synth} />
      <SoundButton label="2x faster" bc={scale({ at: 0.5, code: 1 })(bc)} baseNote="C4" synth={synth} />
      <SoundButton label="4x faster" bc={scale({ at: 0.25, code: 1 })(bc)} baseNote="C4" synth={synth} />
      <SoundButton label="higher" bc={scale({ code: 2 })(bc)} baseNote="C4" synth={synth} />
      <SoundButton label="8x faster, repeated" bc={repeat(100)(scale({ at: 0.125, code: 1 })(bc))} baseNote="C4" synth={synth} />
      <SoundButton label="Reich" bc={reichPhase(scale({ at: 0.25 })(repeat(100)(bc)), 1.02)} baseNote="C4" synth={synth} />
    </div>
  );
}

export default App;
