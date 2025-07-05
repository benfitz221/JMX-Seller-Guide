# JMX Realty Stamford Sellers Guide

A comprehensive React application providing strategic market insights for Stamford, Connecticut home sellers with lead capture functionality.

## Features

- **Lead Capture Form**: Collects prospect information before granting access
- **Market Analysis**: Comprehensive data from 2,500+ local transactions
- **Interactive Charts**: Visual representation of neighborhood data
- **Responsive Design**: Works on all devices
- **Professional Styling**: Consistent with JMX Realty branding

## Technology Stack

- React 19 with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- Recharts for data visualization
- Firebase for lead data storage (ready to configure)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Firebase Configuration (When Ready)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing project
3. Add a web app to your project
4. Copy the Firebase configuration
5. Replace the placeholder values in `src/firebase.ts`
6. Create a Firestore database
7. Set up the collection structure:
   - Collection name: `leads`
   - Fields: `id`, `firstName`, `lastName`, `email`, `phone`, `timestamp`

### 3. Firebase Rules (Recommended)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{document} {
      allow create: if true;
      allow read, write: if false; // Restrict read/write to admin only
    }
  }
}
```

### 4. Development

```bash
npm run dev
# or
pnpm dev
```

### 5. Building for Production

```bash
npm run build
# or
pnpm build
```

## Lead Data Structure

The form captures the following data:

```typescript
interface LeadData {
  id: number;           // Auto-generated timestamp
  firstName: string;    // Required
  lastName: string;     // Required
  email: string;        // Required
  phone?: string;       // Optional
  timestamp: string;    // ISO string
}
```

## Deployment

This application is designed to be deployed to Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard if needed
4. Deploy

## QR Code Generation

Once deployed, you can generate QR codes pointing to your Vercel deployment URL for easy access at open houses, marketing materials, etc.

## Content Updates

All market data, statistics, and content can be updated in the `App.tsx` file. The application uses real citations and sources as provided in the original research documents.

## Support

For technical support or questions about the application, please contact the development team.

---

**Note**: Replace the placeholder Firebase configuration with your actual Firebase project details before deploying to production.