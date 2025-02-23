// src/app/card-request/page.tsx
import CardRequestComponent from '@/components/CardRequestComponent'

export default function CardRequest() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-medium text-gray-900">Card Request</h2>
        <p className="text-sm text-gray-500">View and attend to card requests here.</p> 
      </div>
      <CardRequestComponent />
    </div>
  )
}