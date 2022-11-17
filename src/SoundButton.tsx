import { BeatCode } from './model/BeatCode';
import * as Tone from 'tone';
import * as Tonal from 'tonal';
import React from 'react';

export interface SoundButtonProps {
    bc: BeatCode;
    label: string;
    baseNote: string;
    synth: Tone.PolySynth;
}

const transpose = (note: string) => Tonal.transpose(note) as ((_: string) => string);

const makeNoise = (bc: BeatCode, baseNote: string, synth: Tone.PolySynth) => {
    const scale = Tonal.scale("major").map(transpose(baseNote));
    // const synth = new Tone.Synth().toDestination();
    bc.data.forEach(({ at, code }) => {
        synth.triggerAttackRelease(scale[code % scale.length], '4n', `+${at}`, 0.05);
    });
}

export const SoundButton = (props: SoundButtonProps) => {
    const { bc, label, baseNote, synth } = props;
    return <button onClick={() => makeNoise(bc, baseNote, synth)}>{label}</button>
}
