import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY?.trim())

export function LoginButton({ className, onClick }) {
  if (!clerkEnabled) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          onClick?.()
          alert(
            'Clerk is not configured yet.\n\nAdd your publishable key to hotel/.env:\nVITE_CLERK_PUBLISHABLE_KEY=pk_test_...\n\nThen restart: npm run dev'
          )
        }}
      >
        Login
      </button>
    )
  }

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button type="button" className={className} onClick={onClick}>
            Login
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  )
}
