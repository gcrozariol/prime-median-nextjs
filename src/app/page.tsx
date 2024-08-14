import { FindPrimeMedianNumbersForm } from '@/components/find-prime-median-numbers-form'
import { ModeToggle } from '@/components/theme-toggle'
import { AtSign, Github, Linkedin, Twitter } from 'lucide-react'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full pt-24 pl-24 pr-24 max-w-7xl items-center justify-between text-sm">
        <p className="font-semibold text-lg">Prime Median</p>
        <ModeToggle />
      </div>

      <FindPrimeMedianNumbersForm />

      <div className="flex w-full items-center justify-center gap-4 p-24 bg-black ">
        <p>Developed by Guilherme Crozariol</p>
        <p>|</p>
        <div className="flex gap-3">
          <a href="https://github.com/gcrozariol" target="_blank">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/gcrozariol" target="_blank">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com/gcrozariol" target="_blank">
            <Twitter size={18} />
          </a>
          <a href="mailto:guicrozariol@gmail.com" target="_blank">
            <AtSign size={18} />
          </a>
        </div>
      </div>
    </main>
  )
}
