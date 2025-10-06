import { Instagram, Twitter, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dj1 from "@/assets/dj-1.jpg";
import dj2 from "@/assets/dj-2.jpg";

const djs = [
  {
    name: "DJ NEXUS",
    image: dj1,
    bio: "Specializing in progressive house and techno, DJ Nexus brings high-energy beats that keep the crowd moving all night long.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    name: "LUNA BEATS",
    image: dj2,
    bio: "Known for her eclectic mix of deep house and melodic techno, Luna creates unforgettable atmospheric experiences on the dance floor.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
];

const DJSection = () => {
  return (
    <section id="djs" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Meet Our DJs
          </h2>
          <p className="text-muted-foreground text-lg">
            The artists behind the music
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {djs.map((dj, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-secondary/50 transition-all duration-500 group hover:shadow-[var(--glow-secondary)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={dj.image}
                  alt={dj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-foreground">
                  {dj.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">{dj.bio}</p>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10"
                    onClick={() => window.open(dj.socials.instagram, "_blank")}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10"
                    onClick={() => window.open(dj.socials.twitter, "_blank")}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10"
                    onClick={() => window.open(dj.socials.facebook, "_blank")}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJSection;
