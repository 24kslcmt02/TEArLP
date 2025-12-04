<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center transition-all duration-300">
      <div class="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/images/logo.png" alt="GRC Logo" class="h-10 w-auto" />
          <span class="font-bold text-lg tracking-tight text-main">TEA</span>
        </NuxtLink>

        <!-- Back to Home Link -->
        <NuxtLink to="/" class="text-sm font-medium text-gray-500 hover:text-main transition-colors">
          ← HOME
        </NuxtLink>
      </div>
    </header>

    <!-- FAQ Content -->
    <main class="pt-32 pb-24">
      <div class="container mx-auto px-6 md:px-12 max-w-4xl">
        <div class="mb-16 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-main mb-6 tracking-tight">
            よくある質問
          </h1>
          <p class="text-gray-600 text-lg">
            Frequently Asked Questions
          </p>
        </div>

        <!-- FAQ List -->
        <div class="space-y-8">
          <!-- Q1 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q1：まだ作品が未完成ですが参加できますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A1：</strong>問題ありません。研究途中や展示のみでも歓迎します。探究学習の成果共有が目的のため、完成度は問いません。
            </p>
          </div>

          <!-- Q2 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q2：競技ではないのですか？順位はつきますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A2：</strong>順位付け・審査は行いません。生徒の挑戦意欲を守り、発表経験を重視しています。
            </p>
          </div>

          <!-- Q3 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q3：参加費はかかりますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A3：</strong>無料です（作品点数が複数でも追加費用なし）。
            </p>
          </div>

          <!-- Q4 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q4：安全面の管理はどうなっていますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A4：</strong>事前提出の危険物チェックリストと、当日の電源・動線管理担当者の配置により、安全管理体制を運営側が責任持って整えます。賠償責任／傷害保険にも加入します。
            </p>
          </div>

          <!-- Q5 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q5：付添教員は何名必要ですか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A5：</strong>最小1名で構いません。生徒のみのブース管理は不可ですが、最小限で参加できます。
            </p>
          </div>

          <!-- Q6 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q6：搬入や設営のサポートはありますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A6：</strong>希望に応じて運営がサポートします。大型作品がある場合は事前にご相談ください。
            </p>
          </div>

          <!-- Q7 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q7：発火物や危険機械の持ち込みは可能ですか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A7：</strong>原則不可ですが、事前相談の上、安全が確保できる場合は例外検討します。
            </p>
          </div>

          <!-- Q8 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q8：観客は入りますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A8：</strong>一般来場者の入場を想定しています。展示導線を分離し、生徒の安全を最優先します。
            </p>
          </div>

          <!-- Q9 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q9：発表形式に制限はありますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A9：</strong>展示、動作デモ、映像発表のいずれも可能です。必要備品があれば事前に相談ください。
            </p>
          </div>

          <!-- Q10 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q10：生徒が話せる時間はどの程度ですか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A10：</strong>ブース常駐方式のため、興味を持った観客／他校生徒へ随時説明を行う形式です。ステージ発表枠を希望する学校には時間を確保します。
            </p>
          </div>

          <!-- Q11 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q11：広報活動はありますか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A11：</strong>地元メディア取材を調整中です。学校広報への寄与が期待できます。
            </p>
          </div>

          <!-- Q12 -->
          <div class="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 class="text-xl font-bold text-main mb-4">
              Q12：参加申し込み期限はいつですか？
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-main">A12：</strong>2026年2月末（予定）<br>
              <span class="text-sm text-gray-600">※多数の場合は早期締切の可能性があります。</span>
            </p>
          </div>
        </div>

        <!-- Back to Home Button -->
        <div class="text-center mt-16">
          <NuxtLink to="/" class="inline-block px-12 py-4 bg-main text-white font-bold text-base tracking-widest hover:bg-gray-800 transition-colors duration-300">
            ← トップページへ戻る
          </NuxtLink>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-main text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <p class="text-sm text-gray-400">
          © 2026 TEA. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'FAQ - TEA 2026',
  meta: [
    {
      name: 'description',
      content: 'よくある質問 - TEA 2026に関するよくある質問と回答'
    }
  ]
})
</script>
