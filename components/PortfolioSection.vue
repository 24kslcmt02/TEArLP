<template>
  <section id="portfolio" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 max-w-7xl">
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">Portfolio</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          これまでの実績・活動履歴
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12">
        <!-- Category: Planning & Operation -->
        <div>
          <h3 class="text-xl font-bold text-main mb-6 border-b-2 border-main pb-2 inline-block">
            企画・運営協力
          </h3>
          <ul class="space-y-4">
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p class="font-bold text-lg text-gray-800">第2回 SPROUT DANCE FES 2025</p>
            </li>
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p class="font-bold text-lg text-gray-800">Cuugal ダンスフェスティバル by Popteen</p>
            </li>
            <li class="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p class="font-bold text-lg text-gray-800">SPROUT Dance Festival 2025 supported by Cuugal</p>
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
          <img src="/images/portfolio_03.jpg" alt="Portfolio Image 3" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_04.jpg" alt="Portfolio Image 4" class="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_05.jpg" alt="Portfolio Image 5" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_06.jpg" alt="Portfolio Image 6" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_07.jpg" alt="Portfolio Image 7" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_08.jpg" alt="Portfolio Image 8" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/images/portfolio_09.jpg" alt="Portfolio Image 9" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>
