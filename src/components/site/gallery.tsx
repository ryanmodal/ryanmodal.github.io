import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { gallery } from '@/lib/site/data';

export function ProjectGallery({ category }: { category?: string }) {
  const [filter, setFilter] = useState(category || 'Todos'); const [index, setIndex] = useState<number | null>(null); const touch = useRef(0);
  const photos = gallery.filter(p => filter === 'Todos' || p.category === filter);
  const move = (amount: number) => setIndex(i => i === null ? null : (i + amount + photos.length) % photos.length);
  useEffect(() => { if (index === null) return; const key = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') { e.preventDefault(); setIndex(i => i === null ? null : (i + 1) % photos.length); } if (e.key === 'ArrowLeft') { e.preventDefault(); setIndex(i => i === null ? null : (i - 1 + photos.length) % photos.length); } }; window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, [index, photos.length]);
  const photo = index === null ? undefined : photos[index];
  return <div>
    {!category && <div role="group" aria-label="Filtrar projetos" className="my-8 flex flex-wrap gap-2">{['Todos','Janelas','Portas','Box','Guarda-corpo','Portões','Fachadas'].map(c => <Button key={c} variant={filter === c ? 'default' : 'outline'} aria-pressed={filter === c} onClick={() => { setFilter(c); setIndex(null); }}>{c}</Button>)}</div>}
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">{photos.map((p,i) => <Button key={p.src} variant="ghost" onClick={() => setIndex(i)} aria-label={`Ampliar: ${p.alt}`} className="group h-auto aspect-[4/3] overflow-hidden rounded-lg bg-muted p-0"><img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /></Button>)}</div>
    <Dialog open={index !== null} onOpenChange={open => { if (!open) setIndex(null); }}><DialogContent className="max-w-5xl rounded-lg p-4 sm:p-6"><DialogTitle className="pr-8 text-base">{photo?.alt || 'Projeto Modal'}</DialogTitle><DialogDescription className="sr-only">Fotografia de trabalho realizado pela Modal Esquadrias.</DialogDescription>{photo && <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="max-h-[65vh] w-full object-contain" onTouchStart={e => { touch.current = e.touches[0]?.clientX || 0; }} onTouchEnd={e => { const dx = (e.changedTouches[0]?.clientX || 0) - touch.current; if (Math.abs(dx) > 50) move(dx > 0 ? -1 : 1); }} />}<div className="flex items-center justify-between"><Button variant="outline" size="icon" aria-label="Foto anterior" onClick={() => move(-1)}><ArrowLeft aria-hidden /></Button><span className="text-sm text-muted-foreground">{index === null ? 0 : index+1} / {photos.length}</span><Button variant="outline" size="icon" aria-label="Próxima foto" onClick={() => move(1)}><ArrowRight aria-hidden /></Button></div></DialogContent></Dialog>
  </div>;
}