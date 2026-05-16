export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <p className="mb-4 text-gray-600">"I found my soulmate through Unity Dating!"</p>
            <p className="font-bold">- Sarah & John</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <p className="mb-4 text-gray-600">"Amazing platform for music lovers."</p>
            <p className="font-bold">- Emma & Mike</p>
          </div>
        </div>
      </div>
    </section>
  )
}
