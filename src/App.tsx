import { teamMembers } from './data/team-members/index'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './components/ThemeProvider'
import { MemberCard } from './components/MemberCard'
import { Star } from 'lucide-react'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        
        <div className="absolute inset-0">
          <Star className="absolute top-20 left-[20%] h-3 w-3 text-blue-500/20 animate-float" />
          <Star className="absolute top-40 right-[30%] h-2 w-2 text-purple-500/20 animate-float" style={{ animationDelay: '1s' }} />
          <Star className="absolute bottom-32 left-[60%] h-4 w-4 text-blue-500/20 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <Navbar />
        <main className="container mx-auto px-4 py-24 relative">
          <h1 className="text-4xl font-bold text-center mb-2">Our Team</h1>
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Meet our talented team members
            </p>
            <div className="flex justify-center gap-2 mb-12">
              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </main>

        <footer className="border-t mt-32 bg-muted/5 relative">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-500">About Us</h3>
                <p className="text-sm text-muted-foreground">
                  We're a team of passionate individuals dedicated to creating amazing experiences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-500">Quick Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#team" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-500">Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Follow us on social media for updates and news.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App