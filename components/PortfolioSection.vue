<template>
  <section id="portfolio" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 max-w-7xl">
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">Portfolio</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          これまでの実績・活動履歴
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Category 1: Planning & Operation -->
        <div>
          <h3 class="text-xl font-bold text-main mb-6 border-b-2 border-main pb-2 inline-block">
            企画・運営協力
          </h3>
          <ul class="space-y-4">
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p class="font-bold text-lg text-gray-800">第2回 SPROUT DANCE FES 2025</p>
            </li>
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p class="font-bold text-lg text-gray-800">原宿ランウェイS/S supported byキューガル</p>
              <p class="text-sm text-gray-500 mt-1">2023 ~ 2025</p>
            </li>
          </ul>
        </div>

        <!-- Category 2: Live -->
        <div>
          <h3 class="text-xl font-bold text-main mb-6 border-b-2 border-main pb-2 inline-block">
            ライブ・運営協力
          </h3>
          <ul class="space-y-4">
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span class="font-bold text-lg text-gray-800">S.I.M.P Vol.14<br><span class="text-sm font-normal text-gray-600">〜CIRCUIT SPECIAL〜</span></span>
              <span class="text-sm font-display font-bold text-accent whitespace-nowrap">2025/5/10</span>
            </li>
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span class="font-bold text-lg text-gray-800">Galaxy SUPER LIVE 2025</span>
              <span class="text-sm font-display font-bold text-accent whitespace-nowrap">2025/3/29</span>
            </li>
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span class="font-bold text-lg text-gray-800">NEO IDOLEGION FREELIVE Vol.68</span>
              <span class="text-sm font-display font-bold text-accent whitespace-nowrap">2025/3/5</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_01.jpg" alt="Portfolio Image 1" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_02.jpg" alt="Portfolio Image 2" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_03.jpg" alt="Portfolio Image 3" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_04.jpg" alt="Portfolio Image 4" class="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>
