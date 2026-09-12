import { useNewsSubscriptionForm } from "~/widgets/footer/model/hooks/useNewsSubscriptionForm";

export const NewsSubscriptionForm = () => {
  const { email, setEmail, submitted, handleSubmit } = useNewsSubscriptionForm();

  return (
    <div>
      <h3 className="mb-6 text-xs font-semibold tracking-[0.25em] text-black uppercase">
        Stay connected
      </h3>

      {submitted ? (
        <p className="text-sm">Thank you for subscribing!</p>
      ) : (
        <>
          <p className="mb-5 text-sm text-black/60">
            Join our universe and get 10% off your first order.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              required
              className="w-full border p-3 rounded-xl border-black/25 text-sm transition-colors duration-100"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute top-1/2 right-0 -translate-y-1/2 p-3 rounded-xl border border-black/25 text-black transition-colors hover:bg-gold-light"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </form>
        </>
      )}
    </div>
  );
};