<template>
  <section id="concept" class="py-24 bg-white">
    <div class="container mx-auto px-6 md:px-12 max-w-7xl">
      <div class="mb-16 max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">Concept & Categories</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          「テクノロジー × エンターテインメント × アート」を体現する、<br>
          3つの競技カテゴリー。
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
        <!-- Card 1: Runway (Large) -->
        <div class="md:col-span-2 bg-white p-12 flex flex-col justify-between min-h-[300px] group hover:bg-gray-50 transition-colors duration-300">
          <div>
            <div class="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6 text-main">
              <span class="font-bold text-xl">01</span>
            </div>
            <h3 class="text-2xl font-bold text-main mb-3">ランウェイ走行</h3>
            <p class="text-gray-500 leading-relaxed mb-4 text-sm font-medium">
              Runway Walk
            </p>
            <p class="text-gray-600">
              15m程度のランウェイの往復に加え、ポージングやパフォーマンスを行う。<br>
              技術的な安定性と、魅せる演出力が問われるメインカテゴリー。
            </p>
          </div>
        </div>

        <!-- Card 2: Dance -->
        <div class="bg-white p-12 flex flex-col justify-between min-h-[300px] group hover:bg-gray-50 transition-colors duration-300">
          <div>
            <div class="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6 text-main">
              <span class="font-bold text-xl">02</span>
            </div>
            <h3 class="text-xl font-bold text-main mb-3">ダンスパフォーマンス</h3>
            <p class="text-gray-500 text-sm font-medium leading-relaxed mb-2">
              Dance
            </p>
             <p class="text-gray-600 text-sm">
              楽曲に合わせた動作が可能か。<br>
              リズム感と表現力を競う。
            </p>
          </div>
        </div>

        <!-- Card 3: Exhibition -->
        <div class="bg-white p-12 flex flex-col justify-between min-h-[300px] group hover:bg-gray-50 transition-colors duration-300">
           <div>
            <div class="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6 text-main">
              <span class="font-bold text-xl">03</span>
            </div>
            <h3 class="text-xl font-bold text-main mb-3">展示</h3>
            <p class="text-gray-500 text-sm font-medium leading-relaxed mb-2">
              Exhibition
            </p>
            <p class="text-gray-600 text-sm">
              自由演技・展示。<br>
              独創的なアイデアと技術をアピール。
            </p>
          </div>
        </div>

        <!-- Card 4: Innovation (Large - kept for balance or can be removed/changed) -->
        <div class="md:col-span-2 bg-white p-12 flex flex-col justify-between min-h-[300px] group hover:bg-gray-50 transition-colors duration-300">
           <div>
            <div class="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6 text-main">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-main mb-3">Innovation & Impact</h3>
            <p class="text-gray-500 leading-relaxed">
              全てのカテゴリーにおいて、技術的な完成度だけでなく、<br>
              「見る人の心を動かすか」が重要な審査基準となります。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
