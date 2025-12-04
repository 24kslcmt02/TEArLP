<template>
  <section class="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
    <div class="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Content -->
        <div class="space-y-8">
          <div class="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold tracking-widest uppercase rounded-sm">
            TEA
          </div>
          <h1 class="font-bold text-main leading-tight tracking-tight">
            <span class="block text-4xl md:text-5xl lg:text-6xl mb-1">TECHNOLOGY</span>
            <span class="block text-4xl md:text-5xl lg:text-6xl mb-1">ENTERTAINMENT</span>
            <span class="block text-4xl md:text-5xl lg:text-6xl">ART</span>
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            次世代イノベーター及び<br>
            新たな価値を創出することを理念とする。
          </p>
          <div class="pt-4">
            <a href="https://forms.gle/HNoWgnK96RKyzSF78" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-main text-white font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors duration-300 shadow-lg text-center inline-block">
              ENTRY NOW
            </a>
          </div>
        </div>

        <!-- Right Column: Visual -->
        <div class="relative h-[500px] w-full bg-gray-200 overflow-hidden">
          <!-- Geometric Pattern (CSS) -->
          <div class="absolute inset-0 opacity-20">
             <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-64 h-64 border border-main/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div class="w-96 h-96 border border-main/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          </div>
          <!-- Image Placeholder -->
           <img src="/images/hero_bg.png" alt="Hero Visual" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
        </div>
      </div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
  </section>
</template>
