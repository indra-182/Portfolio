import { type CSSProperties, type ReactNode } from 'react';

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style = delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined;

  return (
    <div className={className} data-reveal style={style}>
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className} data-reveal-stagger>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className} data-reveal-item>
      {children}
    </div>
  );
}

export function HoverCard({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
}) {
  const Component = as;

  return <Component className={className}>{children}</Component>;
}
