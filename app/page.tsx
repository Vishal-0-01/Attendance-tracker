'use client';import {Shell} from '@/components/Shell';import {Dashboard} from '@/components/Dashboard';export default function Page(){return <Shell>{ctx=><Dashboard {...ctx}/>}</Shell>}
