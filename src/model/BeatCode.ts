export interface BeatCode {
    maxCode: number;
    duration: number;
    data: {at: number, code: number}[];
}

export const mk = (data: {at: number, code: number}[], duration: number): BeatCode => {
    const maxCode = data.map(d => d.code).reduce((a, b) => Math.max(a, b), 0);
    return { maxCode, data, duration };
}
