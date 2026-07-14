import './globals.css';import type {Metadata} from 'next';
export const metadata:Metadata={title:'Attendance Tracker',description:'Personal attendance tracker'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
