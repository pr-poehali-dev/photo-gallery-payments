import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const photos = [
  {
    id: 1,
    url: 'https://storage.imgbly.com/imgbly/9H2fwivq4l.jpg',
    title: 'Photo 1',
    price: 149
  },
  {
    id: 2,
    url: 'https://storage.imgbly.com/imgbly/Gukeh9sUZP.jpg',
    title: 'Photo 2',
    price: 199
  },
  {
    id: 3,
    url: 'https://storage.imgbly.com/imgbly/sTyjabUdnu.jpg',
    title: 'Photo 3',
    price: 179
  },
  {
    id: 4,
    url: 'https://storage.imgbly.com/imgbly/2TF1h0wTXx.jpg',
    title: 'Photo 4',
    price: 159
  },
  {
    id: 5,
    url: 'https://storage.imgbly.com/imgbly/orNyXFLUZQ.jpg',
    title: 'Photo 5',
    price: 189
  },
  {
    id: 6,
    url: 'https://storage.imgbly.com/imgbly/1DlPW9duDu.jpg',
    title: 'Photo 6',
    price: 169
  }
];

export default function Index() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleBuyClick = () => {
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="py-12 px-4 text-center border-b border-border/50">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
          AHLCONTENT
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Over 1000+ Ashley files available on Mega link.
        </p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in hover-scale cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Purchase?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose your preferred payment method
          </p>
          <div className="space-y-4">
            <Button
              className="w-full h-16 bg-[#0070ba] hover:bg-[#003087] text-white font-semibold text-lg transition-all hover-scale"
              onClick={handleBuyClick}
            >
              <Icon name="CreditCard" size={24} className="mr-3" />
              Pay with PayPal
            </Button>

            <Button
              className="w-full h-16 bg-[#f7931a] hover:bg-[#e68317] text-white font-semibold text-lg transition-all hover-scale"
              onClick={handleBuyClick}
            >
              <Icon name="Bitcoin" size={24} className="mr-3" />
              Pay with Bitcoin
            </Button>

            <Button
              className="w-full h-16 bg-[#627eea] hover:bg-[#4a5bb8] text-white font-semibold text-lg transition-all hover-scale"
              onClick={handleBuyClick}
            >
              <Icon name="Wallet" size={24} className="mr-3" />
              Pay with Ethereum
            </Button>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedPhoto && !showPayment} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl bg-card">
          {selectedPhoto && (
            <>
              <div className="space-y-6">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full rounded-lg shadow-xl animate-scale-in"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-muted-foreground">
              Please contact us to complete your purchase. We'll guide you through the payment process.
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setShowPayment(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="py-8 px-4 text-center border-t border-border/50 mt-20">
        <p className="text-sm text-muted-foreground">
          © 2024 AHLCONTENT. All content is original.
        </p>
      </footer>
    </div>
  );
}