# Unmappr - Coming Soon Page

A modern, responsive coming soon landing page for Unmappr - a travel platform that helps users discover hidden gems, authentic experiences, and transformative connections.

## ✨ Features

- **Fully Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, elegant design with smooth animations
- **Email Collection** - Functional signup form with validation
- **Fixed Logo Stretching** - Proper aspect ratio handling for SVG logos
- **Accessibility** - ARIA labels, keyboard navigation, and focus states
- **Performance Optimized** - Fast loading with minimal dependencies
- **Interactive Elements** - Hover effects, smooth scrolling, and form validation

## 🎨 Design Highlights

- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: Warm brown tones (#6B4E3D, #A67C52) with soft cream background
- **Animations**: Subtle fade-in effects and hover interactions
- **Mobile-First**: Designed for mobile with progressive enhancement

## 🚀 Quick Start

1. **Open the project**:
   ```bash
   cd coming-soon
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Or using Node.js
     npx serve
     ```

3. **Visit**: Open `http://localhost:8000` in your browser

## 📁 File Structure

```
coming-soon/
├── index.html          # Main HTML structure
├── styles.css          # All styles and responsive design
├── script.js           # Form validation and interactions
└── README.md           # Documentation
```

## 🔧 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-brown: #6B4E3D;
    --accent-brown: #A67C52;
    --bg-light: #F5F1ED;
    /* ... */
}
```

### Content
Update text in `index.html`:
- Hero title and description
- Feature cards
- Footer copyright

### Logo
The butterfly logo is an inline SVG that can be easily customized by modifying the `<path>` elements.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎯 Form Validation

The email signup form includes:
- Real-time validation
- Error messages
- Success notifications
- Loading states
- localStorage integration (demo)

### Integrating with Backend

Replace the `simulateAPICall` function in `script.js` with your actual API:

```javascript
async function submitEmail(email) {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    });
    
    if (!response.ok) {
        throw new Error('API Error');
    }
    
    return response.json();
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- No external dependencies (except Google Fonts)
- Optimized images (SVG format)
- Minimal JavaScript
- Fast load times

## 🔒 Security

- Input sanitization
- XSS prevention
- HTTPS recommended for production

## 📄 License

All rights reserved © 2025 Unmappr

## 🤝 Support

For questions or issues, contact: hello@unmappr.com

---

**Built with ❤️ for travelers seeking authentic experiences**
