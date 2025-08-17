
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import logoImage from '/public/ALFA STORAGE SOLUTION Logo Design.png';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
        <Image
          src={logoImage}
          alt="Alfa Storage Solution Logo"
          fill
          className="object-contain"
          priority
        />
    </div>
  );
}
