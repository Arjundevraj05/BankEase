import React from 'react'
import styles from "./styles"

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Business from '@/components/Business';
import Billing from '@/components/Billing';
import CardDeal from '@/components/CardDeal';
import Testimonials from '@/components/Testimonials';
import Footer2 from '@/components/Footer2';
import Navbar from '@/components/Navbar';
import PageGlow from '@/components/PageGlow';

const uiux = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-primary">
      <PageGlow variant="landing" />

      <div className="relative z-10">
        <header>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={styles.boxWidth}>
              <Navbar />
            </div>
          </div>
        </header>

        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Hero />
          </div>
        </div>

        <div className={`${styles.paddingX} pb-20 pt-8 sm:pb-28`}>
          <div className={`${styles.boxWidth} mx-auto flex flex-col gap-24 sm:gap-32`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Footer2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default uiux;
