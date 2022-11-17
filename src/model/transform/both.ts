import { BeatCode, mk } from "../BeatCode";

export const both = (beatCode1: BeatCode) => {
    return (beatCode2: BeatCode): BeatCode => {
        return mk([...beatCode1.data, ...beatCode2.data], Math.max(beatCode1.duration, beatCode2.duration));
    }
}
