export type Status='pending'|'present'|'absent'|'cancelled';
export type Day='Sunday'|'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday';
export type Subject={id:string;name:string;required:number};
export type Semester={name:string;start:string;end:string;required:number;archived?:boolean};
export type TimetableLecture={id:string;day:Day;start:string;end:string;subjectId:string};
export type LectureRecord={id:string;date:string;subjectId:string;start:string;end:string;status:Status;source:'weekly'|'extra'|'moved';timetableId?:string;cancelled?:boolean;moved?:boolean;originalDate?:string;newDate?:string};
export type AppData={setupComplete:boolean;semester:Semester;subjects:Subject[];timetable:TimetableLecture[];records:LectureRecord[];archives:AppData[]};
export type Stats={attended:number;total:number;percent:number;required:number;status:'Safe'|'Warning'|'Critical';canMiss:number;needAttend:number;afterAttend:number;afterMiss:number};
