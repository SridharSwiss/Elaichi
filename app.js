// Elaichi Food Ordering App — WEF Davos 2027 Edition

const WEF_MODE = true;
const WEF_YEAR = 2027;
const WEF_DATES = 'January 19–23, 2027';

const MENU_DATA = [
  // Starters
  { id: 1, category: 'starters', name: 'Paneer Tikka', price: 21.75, desc: 'Marinated cottage cheese grilled in tandoor with peppers & onions', veg: true, spice: 2, popular: true, emoji: '🧀' },
  { id: 2, category: 'starters', name: 'Chicken Tikka', price: 23.85, desc: 'Tender chicken marinated in yoghurt & spices, char-grilled to perfection', veg: false, spice: 2, popular: true, emoji: '🍗' },
  { id: 3, category: 'starters', name: 'Samosa (2 pcs)', price: 12.75, desc: 'Crispy pastry filled with spiced potatoes & peas, served with chutneys', veg: true, spice: 1, popular: true, emoji: '🥟' },
  { id: 4, category: 'starters', name: 'Seekh Kebab', price: 24.75, desc: 'Minced lamb with herbs & spices, skewered and grilled over charcoal', veg: false, spice: 2, popular: false, emoji: '🍢' },
  { id: 5, category: 'starters', name: 'Aloo Tikki', price: 14.25, desc: 'Crispy potato patties with chaat masala, tamarind & mint chutney', veg: true, spice: 1, popular: false, emoji: '🥔' },
  { id: 6, category: 'starters', name: 'Prawn Koliwada', price: 28.35, desc: 'Coastal-style crispy prawns tossed with kokum & coastal spices', veg: false, spice: 3, popular: false, emoji: '🦐' },

  // Mains
  { id: 7, category: 'mains', name: 'Butter Chicken', price: 33.75, desc: 'Succulent chicken in velvety tomato-cream sauce with aromatic spices', veg: false, spice: 1, popular: true, emoji: '🍛' },
  { id: 8, category: 'mains', name: 'Palak Paneer', price: 29.25, desc: 'Fresh cottage cheese cubes in a smooth, spiced spinach gravy', veg: true, spice: 1, popular: true, emoji: '🥬' },
  { id: 9, category: 'mains', name: 'Dal Makhani', price: 26.25, desc: 'Black lentils slow-cooked overnight with butter & cream', veg: true, spice: 1, popular: true, emoji: '🫘' },
  { id: 10, category: 'mains', name: 'Lamb Rogan Josh', price: 39.75, desc: 'Kashmiri slow-braised lamb with whole spices & Kashmiri chillies', veg: false, spice: 3, popular: false, emoji: '🍖' },
  { id: 11, category: 'mains', name: 'Chicken Vindaloo', price: 35.25, desc: 'Fiery Goan curry with vinegar-marinated chicken & hot chillies', veg: false, spice: 4, popular: false, emoji: '🌶️' },
  { id: 12, category: 'mains', name: 'Chana Masala', price: 27.75, desc: 'Hearty chickpeas in tangy tomato-onion gravy with Punjab spices', veg: true, spice: 2, popular: false, emoji: '🫛' },
  { id: 13, category: 'mains', name: 'Prawn Masala', price: 41.25, desc: 'Tiger prawns in rich coastal masala with coconut & curry leaves', veg: false, spice: 2, popular: false, emoji: '🍤' },
  { id: 14, category: 'mains', name: 'Paneer Makhani', price: 30.75, desc: 'Silky paneer in the same luxurious makhani sauce as butter chicken', veg: true, spice: 1, popular: false, emoji: '🧀' },

  // Biryani
  { id: 15, category: 'biryani', name: 'Chicken Biryani', price: 36.75, desc: 'Fragrant basmati layered with spiced chicken, fried onions & saffron', veg: false, spice: 2, popular: true, emoji: '🍚' },
  { id: 16, category: 'biryani', name: 'Lamb Biryani', price: 41.25, desc: 'Tender lamb pieces with aged basmati, whole spices & rose water', veg: false, spice: 2, popular: false, emoji: '🍚' },
  { id: 17, category: 'biryani', name: 'Vegetable Biryani', price: 30.75, desc: 'Seasonal vegetables with saffron basmati, nuts & dried fruits', veg: true, spice: 1, popular: false, emoji: '🌾' },
  { id: 18, category: 'biryani', name: 'Prawn Biryani', price: 42.75, desc: 'Coastal-style biryani with spiced tiger prawns & coconut milk', veg: false, spice: 2, popular: false, emoji: '🍤' },

  // Breads
  { id: 19, category: 'breads', name: 'Garlic Naan', price: 6.75, desc: 'Fluffy tandoor-baked flatbread with butter & fresh garlic', veg: true, spice: 0, popular: true, emoji: '🫓' },
  { id: 20, category: 'breads', name: 'Plain Naan', price: 5.25, desc: 'Classic soft tandoor naan, perfect for scooping curries', veg: true, spice: 0, popular: false, emoji: '🫓' },
  { id: 21, category: 'breads', name: 'Peshwari Naan', price: 7.50, desc: 'Sweet naan stuffed with almonds, coconut & sultanas', veg: true, spice: 0, popular: false, emoji: '🫓' },
  { id: 22, category: 'breads', name: 'Paratha', price: 6.00, desc: 'Layered whole wheat bread, pan-fried with ghee', veg: true, spice: 0, popular: false, emoji: '🫓' },
  { id: 23, category: 'breads', name: 'Puri (2 pcs)', price: 6.75, desc: 'Deep-fried puffed bread, light and hollow', veg: true, spice: 0, popular: false, emoji: '🫓' },

  // Desserts
  { id: 24, category: 'desserts', name: 'Gulab Jamun', price: 11.25, desc: 'Soft milk-solid dumplings soaked in rose & cardamom syrup', veg: true, spice: 0, popular: true, emoji: '🍮' },
  { id: 25, category: 'desserts', name: 'Mango Kulfi', price: 12.75, desc: 'Dense Indian ice cream with real Alphonso mango', veg: true, spice: 0, popular: true, emoji: '🥭' },
  { id: 26, category: 'desserts', name: 'Kheer', price: 10.50, desc: 'Creamy rice pudding with cardamom, saffron & pistachios', veg: true, spice: 0, popular: false, emoji: '🍚' },
  { id: 27, category: 'desserts', name: 'Rasmalai', price: 12.00, desc: 'Soft paneer discs in sweetened saffron-cardamom cream', veg: true, spice: 0, popular: false, emoji: '🍬' },

  // Drinks
  { id: 28, category: 'drinks', name: 'Mango Lassi', price: 9.75, desc: 'Chilled yoghurt drink blended with sweet Alphonso mango', veg: true, spice: 0, popular: true, emoji: '🥭' },
  { id: 29, category: 'drinks', name: 'Rose Lassi', price: 9.00, desc: 'Sweet yoghurt drink with rose water & a touch of cardamom', veg: true, spice: 0, popular: false, emoji: '🌹' },
  { id: 30, category: 'drinks', name: 'Masala Chai', price: 6.75, desc: 'Spiced Indian tea brewed with ginger, cardamom & cinnamon', veg: true, spice: 1, popular: true, emoji: '🍵' },
  { id: 31, category: 'drinks', name: 'Fresh Lime Soda', price: 6.00, desc: 'Sparkling water with fresh lime, mint & a pinch of black salt', veg: true, spice: 0, popular: false, emoji: '🍋' },
  { id: 32, category: 'drinks', name: 'Kingfisher Beer', price: 11.25, desc: 'India\'s most celebrated lager, crisp and refreshing', veg: true, spice: 0, popular: false, emoji: '🍺' },
];

const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '🍽️' },
  { id: 'starters', label: 'Starters', emoji: '🥗' },
  { id: 'mains', label: 'Mains', emoji: '🍛' },
  { id: 'biryani', label: 'Biryani', emoji: '🍚' },
  { id: 'breads', label: 'Breads', emoji: '🫓' },
  { id: 'desserts', label: 'Desserts', emoji: '🍮' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
];

const DELIVERY_FEE = 0; // Complimentary for WEF delegates
const FREE_DELIVERY_THRESHOLD = 0; // Always free
const MIN_ORDER = 250; // WEF minimum order

// Cart operations
function getCart() {
  try { return JSON.parse(localStorage.getItem('elaichi_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('elaichi_cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(itemId, qty = 1) {
  const cart = getCart();
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;
  const existing = cart.find(c => c.id === itemId);
  if (existing) { existing.qty += qty; } else { cart.push({ id: itemId, qty }); }
  saveCart(cart);
  showToast(`${item.name} added to order`);
}
function removeFromCart(itemId) { saveCart(getCart().filter(c => c.id !== itemId)); }
function updateQty(itemId, qty) {
  const cart = getCart();
  const item = cart.find(c => c.id === itemId);
  if (item) { if (qty <= 0) return removeFromCart(itemId); item.qty = qty; saveCart(cart); }
}
function clearCart() { localStorage.removeItem('elaichi_cart'); updateCartBadge(); }
function getCartCount() { return getCart().reduce((sum, c) => sum + c.qty, 0); }
function getCartTotal() {
  return getCart().reduce((sum, c) => {
    const item = MENU_DATA.find(i => i.id === c.id);
    return sum + (item ? item.price * c.qty : 0);
  }, 0);
}
function getDeliveryFee() { return 0; } // Complimentary delivery

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
}

function saveOrder(order) { const orders = getOrders(); orders.unshift(order); localStorage.setItem('elaichi_orders', JSON.stringify(orders)); }
function getOrders() { try { return JSON.parse(localStorage.getItem('elaichi_orders') || '[]'); } catch { return []; } }
function getOrder(orderId) { return getOrders().find(o => o.id === orderId); }
function generateOrderId() { return 'EL' + Date.now().toString(36).toUpperCase(); }

function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; document.body.appendChild(toast); }
  toast.className = `toast toast-${type} show`;
  toast.textContent = msg;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}
function formatPrice(p) { return 'CHF ' + p.toFixed(2); }

document.addEventListener('DOMContentLoaded', () => { updateCartBadge(); });


const MENU_DATA = [
  // Starters
  { id: 1, category: 'starters', name: 'Paneer Tikka', price: 14.50, desc: 'Marinated cottage cheese grilled in tandoor with peppers & onions', veg: true, spice: 2, popular: true, emoji: '🧀' },
  { id: 2, category: 'starters', name: 'Chicken Tikka', price: 15.90, desc: 'Tender chicken marinated in yoghurt & spices, char-grilled to perfection', veg: false, spice: 2, popular: true, emoji: '🍗' },
  { id: 3, category: 'starters', name: 'Samosa (2 pcs)', price: 8.50, desc: 'Crispy pastry filled with spiced potatoes & peas, served with chutneys', veg: true, spice: 1, popular: true, emoji: '🥟' },
  { id: 4, category: 'starters', name: 'Seekh Kebab', price: 16.50, desc: 'Minced lamb with herbs & spices, skewered and grilled over charcoal', veg: false, spice: 2, popular: false, emoji: '🍢' },
  { id: 5, category: 'starters', name: 'Aloo Tikki', price: 9.50, desc: 'Crispy potato patties with chaat masala, tamarind & mint chutney', veg: true, spice: 1, popular: false, emoji: '🥔' },
  { id: 6, category: 'starters', name: 'Prawn Koliwada', price: 18.90, desc: 'Coastal-style crispy prawns tossed with kokum & coastal spices', veg: false, spice: 3, popular: false, emoji: '🦐' },

  // Mains
  { id: 7, category: 'mains', name: 'Butter Chicken', price: 22.50, desc: 'Succulent chicken in velvety tomato-cream sauce with aromatic spices', veg: false, spice: 1, popular: true, emoji: '🍛' },
  { id: 8, category: 'mains', name: 'Palak Paneer', price: 19.50, desc: 'Fresh cottage cheese cubes in a smooth, spiced spinach gravy', veg: true, spice: 1, popular: true, emoji: '🥬' },
  { id: 9, category: 'mains', name: 'Dal Makhani', price: 17.50, desc: 'Black lentils slow-cooked overnight with butter & cream', veg: true, spice: 1, popular: true, emoji: '🫘' },
  { id: 10, category: 'mains', name: 'Lamb Rogan Josh', price: 26.50, desc: 'Kashmiri slow-braised lamb with whole spices & Kashmiri chillies', veg: false, spice: 3, popular: false, emoji: '🍖' },
  { id: 11, category: 'mains', name: 'Chicken Vindaloo', price: 23.50, desc: 'Fiery Goan curry with vinegar-marinated chicken & hot chillies', veg: false, spice: 4, popular: false, emoji: '🌶️' },
  { id: 12, category: 'mains', name: 'Chana Masala', price: 18.50, desc: 'Hearty chickpeas in tangy tomato-onion gravy with Punjab spices', veg: true, spice: 2, popular: false, emoji: '🫛' },
  { id: 13, category: 'mains', name: 'Prawn Masala', price: 27.50, desc: 'Tiger prawns in rich coastal masala with coconut & curry leaves', veg: false, spice: 2, popular: false, emoji: '🍤' },
  { id: 14, category: 'mains', name: 'Paneer Makhani', price: 20.50, desc: 'Silky paneer in the same luxurious makhani sauce as butter chicken', veg: true, spice: 1, popular: false, emoji: '🧀' },

  // Biryani
  { id: 15, category: 'biryani', name: 'Chicken Biryani', price: 24.50, desc: 'Fragrant basmati layered with spiced chicken, fried onions & saffron', veg: false, spice: 2, popular: true, emoji: '🍚' },
  { id: 16, category: 'biryani', name: 'Lamb Biryani', price: 27.50, desc: 'Tender lamb pieces with aged basmati, whole spices & rose water', veg: false, spice: 2, popular: false, emoji: '🍚' },
  { id: 17, category: 'biryani', name: 'Vegetable Biryani', price: 20.50, desc: 'Seasonal vegetables with saffron basmati, nuts & dried fruits', veg: true, spice: 1, popular: false, emoji: '🌾' },
  { id: 18, category: 'biryani', name: 'Prawn Biryani', price: 28.50, desc: 'Coastal-style biryani with spiced tiger prawns & coconut milk', veg: false, spice: 2, popular: false, emoji: '🍤' },

  // Breads
  { id: 19, category: 'breads', name: 'Garlic Naan', price: 4.50, desc: 'Fluffy tandoor-baked flatbread with butter & fresh garlic', veg: true, spice: 0, popular: true, emoji: '🫓' },
  { id: 20, category: 'breads', name: 'Plain Naan', price: 3.50, desc: 'Classic soft tandoor naan, perfect for scooping curries', veg: true, spice: 0, popular: false, emoji: '🫓' },
  { id: 21, category: 'breads', name: 'Peshwari Naan', price: 5.00, desc: 'Sweet naan stuffed with almonds, coconut & sultanas', veg: true, spice: 0, popular: false, emoji: '🫓' },
  { id: 22, category: 'breads', name: 'Paratha', price: 4.00, desc: 'Layered whole wheat bread, pan-fried with ghee', veg: true, spice: 0, popular: false, emoji: '🫓' },
  { id: 23, category: 'breads', name: 'Puri (2 pcs)', price: 4.50, desc: 'Deep-fried puffed bread, light and hollow', veg: true, spice: 0, popular: false, emoji: '🫓' },

  // Desserts
  { id: 24, category: 'desserts', name: 'Gulab Jamun', price: 7.50, desc: 'Soft milk-solid dumplings soaked in rose & cardamom syrup', veg: true, spice: 0, popular: true, emoji: '🍮' },
  { id: 25, category: 'desserts', name: 'Mango Kulfi', price: 8.50, desc: 'Dense Indian ice cream with real Alphonso mango', veg: true, spice: 0, popular: true, emoji: '🥭' },
  { id: 26, category: 'desserts', name: 'Kheer', price: 7.00, desc: 'Creamy rice pudding with cardamom, saffron & pistachios', veg: true, spice: 0, popular: false, emoji: '🍚' },
  { id: 27, category: 'desserts', name: 'Rasmalai', price: 8.00, desc: 'Soft paneer discs in sweetened saffron-cardamom cream', veg: true, spice: 0, popular: false, emoji: '🍬' },

  // Drinks
  { id: 28, category: 'drinks', name: 'Mango Lassi', price: 6.50, desc: 'Chilled yoghurt drink blended with sweet Alphonso mango', veg: true, spice: 0, popular: true, emoji: '🥭' },
  { id: 29, category: 'drinks', name: 'Rose Lassi', price: 6.00, desc: 'Sweet yoghurt drink with rose water & a touch of cardamom', veg: true, spice: 0, popular: false, emoji: '🌹' },
  { id: 30, category: 'drinks', name: 'Masala Chai', price: 4.50, desc: 'Spiced Indian tea brewed with ginger, cardamom & cinnamon', veg: true, spice: 1, popular: true, emoji: '🍵' },
  { id: 31, category: 'drinks', name: 'Fresh Lime Soda', price: 4.00, desc: 'Sparkling water with fresh lime, mint & a pinch of black salt', veg: true, spice: 0, popular: false, emoji: '🍋' },
  { id: 32, category: 'drinks', name: 'Kingfisher Beer', price: 7.50, desc: 'India\'s most celebrated lager, crisp and refreshing', veg: true, spice: 0, popular: false, emoji: '🍺' },
];

const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '🍽️' },
  { id: 'starters', label: 'Starters', emoji: '🥗' },
  { id: 'mains', label: 'Mains', emoji: '🍛' },
  { id: 'biryani', label: 'Biryani', emoji: '🍚' },
  { id: 'breads', label: 'Breads', emoji: '🫓' },
  { id: 'desserts', label: 'Desserts', emoji: '🍮' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
];

const DELIVERY_FEE = 3.90;
const FREE_DELIVERY_THRESHOLD = 40;
const MIN_ORDER = 15;

// Cart operations
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('elaichi_cart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('elaichi_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(itemId, qty = 1) {
  const cart = getCart();
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: itemId, qty });
  }
  saveCart(cart);
  showToast(`${item.name} added to cart`);
}

function removeFromCart(itemId) {
  const cart = getCart().filter(c => c.id !== itemId);
  saveCart(cart);
}

function updateQty(itemId, qty) {
  const cart = getCart();
  const item = cart.find(c => c.id === itemId);
  if (item) {
    if (qty <= 0) return removeFromCart(itemId);
    item.qty = qty;
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem('elaichi_cart');
  updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((sum, c) => sum + c.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, c) => {
    const item = MENU_DATA.find(i => i.id === c.id);
    return sum + (item ? item.price * c.qty : 0);
  }, 0);
}

function getDeliveryFee(subtotal) {
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Order operations
function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('elaichi_orders', JSON.stringify(orders));
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem('elaichi_orders') || '[]');
  } catch { return []; }
}

function getOrder(orderId) {
  return getOrders().find(o => o.id === orderId);
}

function generateOrderId() {
  return 'EL' + Date.now().toString(36).toUpperCase();
}

// UI helpers
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast toast-${type} show`;
  toast.textContent = msg;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function formatPrice(p) {
  return 'CHF ' + p.toFixed(2);
}

function spiceLabel(level) {
  const labels = ['', 'Mild', 'Medium', 'Hot', 'Very Hot'];
  const icons = ['', '🌶️', '🌶️🌶️', '🌶️🌶️🌶️', '🌶️🌶️🌶️🌶️'];
  return level > 0 ? `<span class="spice-badge">${icons[level]} ${labels[level]}</span>` : '';
}

// Init on every page
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});
