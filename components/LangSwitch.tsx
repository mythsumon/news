'use client'

import { useState } from 'react'

interface LangSwitchProps {
  currentLang: 'KR' | 'EN' | 'MM'
  onLangChange: (lang: 'KR' | 'EN' | 'MM') => void
}

export default function LangSwitch({ currentLang, onLangChange }: LangSwitchProps) {
  const langs: Array<'KR' | 'EN' | 'MM'> = ['KR', 'EN', 'MM']

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      {langs.map((lang) => (
        <button
          key={lang}
          onClick={() => onLangChange(lang)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 ${
            currentLang === lang
              ? 'bg-white text-accent-green shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          aria-label={`Switch to ${lang}`}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
