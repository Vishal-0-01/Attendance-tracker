'use client';
import {useEffect,useMemo,useState} from 'react';
import type {AppData,LectureRecord,Status,TimetableLecture} from '@/types';
import {dayOf,todayISO} from './date';
const key='attendance-tracker-v1';
const blank:AppData={setupComplete:false,semester:{name:'',start:todayISO(),end:todayISO(),required:75},subjects:[],timetable:[],records:[],archives:[]};
export const id=()=>crypto.randomUUID();
export function useData(){const[data,setData]=useState<AppData>(blank);const[ready,setReady]=useState(false);useEffect(()=>{const raw=localStorage.getItem(key);if(raw)setData(JSON.parse(raw));setReady(true)},[]);useEffect(()=>{if(ready)localStorage.setItem(key,JSON.stringify(data))},[data,ready]);return{data,setData,ready}}
export function lecturesForDate(data:AppData,date:string):LectureRecord[]{const existing=data.records.filter(r=>r.date===date);const existingWeekly=new Set(existing.map(r=>r.timetableId).filter(Boolean));const generated=data.timetable.filter(l=>l.day===dayOf(date)&&!existingWeekly.has(l.id)).map(l=>({id:`gen-${l.id}-${date}`,date,subjectId:l.subjectId,start:l.start,end:l.end,status:'pending' as Status,source:'weekly' as const,timetableId:l.id}));return[...existing,...generated].sort((a,b)=>a.start.localeCompare(b.start))}
export function materialize(data:AppData,date:string){const gens=lecturesForDate(data,date).filter(r=>r.id.startsWith('gen-')).map(r=>({...r,id:id()}));return gens.length?{...data,records:[...data.records,...gens]}:data}
export function saveRecord(data:AppData,rec:LectureRecord){const d=materialize(data,rec.date);return{...d,records:d.records.map(r=>((r.timetableId===rec.timetableId&&r.date===rec.date)||r.id===rec.id)?{...rec,id:r.id}:r)}}
export const cycle=(s:Status):Status=>s==='pending'?'present':s==='present'?'absent':s==='absent'?'cancelled':'pending';
export function useSubjects(data:AppData){return useMemo(()=>Object.fromEntries(data.subjects.map(s=>[s.id,s])),[data.subjects])}
