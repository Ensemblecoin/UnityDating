export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Unity Dating</h3>
            <p className="text-sm opacity-75">Connect with music lovers worldwide</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">Features</a></li>
              <li><a href="#" className="hover:opacity-100">Pricing</a></li>
              <li><a href="#" className="hover:opacity-100">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">About</a></li>
              <li><a href="#" className="hover:opacity-100">Blog</a></li>
              <li><a href="#" className="hover:opacity-100">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">Privacy</a></li>
              <li><a href="#" className="hover:opacity-100">Terms</a></li>
              <li><a href="#" className="hover:opacity-100">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Unity Dating by EnsembleCoin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
