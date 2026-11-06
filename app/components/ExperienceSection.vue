<template>
  <section id="experience" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <SectionHeading
        num="01"
        eyebrow="Experience"
        title="Where I've shipped."
        lede="The teams I've worked with, the areas I owned, and the products I helped build."
      />

      <div class="space-y-16 md:space-y-20">
        <article
          v-for="job in work" :key="job.company"
          class="grid lg:grid-cols-12 gap-x-12 gap-y-6 reveal reveal-delay-1"
        >
          <!-- Meta column -->
          <header class="lg:col-span-3">
            <div class="lg:sticky lg:top-28">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <time class="text-[0.72rem] font-mono uppercase tracking-wider text-[var(--muted)]">{{ job.date }}</time>
                <span
                  v-if="job.current"
                  class="text-[0.65rem] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"
                >Current</span>
              </div>
              <a
                v-if="job.url" :href="job.url" target="_blank" rel="noopener"
                class="font-head font-semibold text-2xl text-[var(--accent)] hover:underline underline-offset-4"
              >{{ job.company }}</a>
              <div v-else class="font-head font-semibold text-2xl text-[var(--accent)]">{{ job.company }}</div>
              <div class="mt-1 text-[0.88rem] text-[var(--text-dim)]">{{ job.loc }}</div>
            </div>
          </header>

          <!-- Content column -->
          <div class="lg:col-span-9 lg:border-l lg:border-[var(--border)] lg:pl-12">
            <h3 class="font-head font-semibold text-xl md:text-2xl text-[var(--text)] tracking-tight">{{ job.role }}</h3>
            <p class="mt-3 text-[0.95rem] text-[var(--text-dim)] leading-relaxed max-w-3xl">{{ job.summary }}</p>

            <!-- Focus areas -->
            <div v-if="job.focus" class="mt-8">
              <SubHeading>Focus areas</SubHeading>
              <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-px rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--border)]">
                <div v-for="f in job.focus" :key="f.title" class="p-5 bg-[var(--bg)]">
                  <div class="text-[0.72rem] font-mono uppercase tracking-wider text-[var(--accent)] mb-2">{{ f.title }}</div>
                  <p class="text-[0.86rem] text-[var(--text-dim)] leading-relaxed">{{ f.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Products -->
            <div v-if="job.products" class="mt-10">
              <SubHeading>Products</SubHeading>
              <div class="grid gap-4">
                <article
                  v-for="p in job.products" :key="p.name"
                  class="card p-5 sm:p-7 transition-colors hover:border-[var(--border-strong)]"
                >
                  <header class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 class="font-head font-semibold text-[1.1rem] text-[var(--text)]">
                      {{ p.name }}
                      <span class="ml-1.5 font-body font-normal text-[0.85rem] text-[var(--muted)]">— {{ p.tagline }}</span>
                    </h4>
                    <span class="text-[0.7rem] font-mono uppercase tracking-wider text-[var(--muted)] whitespace-nowrap">{{ p.date }}</span>
                  </header>

                  <ul class="mt-4 space-y-2">
                    <li
                      v-for="h in p.highlights" :key="h"
                      class="relative pl-5 text-[0.9rem] text-[var(--text-dim)] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-px before:bg-[var(--accent)]"
                    >{{ h }}</li>
                  </ul>

                  <div class="mt-5 flex flex-wrap gap-1.5">
                    <span v-for="t in p.tags" :key="t" class="pill">{{ t }}</span>
                  </div>
                </article>
              </div>
            </div>

            <div v-else-if="job.tags" class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="t in job.tags" :key="t" class="pill">{{ t }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const SubHeading = defineComponent((_, { slots }) => () =>
  h('div', { class: 'flex items-baseline gap-3 mb-4' }, [
    h('div', { class: 'w-6 h-px bg-[var(--border-strong)]' }),
    h('h5', { class: 'text-[0.72rem] font-mono uppercase tracking-[0.2em] text-[var(--muted)]' }, slots.default?.()),
  ]),
)

interface Product {
  name: string
  tagline: string
  date: string
  highlights: string[]
  tags: string[]
}

interface Focus {
  title: string
  desc: string
}

interface Job {
  date: string
  role: string
  company: string
  url?: string
  loc: string
  current?: boolean
  summary: string
  focus?: Focus[]
  products?: Product[]
  tags?: string[]
}

const work: Job[] = [
  {
    date: 'Feb 2025 — Present',
    role: 'Software Engineer',
    company: 'AppsCode',
    url: 'https://appscode.com',
    loc: 'Dhaka, Bangladesh',
    current: true,
    summary:
      'Frontend engineer on AppsCode\'s cloud products. I build the consoles customers use to run virtual machines, Kubernetes clusters, and networking, plus the account and organization side of the platform.',
    focus: [
      { title: 'Compute', desc: 'The VM lifecycle: create, resize, volumes, snapshots, and scheduled backups on KubeStash.' },
      { title: 'Kubernetes', desc: 'Cluster creation from API-driven create-options, plus node pools and cluster settings.' },
      { title: 'Networking', desc: 'VPCs, subnets, ACLs, security groups, elastic IPs, DNS, load balancers, site-to-site VPN, and a topology view.' },
      { title: 'Platform', desc: 'Admin tooling for regions, provider-neutral datacenters, flavors, machine tiers, and load-balancer clusters.' },
    ],
    products: [
      {
        name: 'AppsCode Cloud Platform',
        tagline: 'self-service cloud console',
        date: 'Jul 2025 — Present',
        highlights: [
          'Main contributor from the first commit, with 100+ pull requests. Built the app shell, layout, sidebar, dark mode, i18n, and the dashboard, billing, monitoring, and settings pages.',
          'Built the compute, Kubernetes, networking, and admin areas above, from list and detail pages to multi-step create flows with protovalidate checks.',
          'Moved data fetching to typed ConnectRPC clients with TanStack Query and server-side pagination, with jittered status polling for long-running resources.',
          'Moved the app onto the shared design system, extending AcCard, AcButton, and AcTooltip and adding a component preview gallery, and handled accessibility, SEO, and the move to Node 24 CI.',
        ],
        tags: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'TanStack Query', 'ConnectRPC', 'Protobuf', 'ECharts', 'NATS', 'Cypress'],
      },
      {
        name: 'Platform UI',
        tagline: 'ACE platform & account portal',
        date: 'Mar 2025 — Jun 2025',
        highlights: [
          'Rebuilt user profiles, organizations, teams, and member management: banners, public tabs, and permission-aware member actions.',
          'Redesigned the user and organization settings layouts, and turned the token, OAuth app, and allowed-domain modals into routable pages.',
          'Fixed site-administration flows (create and delete users, dashboard) and the OAuth2 payload and sorting.',
          'Fixed SSR hydration and reload issues in Nuxt 3 so profile and organization pages render correctly on first load.',
        ],
        tags: ['Nuxt 3', 'Vue 3', 'SSR', 'Vuex', 'Bulma', 'Cypress'],
      },
    ],
  },
  {
    date: 'Sep 2024 — Jan 2025',
    role: 'Junior Software Engineer',
    company: 'AppifyLab',
    loc: 'Sylhet, Bangladesh',
    summary:
      'Developed full-stack features with React, Redux Toolkit, and AdonisJS. Designed and maintained relational schemas with MySQL and Lucid ORM.',
    tags: ['React', 'Redux', 'Next.js', 'AdonisJS', 'MySQL'],
  },
]
</script>
