import { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import video1 from '@/assets/modal-video-1.mp4.asset.json';
import video2 from '@/assets/modal-video-2.mp4.asset.json';
import video3 from '@/assets/modal-video-3.mp4.asset.json';
import poster1 from '@/assets/project-video-1.webp.asset.json';
import poster2 from '@/assets/project-video-2.webp.asset.json';
import poster3 from '@/assets/project-video-3.webp.asset.json';
const videos = [{ video: video1.url, poster: poster1.url }, { video: video2.url, poster: poster2.url }, { video: video3.url, poster: poster3.url }];
function Video({ video, poster, index }: { video: string; poster: string; index: number }) {
  const [ready, setReady] = useState(false);
  return <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-foreground">{ready ? <video src={video} poster={poster} controls playsInline autoPlay preload="none" className="h-full w-full object-cover" aria-label={`Projeto entregue ${index}`} /> : <><img src={poster} alt={`Projeto entregue pela Modal Esquadrias, vídeo ${index}`} width={600} height={1067} loading="lazy" className="h-full w-full object-cover" /><Button size="icon" aria-label={`Reproduzir vídeo ${index}`} onClick={() => setReady(true)} className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/90 text-primary-foreground"><Play aria-hidden /></Button></>}</div>;
}
export function ProjectVideos() {
  return <div className="mt-16"><h3 className="text-2xl font-bold">Veja alguns de nossos melhores projetos!</h3><div className="mt-8 grid gap-6 sm:grid-cols-3">{videos.map((v,i) => <Video key={v.video} {...v} index={i+1} />)}</div></div>;
}