/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import type CmGuess from '@/components/CmGuess.vue'
import type CmSwiper from '@/components/CmGuess.vue'

import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    // export interface Globalcomponentsxtxswiper {
    // CmSwiper: typeof CmSwiper
    // CmGuess: typeof CmGuess
  }
}
