import { BeatCode, mk } from "../BeatCode";

type ScaleInput = BeatCode['data'][number];

export const scale = (scale: Partial<ScaleInput>) => {
    return (beatCode: BeatCode): BeatCode => {
        // todo: new duration is wrong, the last pause needs to be scaled, too
        const scaleWDefaults = { at: 1, code: 1, ...scale };
        const { data } = beatCode;
        const newDuration = beatCode.duration * scaleWDefaults.at;
        const newData = data.map(d => ({ at: d.at * scaleWDefaults.at, code: d.code * scaleWDefaults.code }));
        return mk(newData, newDuration);
    }
}
