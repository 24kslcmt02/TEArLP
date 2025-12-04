<template>
  <div class="font-sans text-main bg-background antialiased selection:bg-accent selection:text-white">
    <!-- Sticky Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center transition-all duration-300">
      <div class="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="/images/logo.png" alt="GRC Logo" class="h-10 w-auto" />
          <span class="font-bold text-lg tracking-tight text-main">TEA</span>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#concept" class="text-sm font-medium text-gray-500 hover:text-main transition-colors">CONCEPT</a>
          <a href="#schedule" class="text-sm font-medium text-gray-500 hover:text-main transition-colors">SCHEDULE</a>
          <a href="#data" class="text-sm font-medium text-gray-500 hover:text-main transition-colors">DATA</a>
          <NuxtLink to="/faq" class="text-sm font-medium text-gray-500 hover:text-main transition-colors">FAQ</NuxtLink>
          <a href="https://forms.gle/HNoWgnK96RKyzSF78" target="_blank" rel="noopener noreferrer" class="px-6 py-2 bg-main text-white text-xs font-bold tracking-wider hover:bg-gray-800 transition-colors duration-300">
            ENTRY
          </a>
        </nav>

        <!-- Mobile Menu Button (Placeholder) -->
        <button class="md:hidden text-main">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-20">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-main text-white py-12 border-t border-gray-800">
      <div class="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-sm text-gray-400">
          &copy; 2026 TEA Executive Committee. All rights reserved.
        </div>
        <div class="flex gap-6">
          <NuxtLink to="/faq" class="text-sm text-gray-400 hover:text-white transition-colors">FAQ</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// App.vue now serves as layout wrapper for all pages
</script>

<style>
/* Global Styles if needed */
body {
  @apply bg-background;
}
</style>
