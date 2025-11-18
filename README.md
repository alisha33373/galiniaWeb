# 🧘‍♀️ Meditation Web App

A modern, responsive meditation application built with React, TypeScript, and Vite. This app provides personalized guided meditations with secure authentication options.

## ✨ Features

### 🔐 Authentication
- **Email Login/Signup**: Secure email-based authentication
- **Google Login**: One-click authentication with Google accounts
- **Session Management**: Persistent login state with logout functionality

### 🧘‍♂️ Meditation Experience
- **Personalized Meditations**: Generate custom guided meditations based on user prompts
- **Interactive Interface**: Clean, calming UI with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Generation**: Dynamic meditation content creation with loading states

### 📄 Legal Pages
- **Privacy Policy**: Comprehensive privacy protection details
- **Terms & Conditions**: Clear terms of service and usage guidelines
- **GDPR Compliant**: Full transparency about data collection and usage

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meditation-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS-in-JS with responsive design
- **Icons**: Unicode emojis for cross-platform compatibility

## 📱 App Structure

```
src/
├── components/
│   └── Auth.tsx          # Authentication component
├── pages/
│   ├── Home.tsx          # Main meditation generator page
│   ├── PrivacyPolicy.tsx # Privacy policy page
│   └── Terms.tsx         # Terms & conditions page
├── App.tsx               # Main app component with routing
├── App.css               # App-specific styles
├── index.css             # Global styles
└── main.tsx              # App entry point
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Calming blues and purples (#3498db, #667eea, #764ba2)
- **Secondary**: Soft grays and whites for readability
- **Accent**: Green for success states (#27ae60)

### Responsive Breakpoints
- **Mobile**: < 768px (stacked layout, full-width inputs)
- **Tablet/Desktop**: ≥ 768px (side-by-side layout)

### Animations
- **Fade-in**: Smooth entrance animations for meditation cards
- **Loading dots**: Animated loading indicator during meditation generation
- **Hover effects**: Interactive button and navigation states

## 🔒 Privacy & Security

### Data Protection
- **No data persistence**: Demo app doesn't store user data permanently
- **Secure authentication flow**: Proper form validation and error handling
- **Privacy-first design**: Minimal data collection with full transparency

### Compliance
- **GDPR Ready**: Comprehensive privacy policy covering all data practices
- **Terms of Service**: Clear usage guidelines and user responsibilities
- **Cookie Policy**: Transparent about tracking and analytics

## 🧘‍♀️ Meditation Features

### Prompt Categories
- **Stress Relief**: Anxiety management and relaxation
- **Sleep**: Better sleep and bedtime routines
- **Focus**: Concentration and productivity enhancement
- **Mindfulness**: Present-moment awareness practices

### Generated Content
- **Personalized**: Tailored to user's specific needs and prompts
- **Guided Format**: Step-by-step meditation instructions
- **Calming Language**: Peaceful, supportive tone throughout
- **Flexible Duration**: Adaptable to different time constraints

## 🚀 Deployment

The app is production-ready and can be deployed to:
- **Vercel**: `npm run build` + Vercel CLI
- **Netlify**: Direct GitHub integration
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for public repositories

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@meditationapp.com or create an issue in the repository.

---

**Made with ❤️ for your wellness journey** 🌿