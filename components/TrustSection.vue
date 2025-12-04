<template>
  <section id="data" class="relative py-24 bg-main overflow-hidden">
    <!-- Curved Mask Container -->
    <div class="w-full h-[600px] md:h-[700px] relative">
      <div class="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover" 
           style="background-image: url('/images/trust_bg_new.png'); clip-path: ellipse(150% 55% at 50% 50%);">
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Content -->
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        
        <!-- Centered Key Message -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
            ロボティクスが拓く、<br>
            無限の可能性。
          </h2>
          <p class="text-lg md:text-xl text-gray-100 font-light tracking-wide drop-shadow-md">
            想像を超えた未来を、共に創造する。
          </p>
        </div>



      </div>
    </div>
  </section>
</template>
