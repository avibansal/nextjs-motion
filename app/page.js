"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <span className='text-3xl font-bold text-neutral-500 mx-auto'>Notion Pratice</span>
      <button className='mt-10 px-12 py-4 rounded-lg bg-black text-cyan-500' onClick={() => {
        router.push("/button");
      }}>Button Basic animation</button>
      <button className='mt-10 px-12 py-4 rounded-lg bg-black text-cyan-500' onClick={() => {
        router.push("/card");
      }}>Card Basic animation</button>
      <button className='mt-10 px-12 py-4 rounded-lg bg-black text-cyan-500' onClick={() => {
        router.push("/sidebar");
      }}>Sidebar Basic animation</button>
    </div>
  )
}
