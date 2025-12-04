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
    { name: 'description', content: 'TEA (Technology, Entertainment, Art) - 次世代イノベーター及び新たな価値を創出することを理念とするプロジェクト。' }
  ]
})
</script>
