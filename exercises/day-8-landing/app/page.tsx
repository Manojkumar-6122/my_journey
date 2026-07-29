export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="text-center py-24 px-5">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to Next.js
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Build faster websites using React and Next.js.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Get Started
        </button>
      </section>

      <section className="grid gap-6 px-8 pb-20 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">Fast</h2>
          <p>
            Next.js automatically optimizes your application for speed.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">SEO Friendly</h2>
          <p>
            Better search engine visibility with server-side rendering.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-bold">Developer Friendly</h2>
          <p>
            File-based routing and built-in optimizations improve productivity.
          </p>
        </div>
      </section>
    </main>
  );
}