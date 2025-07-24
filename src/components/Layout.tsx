import React from 'react';
import { HeaderSection } from '../app/sections/HeaderSection/HeaderSection';
import { FooterSection } from '../app/sections/FooterSection';
import type { ApiResult } from '@/services/api';
import type { FooterData } from '@/services/global';

type LayoutProps = {
  children: React.ReactNode;
  footer: ApiResult<FooterData> | null;
};

export const Layout: React.FC<LayoutProps> = ({ children, footer = null }) => (
  <div className='flex flex-col w-full min-h-screen bg-white overflow-hidden'>
    <HeaderSection />
    {children}
    <FooterSection footer={footer} />
  </div>
);
