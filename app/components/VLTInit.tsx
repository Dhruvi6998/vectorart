'use client';

import { useEffect } from "react";

export default function VLTInit() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).VLT) {
      (window as any).VLT.init();
    }
  }, []);

  return null;
}
