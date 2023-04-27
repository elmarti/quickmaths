/* eslint-disable prettier/prettier */
//@ts-ignore
const Maths = require('./quickmaths.js');
export const init = () => Maths.init();
//@ts-ignore
export const abs = (x: number): number => {
  return Maths._Abs(x);
};

export const round = (x: number): number => {
  return Maths._Round(x);
}

export const floor = (x: number): number => {
  return Maths._Floor(x);
};


export const ceil = (x: number): number =>{
  return Maths._Ceil(x);
}

export const min = (a: number, b: number): number => Maths._Min(a, b);

export const max = (a: number, b: number): number => Maths._Max(a,b);
