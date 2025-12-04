<template>
  <section id="schedule" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 max-w-5xl">
      <div class="mb-16 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-main mb-4 tracking-tight">Roadmap & Schedule</h2>
        <p class="text-gray-500 text-lg">プロジェクトの進行スケジュール</p>
      </div>

      <div class="relative">
        <!-- Vertical Line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

        <div class="space-y-12">
          <!-- Item 1 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center group">
            <div class="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0">
              <span class="text-sm font-bold tracking-wider text-gray-400 uppercase">Step 01</span>
              <h3 class="text-xl font-bold text-main mt-1">エントリー受付開始</h3>
              <p class="text-gray-500 mt-1 text-sm font-medium">ENTRY OPEN</p>
            </div>
            <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full transform -translate-x-1/2 z-10 group-hover:border-accent transition-colors duration-300"></div>
            <div class="md:w-1/2 md:pl-12 pl-20 mt-2 md:mt-0">
              <span class="text-2xl font-display font-bold text-gray-800">2025.12.01</span>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center group">
            <div class="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0 md:order-1 order-2">
               <span class="text-2xl font-display font-bold text-gray-800">2026.01.10</span>
            </div>
            <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full transform -translate-x-1/2 z-10 group-hover:border-accent transition-colors duration-300"></div>
            <div class="md:w-1/2 md:pl-12 pl-20 mt-2 md:mt-0 md:order-2 order-1">
              <span class="text-sm font-bold tracking-wider text-gray-400 uppercase">Step 02</span>
              <h3 class="text-xl font-bold text-main mt-1">公式告知・詳細公開</h3>
              <p class="text-gray-500 mt-1 text-sm font-medium">OFFICIAL ANNOUNCEMENT</p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center group">
            <div class="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0">
              <span class="text-sm font-bold tracking-wider text-gray-400 uppercase">Step 03</span>
              <h3 class="text-xl font-bold text-main mt-1">出場チーム発表</h3>
              <p class="text-gray-500 mt-1 text-sm font-medium">TEAM REVEAL</p>
            </div>
            <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full transform -translate-x-1/2 z-10 group-hover:border-accent transition-colors duration-300"></div>
            <div class="md:w-1/2 md:pl-12 pl-20 mt-2 md:mt-0">
              <span class="text-2xl font-display font-bold text-gray-800">2026.03.01</span>
            </div>
          </div>

          <!-- Item 4 (Grand Final) -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center group">
            <div class="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0 md:order-1 order-2">
               <span class="text-3xl font-display font-bold text-accent">2026.03.28</span>
            </div>
            <div class="absolute left-8 md:left-1/2 w-6 h-6 bg-accent border-4 border-white shadow-lg rounded-full transform -translate-x-1/2 z-10"></div>
            <div class="md:w-1/2 md:pl-12 pl-20 mt-2 md:mt-0 md:order-2 order-1">
              <span class="text-sm font-bold tracking-wider text-accent uppercase">Final Stage</span>
              <h3 class="text-2xl font-bold text-main mt-1">開催当日</h3>
              <p class="text-gray-500 mt-1 font-medium text-sm">GRAND FINAL</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No complex logic needed for this static presentation
</script>
