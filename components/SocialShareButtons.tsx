'use client';

import { Twitter, Facebook, Copy } from 'lucide-react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

export function SocialShareButtons({ product }: { product: Product }) {
  const { toast } = useToast();
  const [productUrl, setProductUrl] = useState('');

  useEffect(() => {
    setProductUrl(window.location.href);
  }, []);

  if (!productUrl) {
    return null;
  }

  const text = `Check out this amazing product: ${product.name}!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(productUrl);
    toast({
      title: 'Copied to clipboard!',
      description: 'You can now share the link.',
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-medium text-muted-foreground">Share this product</p>
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon" aria-label="Share on Twitter">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(text)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" aria-label="Share on Facebook">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </Button>
        <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy link">
          <Copy />
        </Button>
      </div>
    </div>
  );
}
