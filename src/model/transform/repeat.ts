import { BeatCode, mk } from "../BeatCode";

export const repeat = (n: number) => {
    return (beatCode: BeatCode): BeatCode => {
        const ret = [];
        let dt = 0;

        for (let i = 0; i < n; i++) {
            const dtx = dt; // alias for dt, squashes an FP eslint warning in the next line
            const newRepetition = beatCode.data.map(({ at, code }) => ({ at: at + dtx, code }));
            ret.push(...newRepetition);
            dt += beatCode.duration;
        }

        return mk(ret, n * beatCode.duration);
    }
}
