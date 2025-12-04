<template>
  <div>
    <HeroSection />
    <PortfolioSection />
    <ConceptSection />
    <ScheduleSection />
    <TrustSection />
    <CtaSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import ConceptSection from '../components/ConceptSection.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import TrustSection from '../components/TrustSection.vue'
import CtaSection from '../components/CtaSection.vue'

useHead({
  title: 'TEA 2026',
  meta: [
    { name: 'description', content: '次世代のビジネスリーダーが集う、国内最大級のロボティクス・カンファレンス。' }
  ]
})
</script>
