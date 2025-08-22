# NextMart - E-Commerce Platform

NextMart is a modern, full-stack e-commerce platform built with Next.js 15, featuring user authentication, product management, and a responsive dashboard.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with dark/light mode support
- **User Authentication**: Secure login with NextAuth.js (Google OAuth & Credentials)
- **Product Management**: Add, view, and manage products with detailed specifications
- **Dashboard**: Admin dashboard for managing products and viewing analytics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Notifications**: SweetAlert2

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rafiqmia65/next-mart.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
DB_NAME=database-name
NEXT_PUBLIC_MONGODB_URI=database-url
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── add-product/
│   │   │   └── page.js    # Add product form
│   │   ├── layout.js      # Dashboard layout
│   │   └── page.js        # Dashboard homepage
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── products/      # Product management endpoints
│   ├── products/          # Public product pages
│   │   └── [id]/         # Dynamic product detail pages
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── layout.js          # Root layout
│   └── page.js            # Homepage
├── components/            # Reusable components
│   ├── DashboardLayout.js # Dashboard layout component
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   ├── Hero.js            # Hero section component
│   ├── ProductHighlights.js # Product showcase component
│   └── GoogleAuth.js      # Google authentication component
├── lib/                   # Utility libraries
│   ├── authOptions.js     # NextAuth configuration
│   └── dbConnect.js       # Database connection utility
└── providers/             # Context providers
    └── NextAuthProvider.js # NextAuth provider
```

## 🛠️ Usage

### For Customers:

1. Browse products on the homepage
2. View product details by clicking on any product
3. Register or login to access additional features
4. Explore product categories and search for items

### For Administrators:

1. Login to access the dashboard
2. Add new products with the "Add Product" form
3. Manage existing products
4. View sales analytics and statistics

## 🔐 Authentication

NextMart supports two authentication methods:

1. **Credentials**: Email and password authentication
2. **Google OAuth**: Sign in with Google account

## 🎨 Customization

- Modify colors and styling in `src/app/globals.css`
- Update the component styles using Tailwind CSS classes
- Customize the dashboard layout in `src/components/DashboardLayout.js`
- Add new product fields in the add-product form

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🚀 Deployment

### Vercel (Recommended):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms:

1. Build the application: `npm run build`
2. Start production server: `npm start`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

If you have any questions or issues, please open an issue on GitHub or contact us at support@nextmart.com.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the reliable database solution
- Vercel for seamless deployment

---

**NextMart** - Revolutionizing online shopping experiences with modern technology.
