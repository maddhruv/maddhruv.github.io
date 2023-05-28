"use client";
import { useEffect } from "react";

export const PageView: React.FC<{ id: string }> = ({ id }) => {
  useEffect(() => {
    fetch(`/api/pageview?postId=${id}`);
  }, [id]);

  return null;
};
