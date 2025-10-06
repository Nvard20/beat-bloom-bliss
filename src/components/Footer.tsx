import { Instagram, Twitter, Facebook, Youtube, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
  ];

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = "Check out PULSE - Amazing DJ and Music Events!";
    
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        // Web Share API fallback
        if (navigator.share) {
          try {
            await navigator.share({ title: "PULSE Music", text, url });
            toast({ title: "Shared successfully!" });
            return;
          } catch (err) {
            console.error("Share failed:", err);
          }
        }
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              PULSE
            </h3>
            <p className="text-muted-foreground">
              Bringing the best electronic music experiences to life.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open(social.url, "_blank")}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Share */}
          <div>
            <h4 className="font-semibold mb-4">Share This Page</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
                className="hover:border-primary/50"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
                className="hover:border-primary/50"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("share")}
                className="hover:border-primary/50"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 PULSE Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
