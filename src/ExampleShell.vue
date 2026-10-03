<script setup lang="ts">
defineProps<{ demo: string }>()
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark">SX</span>
        <span>Schedule-X examples</span>
      </div>
      <div class="user-summary">
        <span class="status-pill"><span class="status-dot" /> Local demo</span>
        <div class="account">
          <span class="avatar">EX</span>
          <span class="account-copy">
            <strong>Example user</strong>
            <span>Frontend sample</span>
          </span>
        </div>
      </div>
    </header>
    <div class="shell-body">
      <aside class="workspace-sidebar">
        <p class="sidebar-label">Workspace</p>
        <div class="nav-item"><span class="nav-icon">▦</span> Calendar</div>
        <div class="sidebar-footer">
          <span class="sync-icon">↻</span>
          <span class="sidebar-footer-copy">
            <strong>Sample data</strong>
            <span>Runs locally in your browser</span>
          </span>
        </div>
      </aside>
      <main class="workspace">
        <div class="page-heading">
          <p class="eyebrow">Your workspace</p>
          <h1>Calendar</h1>
          <p class="subtitle">Explore Schedule-X with a focused, production-inspired frontend shell.</p>
        </div>
        <section class="calendar-panel">
          <div class="panel-meta"><strong>{{ demo }}</strong><span>Interactive example</span></div>
          <div class="calendar-stage"><slot /></div>
        </section>
      </main>
    </div>
  </div>
</template>
