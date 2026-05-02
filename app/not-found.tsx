export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Go Home</a>
    </div>
  );
}