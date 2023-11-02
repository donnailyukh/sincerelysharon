import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

import Provider from '@/components/provider';
import ScrollUpButton from '@/components/scroll-up-button';
import '@/styles/globals.css';
import '@/styles/paginate.css';

import { Oooh_Baby } from 'next/font/google'
import { News_Cycle } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'


const ooohBaby = Oooh_Baby({
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-ooohbaby'
})

const newsCycle = News_Cycle({
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-newsCycle'
})

const playfair = Playfair_Display({
  weight: '600',
  subsets: ['latin'], 
  variable: '--font-playfair'
})

export const metadata = {
  title: {
    default: 'Sincerely Sharon',
    template: '%s | Sincerely Sharon',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ooohBaby.variable} ${newsCycle.variable} ${playfair.variable} font-sans`}>
      <body className="text-primary font-newsCycle bg-primary relative mx-auto mb-20 flex w-full max-w-screen-xl flex-col px-[10vw] md:px-[5vw]">
        <Provider>
          <main>{children}</main>
          <div className="fixed bottom-12 right-10">
            <ScrollUpButton />
          </div>
        </Provider>
      </body>
    </html>
  );
}
