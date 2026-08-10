This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quote email delivery

Quote requests are submitted to `app/api/quote/route.ts` and emailed to
`ashwanikumar.tiku@gmail.com` through Resend.

1. Create a Resend account and verify the domain used for outgoing email.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` to your Resend API key.
4. Set `QUOTE_FROM_EMAIL` to a sender on your verified domain.
5. Add the same variables to the production deployment environment.

Never commit `.env.local` or a real API key. The form accepts an optional STL,
STEP, STP, IGES, IGS, OBJ, PNG, JPG, or JPEG attachment up to 25 MB. Confirm
that the selected hosting platform supports request bodies of that size; some
serverless platforms apply a lower request-size limit.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
