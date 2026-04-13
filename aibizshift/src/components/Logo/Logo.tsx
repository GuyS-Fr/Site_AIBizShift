import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span className={clsx('text-2xl font-bold text-slate-800 dark:text-white', className)}>
      AI<span className="text-amber-500 dark:text-blue-400">Biz</span>Shift
    </span>
  )
}
