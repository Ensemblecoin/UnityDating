export default function VirtualMusicRoom() {
  return (
    <section id="music-room" className="py-20 bg-gradient-to-b from-[#f8f1ff] to-[#eadcff]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Virtual Music Room</h2>
          <p className="text-lg text-muted-foreground">Share your favorite tracks and discover new music together</p>
        </div>
        <div className="bg-white rounded-lg p-8 border border-border">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🎵</div>
              <p className="text-muted-foreground">Virtual Music Room Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
