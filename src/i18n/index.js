import { ref, provide, inject } from 'vue'
import en from './locales/en.js'
import zh from './locales/zh.js'

const locale = ref('en')
const messages = {
  en,
  zh
}

const i18n = {
  locale,
  t(key) {
    const keys = key.split('.')
    let value = messages[locale.value]
    for (const k of keys) {
      value = value?.[k]
      if (!value) return key
    }
    return value || key
  },
  setLocale(lang) {
    locale.value = lang === '中文' ? 'zh' : 'en'
  },
  getLocale() {
    return locale.value === 'zh' ? '中文' : 'EN'
  }
}

export const useI18n = () => {
  const instance = inject('i18n')
  if (!instance) {
    throw new Error('useI18n must be used within an app with i18n provided')
  }
  return instance
}

export const createI18n = () => {
  return i18n
}

export const provideI18n = (app) => {
  app.provide('i18n', i18n)
}