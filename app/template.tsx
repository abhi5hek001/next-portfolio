"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {children}
    </div>
  );
}
