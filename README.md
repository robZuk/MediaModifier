# Media Modifier

### https://media-modifier.vercel.app/


![readme](https://github.com/robZuk/MediaModifier/assets/40764780/9c3f64f5-a07b-459d-932f-488c8e275485)


### Technologies

- TypeScript
- React 18
- Next.js 14
- Tailwind
- React Hook Form 7
- MongoDB
- Mongoose
- Stripe
- Clerk 

### Features

👉 Authentication and Authorization: Secure user access with registration, login, and route protection.

👉 Community Image Showcase: Explore user transformations with easy navigation using pagination

👉 Advanced Image Search: Find images by content or objects present inside the image quickly and accurately

👉 Image Restoration: Revive old or damaged images effortlessly

👉 Image Recoloring: Customize images by replacing objects with desired colors easily

👉 Image Generative Fill: Fill in missing areas of images seamlessly

👉 Object Removal: Clean up images by removing unwanted objects with precision

👉 Background Removal: Extract objects from backgrounds with ease

👉 Download Transformed Images: Save and share AI-transformed images conveniently

👉 Transformed Image Details: View details of transformations for each image

👉 Transformation Management: Control over deletion and updates of transformations

👉 Credits System: Earn or purchase credits for image transformations

👉 Profile Page: Access transformed images and credit information personally

👉 Credits Purchase: Securely buy credits via Stripe for uninterrupted use

👉 Responsive UI/UX: A seamless experience across devices with a user-friendly interface


### Env Variables

Create a .env file in then root and add the following

```
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Install Dependencies

npm install


### Run
npm run dev




