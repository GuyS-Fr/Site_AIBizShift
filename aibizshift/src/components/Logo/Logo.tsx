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
    <span className={clsx('text-2xl font-bold', className)}>
      <span className="text-[#F59E0B]">AI</span>
      <span className="text-[#334155] dark:text-[#94A3B8]">Biz</span>
      <span className="text-[#3B82F6]">Shift</span>
    </span>
  )
}
