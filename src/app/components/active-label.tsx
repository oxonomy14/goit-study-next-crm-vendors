import React from 'react';
import css from './active-label.module.css';
import { log } from 'console';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

console.log(css);

export default function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}
