import { useState, useEffect } from 'react';
import type { PageRoute, ProductItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // SEO Document Title updates
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'Arizona Occult | Dr. Preity Astrologer | Rudraksha & Gemstones',
      consultation: '1-on-1 Kundli & Astrology Consultation | Dr. Preity',
      rudraksha: '100% Lab Certified Nepali Rudraksha & Siddha Mala | Arizona Occult',
      gemstones: 'Natural Ceylon Pukhraj, Emerald & Navratna Gemstones | Arizona Occult',
      crystals: 'Healing Crystals & Pyrite Money Magnet Bracelets | Arizona Occult',
      'remedies-calculator': 'Zodiac & Rashi Remedies Calculator | Arizona Occult',
      contact: 'Contact Practice Location | Arizona Occult'
    };

    document.title = titles[activePage] || 'Arizona Occult | Dr. Preity Astrological Practice';
  }, [activePage]);

  // Cart operations
  const handleAddToCart = (product: ProductItem, selectedOption?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedOption }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={setActivePage}
            openConsultationModal={() => setIsConsultationOpen(true)}
            openQuickView={(prod) => setQuickViewProduct(prod)}
            onAddToCart={handleAddToCart}
            searchQuery={searchQuery}
          />
        );
      case 'consultation':
        return (
          <AboutPage
            openConsultationModal={() => setIsConsultationOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            openConsultationModal={() => setIsConsultationOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            openConsultationModal={() => setIsConsultationOpen(true)}
            openQuickView={(prod) => setQuickViewProduct(prod)}
            onAddToCart={handleAddToCart}
            searchQuery={searchQuery}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Header Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={totalCartCount}
        openCartDrawer={() => setIsCartOpen(true)}
        openConsultationModal={() => setIsConsultationOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        openConsultationModal={() => setIsConsultationOpen(true)}
      />

      {/* Shopping Bag Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}

export default App;
