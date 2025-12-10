# Eleven Experience Shopify Theme

A modern, responsive Shopify theme built with the Elements theme, Liquid templating, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with desktop optimization
- **Modern UI/UX** - Clean, intuitive user interface
- **Performance Optimized** - Fast loading times and smooth interactions
- **Customizable Sections** - Modular section-based architecture
- **Multi-language Support** - Built-in internationalization
- **SEO Optimized** - Search engine friendly structure

## 📁 Project Structure

```
eleven-experience/
├── assets/          # CSS, JavaScript, and image files
├── config/          # Theme settings and configuration
├── layout/          # Main layout templates
├── locales/         # Translation files
├── sections/        # Reusable section templates
├── snippets/        # Reusable code snippets
├── templates/       # Page templates
│   ├── index.json   # Homepage (uses collection structure)
│   ├── collection.json  # Collection pages
│   ├── product.json # Product pages
│   └── _archive/    # Archived unused templates
├── README.md        # This file
└── .gitignore       # Git ignores
```

## 🎯 Simplified Theme Structure

This theme has been streamlined for a minimal product catalog:

- **Homepage** (`index.json`) - Uses the main-collection section to display all products
- **Collection Pages** (`collection.json`) - Standard collection/product listing pages
- **Product Pages** (`product.json`) - Individual product detail pages

**Note:** Search functionality has been disabled. To re-enable, go to Theme Customizer → Header → Enable search. The search template has been archived in `templates/_archive/`.

## 🛠️ Development Setup

### Prerequisites

- [Shopify CLI](https://shopify.dev/themes/tools/cli) (recommended)
- [Node.js](https://nodejs.org/) (for build tools if needed)
- A Shopify store (development or production)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/BLKDG/eleven-experience.git
   cd eleven-experience
   ```

2. **Install Shopify CLI** (if not already installed)
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

3. **Login to Shopify**
   ```bash
   shopify auth login
   ```

4. **Start development server**
   ```bash
   shopify theme dev
   ```

5. **Open your store** in the browser (URL will be provided by CLI)

### Alternative: Manual Upload

If you prefer manual development:
1. Make changes to your local files
2. Zip the theme folder
3. Upload via Shopify Admin → Online Store → Themes → Upload theme

## 🔧 Development Workflow

### Making Changes

1. **Create a new branch** for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** to theme files

3. **Test locally** using Shopify CLI or preview in admin

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

5. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

### File Naming Conventions

- **Sections**: `section-name.liquid`
- **Snippets**: `snippet-name.liquid`
- **Assets**: `component-name.css` or `component-name.js`
- **Templates**: `template-name.json` or `template-name.liquid`

## 📚 Key Technologies

- **Liquid** - Shopify's templating language
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Shopify Sections** - Modular content management
- **Shopify Blocks** - Customizable content areas

## 🎨 Customization

### Theme Settings

Most customization options are available through the theme customizer:
1. Go to Shopify Admin → Online Store → Themes
2. Click "Customize" on your active theme
3. Use the sidebar to modify colors, fonts, layouts, etc.

### Code Customization

For advanced customization, edit the theme files directly:
- **Colors**: Modify CSS custom properties in `assets/theme.css`
- **Typography**: Update font settings in theme settings
- **Layouts**: Customize section templates in `sections/`
- **Functionality**: Add JavaScript in `assets/` files

## 🚀 Deployment

### Production Store

1. **Create a production build**
```bash

shopify theme push
```

2. **Or manually upload** via Shopify Admin

## 📖 Documentation

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Template Language](https://shopify.dev/docs/api/liquid)
- [Shopify Sections](https://shopify.dev/docs/themes/architecture/sections)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🆘 Support

For support and questions:
- Create an issue on clickUp
- Contact the development team
- Check Shopify's official documentation

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality

---

**Built with ❤️ by the BLKDG team**

