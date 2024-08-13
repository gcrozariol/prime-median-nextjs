import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AtSign, Github, Linkedin, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full pt-24 pl-24 pr-24 max-w-7xl items-center justify-between text-sm">
        <p className="font-semibold text-lg">Prime Median</p>
        <ModeToggle />
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="number" placeholder="Enter a number" />
        <Button type="submit">Send</Button>
      </div>

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
