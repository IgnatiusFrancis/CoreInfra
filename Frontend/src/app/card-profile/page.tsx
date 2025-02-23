
import CardProfileComponent from '@/components/CardProfileComponent'

export default function CardProfile() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-medium text-gray-900">Card Profile</h2>
        <p className="text-sm text-gray-500">Create, view and edit card profiles here.</p>
      </div>
      <CardProfileComponent />
    </div>
  )
}