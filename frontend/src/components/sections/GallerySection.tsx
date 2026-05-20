import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, Expand } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/constants';
import { SectionHeader } from '../ui/Shared';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 relative bg-valo-dark/50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          number="06" 
          title="Sector Logs" 
          subtitle="Visual Archive" 
          icon={ImageIcon}
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer overflow-hidden clip-path-valo valo-border"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-valo-green/0 group-hover:bg-valo-green/10 transition-colors" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-valo-bg/80 p-2 text-valo-green backdrop-blur-md">
                <Expand size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-valo-bg/98 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-valo-green transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain clip-path-valo valo-border"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
