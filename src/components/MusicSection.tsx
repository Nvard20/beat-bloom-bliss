import { Music2, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const musicTracks = [
  {
    title: "Summer Vibes Mix",
    platform: "soundcloud",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/238150088&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  {
    title: "Deep House Sessions",
    platform: "spotify",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator",
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music2 className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Tracks
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Listen to our latest mixes and sets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {musicTracks.map((track, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Play className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{track.title}</h3>
              </div>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.embedUrl}
                  className="w-full"
                ></iframe>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
