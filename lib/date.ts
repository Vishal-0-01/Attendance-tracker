import type {Day} from '@/types';
export const days:Day[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const todayISO=()=>new Date().toISOString().slice(0,10);
export const dayOf=(iso:string)=>days[new Date(`${iso}T00:00:00`).getDay()];
export const fmt=(iso:string)=>new Intl.DateTimeFormat('en',{dateStyle:'medium'}).format(new Date(`${iso}T00:00:00`));
export const inRange=(d:string,s:string,e:string)=>d>=s&&d<=e;
export function datesBetween(start:string,end:string){const out:string[]=[];for(let d=new Date(`${start}T00:00:00`),last=new Date(`${end}T00:00:00`);d<=last;d.setDate(d.getDate()+1))out.push(d.toISOString().slice(0,10));return out}
