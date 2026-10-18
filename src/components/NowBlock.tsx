import './NowBlock.css';
import { NOW } from '@/data/now';

/* Hand-editable status list. Content lives in /src/data/now.ts — edit a
   value there, not here (brief §6). Each item is a <dl> pair for correct
   term/description semantics. */
export default function NowBlock() {
  return (
    <>
      {NOW.map((item) => (
        <dl className="now" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </dl>
      ))}
    </>
  );
}
