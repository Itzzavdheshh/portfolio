import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Tablet, Smartphone, RotateCw, ExternalLink, ShieldAlert } from 'lucide-react';

interface BrowserFrameProps {
  url: string;
  title: string;
  fallbackImage?: string;
  iframeBlockedByDefault?: boolean;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url,
  title,
  fallbackImage,
  iframeBlockedByDefault = false
}) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(iframeBlockedByDefault);
  const [iframeKey, setIframeKey] = useState(0);
  const hostname = new URL(url).hostname;
  
  // Auto-fetch favicon using a Google/Horse service
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
  const screenshotUrl = fallbackImage || `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&waitUntil=networkidle0&waitForTimeout=500`;

  useEffect(() => {
    setIsLoading(true);
    setUseFallback(iframeBlockedByDefault);
  }, [url, iframeBlockedByDefault]);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  // Dimensions based on viewport selected
  const getViewportWidth = () => {
    switch (viewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      case 'desktop': 
      default:
        return '100%';
    }
  };

  const getViewportHeight = () => {
    switch (viewMode) {
      case 'mobile': return '550px';
      case 'tablet': return '650px';
      case 'desktop':
      default:
        return '500px';
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-6">
      {/* Viewport Toggles & Controls */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl px-4 py-2 mb-3 bg-[#16161a] rounded-xl border border-[#2d2d34] gap-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('desktop')}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'desktop' ? 'bg-[#D7E2EA] text-[#0C0C0C]' : 'text-[#D7E2EA]/60 hover:text-white'
            }`}
            title="Desktop View"
          >
            <Laptop size={18} />
          </button>
          <button
            onClick={() => setViewMode('tablet')}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'tablet' ? 'bg-[#D7E2EA] text-[#0C0C0C]' : 'text-[#D7E2EA]/60 hover:text-white'
            }`}
            title="Tablet View"
          >
            <Tablet size={18} />
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'mobile' ? 'bg-[#D7E2EA] text-[#0C0C0C]' : 'text-[#D7E2EA]/60 hover:text-white'
            }`}
            title="Mobile View"
          >
            <Smartphone size={18} />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-4 bg-[#0c0c0e] border border-[#26262b] px-3 py-1.5 rounded-lg flex items-center justify-between text-xs text-[#D7E2EA]/50 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-2 overflow-hidden">
            <img 
              src={faviconUrl} 
              alt="" 
              className="w-4 h-4 rounded-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';
              }}
            />
            <span className="truncate text-[#D7E2EA]/80 font-mono">{hostname}</span>
          </div>
          <button 
            onClick={handleRefresh} 
            className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] cursor-pointer"
            title="Reload Preview"
          >
            <RotateCw size={12} className={isLoading ? 'animate-spin' : ''} />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* Toggle Blocked State manually if iframe doesn't load */}
          <button
            onClick={() => setUseFallback(!useFallback)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              useFallback 
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' 
                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/20'
            }`}
          >
            {useFallback ? 'Using Static Preview' : 'Interactive Iframe'}
          </button>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#25262c] text-xs text-[#D7E2EA] border border-[#303138] hover:bg-[#34353d] transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Browser Container */}
      <motion.div
        layout
        style={{ width: getViewportWidth() }}
        className="w-full max-w-5xl bg-[#16161a] rounded-2xl border border-[#2d2d34] overflow-hidden shadow-2xl relative"
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      >
        {/* Browser Top Header */}
        <div className="w-full h-10 bg-[#1e1e24] border-b border-[#2d2d34] flex items-center px-4 justify-between select-none">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-[#D7E2EA]/60 font-medium truncate max-w-xs">{title}</div>
          <div className="w-16" /> {/* Balance spacer */}
        </div>

        {/* Content Area */}
        <div 
          className="w-full bg-[#0C0C0C] relative overflow-hidden flex items-center justify-center transition-all duration-300"
          style={{ height: getViewportHeight() }}
        >
          {/* Loading Spinner overlay */}
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0C0C0C] z-30 flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full border-4 border-[#D7E2EA]/10 border-t-[#D7E2EA] animate-spin" />
                <p className="text-[#D7E2EA]/60 text-sm animate-pulse font-light uppercase tracking-widest">
                  Loading Live Preview...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Iframe View */}
          {!useFallback ? (
            <iframe
              key={iframeKey}
              src={url}
              title={title}
              className="w-full h-full border-none z-10"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setUseFallback(true);
                setIsLoading(false);
              }}
            />
          ) : (
            /* Screenshot Fallback View */
            <div className="w-full h-full relative z-10 bg-[#0C0C0C]">
              <img
                src={screenshotUrl}
                alt={title}
                className="w-full h-full object-cover object-top"
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                  // If fallback image fails, show placeholder design
                  setIsLoading(false);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* If thum.io fails or iframe is blocked, show custom mockup CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 flex flex-col items-center justify-center text-center p-6 z-20">
                <ShieldAlert size={48} className="text-amber-500 mb-4 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                  Iframe Embedding Restricted
                </h3>
                <p className="text-sm text-[#D7E2EA]/80 max-w-md mb-6 font-light">
                  To protect security, this website blocks embedded viewing. Click below to experience the full interactive design directly in a new window.
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#D7E2EA] text-[#0C0C0C] rounded-full uppercase tracking-wider font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
